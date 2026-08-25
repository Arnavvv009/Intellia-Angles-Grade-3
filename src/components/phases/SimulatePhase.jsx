import React, { useState, useEffect } from 'react';
import Mascot from '../shared/Mascot';
import AngleRotator from '../shared/AngleRotator';
import ClockFace from '../shared/ClockFace';
import { ANGLE_TYPES, CORNER_OBJECTS, CLOCK_TIMES, classifyAngle } from '../../data/angleData';

const ANGLE_KEYS = ['acute', 'right', 'obtuse'];

export default function SimulatePhase({ onNext, playSound, speak }) {
  const [station, setStation] = useState(0); // 0=Spinner, 1=Checker, 2=Match, 3=Clock Sandbox
  const [completedStations, setCompletedStations] = useState([false, false, false, false]);

  // General Speak on Station change
  useEffect(() => {
    if (station === 0) {
      speak("Welcome to the Angle Spinner! Drag the arm to change the angle, and toggle highlights to explore vertex, arms, and the interior.");
    } else if (station === 1) {
      speak("In the Right-Angle Checker, tap each corner and decide: is it a Right Angle, smaller, or bigger?");
    } else if (station === 2) {
      speak("Let's match! Match the angle clues on the left with their correct names on the right.");
    } else if (station === 3) {
      speak("Welcome to the Clock Hands Sandbox! Guess the angle type for each clock time, then click watch it to check.");
    }
  }, [station, speak]);

  const markStationCompleted = (idx) => {
    setCompletedStations(prev => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  // -------------------------------------------------------------
  // STATION A: Angle Spinner State & Render
  // -------------------------------------------------------------
  const [spinnerDegrees, setSpinnerDegrees] = useState(90);
  const [highlightMode, setHighlightMode] = useState(null); // 'vertex', 'arms', 'interior', 'tester'
  const [presetTracks, setPresetTracks] = useState(new Set());
  const [highlightTracks, setHighlightTracks] = useState(new Set());

  const spinnerClass = classifyAngle(spinnerDegrees);

  const handlePresetSelect = (key) => {
    setSpinnerDegrees(ANGLE_TYPES[key].degrees);
    speak(ANGLE_TYPES[key].name);
    playSound('explore');
    setPresetTracks(prev => {
      const next = new Set(prev);
      next.add(key);
      if (next.size === 3 && highlightTracks.size >= 3) markStationCompleted(0);
      return next;
    });
  };

  const handleHighlightToggle = (mode) => {
    setHighlightMode(prev => (prev === mode ? null : mode));
    playSound('explore');
    setHighlightTracks(prev => {
      const next = new Set(prev);
      next.add(mode);
      if (next.size >= 3 && presetTracks.size === 3) markStationCompleted(0);
      return next;
    });
  };

  // -------------------------------------------------------------
  // STATION B: Right-Angle Checker State & Render
  // -------------------------------------------------------------
  const [checkerAnswers, setCheckerAnswers] = useState({}); // objectId -> 'right'|'acute'|'obtuse'|null (correctness tracked separately)
  const [checkerCorrect, setCheckerCorrect] = useState({});

  const handleCheckerGuess = (objId, guess) => {
    const obj = CORNER_OBJECTS.find(o => o.id === objId);
    const isCorrect = guess === obj.angleType;
    setCheckerAnswers(prev => ({ ...prev, [objId]: guess }));
    setCheckerCorrect(prev => {
      const next = { ...prev, [objId]: isCorrect };
      if (isCorrect) playSound('correct'); else playSound('wrong');
      const allCorrect = CORNER_OBJECTS.every(o => next[o.id] === true);
      if (allCorrect) markStationCompleted(1);
      return next;
    });
  };

  const resetStationB = () => {
    setCheckerAnswers({});
    setCheckerCorrect({});
    setCompletedStations(prev => {
      const updated = [...prev];
      updated[1] = false;
      return updated;
    });
    playSound('explore');
  };

  // -------------------------------------------------------------
  // STATION C: Match & Sort State & Render
  // -------------------------------------------------------------
  const [selectedClue, setSelectedClue] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [matches, setMatches] = useState({});

  const clueCards = [
    { text: "Fits a square-corner tester exactly, no gap", type: 'right' },
    { text: "Leaves a gap when tested — narrow and pointy", type: 'acute' },
    { text: "Spills outside the tester — wide open", type: 'obtuse' },
  ];
  const labelCards = [
    { text: "Bigger than a Right Angle", type: 'obtuse' },
    { text: "Right Angle", type: 'right' },
    { text: "Smaller than a Right Angle", type: 'acute' },
  ];

  const handleMatchClick = (side, idx) => {
    if (side === 'left') {
      if (Object.keys(matches).includes(idx.toString())) return;
      setSelectedClue(idx);
      if (selectedLabel !== null) verifyMatch(idx, selectedLabel);
    } else {
      if (Object.values(matches).includes(idx)) return;
      setSelectedLabel(idx);
      if (selectedClue !== null) verifyMatch(selectedClue, idx);
    }
  };

  const verifyMatch = (clueIdx, labelIdx) => {
    const clue = clueCards[clueIdx];
    const label = labelCards[labelIdx];
    if (clue.type === label.type) {
      playSound('correct');
      setMatches(prev => {
        const next = { ...prev, [clueIdx]: labelIdx };
        if (Object.keys(next).length === 3) markStationCompleted(2);
        return next;
      });
    } else {
      playSound('wrong');
    }
    setSelectedClue(null);
    setSelectedLabel(null);
  };

  // -------------------------------------------------------------
  // STATION D: Clock Hands Sandbox State & Render
  // -------------------------------------------------------------
  const [clockGuesses, setClockGuesses] = useState({});
  const [clockDemo, setClockDemo] = useState(null); // clock id currently shown with arc
  const [demoTrigger, setDemoTrigger] = useState(0);

  const handleClockGuess = (clockId, guess) => {
    const clock = CLOCK_TIMES.find(c => c.id === clockId);
    const isCorrect = guess === clock.angleType;
    setClockGuesses(prev => {
      const next = { ...prev, [clockId]: { guess, correct: isCorrect } };
      if (isCorrect) playSound('explore'); else playSound('wrong');
      const allCorrect = CLOCK_TIMES.every(c => next[c.id]?.correct === true);
      if (allCorrect) markStationCompleted(3);
      return next;
    });
  };

  const triggerWatchIt = (clockId) => {
    setClockDemo(clockId);
    setDemoTrigger(prev => prev + 1);
    playSound('shapeReveal');
    const clock = CLOCK_TIMES.find(c => c.id === clockId);
    speak(`At ${clock.label}, the hands make a ${ANGLE_TYPES[clock.angleType].shortLabel}.`);
  };

  const resetStationD = () => {
    setClockGuesses({});
    setClockDemo(null);
    setDemoTrigger(0);
    setCompletedStations(prev => {
      const updated = [...prev];
      updated[3] = false;
      return updated;
    });
    playSound('explore');
  };

  const currentStationComplete = completedStations[station];

  return (
    <div style={{ width: '100%' }}>
      {/* Simulation Header */}
      <div className="simulate-header">
        <h2 className="simulate-heading">✏️ Simulate</h2>
        <p className="simulate-sub">Explore and discover — no wrong answers!</p>
      </div>

      {/* Station Selector Tabs */}
      <div className="simulate-tabs">
        {[
          { id: 0, label: "Angle Spinner", badge: "A", color: "#a78bfa" },
          { id: 1, label: "Right-Angle Checker", badge: "B", color: "#34d399" },
          { id: 2, label: "Match & Sort", badge: "C", color: "#ffbe1a" },
          { id: 3, label: "Clock Hands Sandbox", badge: "D", color: "#ff8a50" }
        ].map((tab) => (
          <div
            key={tab.id}
            className={`sim-tab ${station === tab.id ? 'sim-tab--active' : ''}`}
            onClick={() => setStation(tab.id)}
          >
            <div className="sim-tab-badge" style={{ backgroundColor: tab.color }}>
              {tab.badge}
            </div>
            <span style={{ fontSize: '13px', fontWeight: '700' }}>{tab.label}</span>
            {completedStations[tab.id] && <span style={{ color: 'var(--accent-success-green)' }}>✓</span>}
          </div>
        ))}
      </div>

      {/* Main Working Card */}
      <div className="main-card" style={{ minHeight: '520px' }}>

        {/* ================= STATION A: ANGLE SPINNER ================= */}
        {station === 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 className="sim-station-title">
              <span>📐</span> Angle Spinner
            </h3>
            <p className="sim-station-instruction">Drag the gold arm to change the angle — watch the classification update live!</p>

            {/* Preset Buttons */}
            <div className="shape-selector-row">
              {ANGLE_KEYS.map((k) => (
                <button
                  key={k}
                  className={`shape-selector-btn ${spinnerClass === k ? 'shape-selector-btn--active' : ''}`}
                  onClick={() => handlePresetSelect(k)}
                >
                  {ANGLE_TYPES[k].emoji} {ANGLE_TYPES[k].shortLabel}
                </button>
              ))}
            </div>

            {/* Angle Rotator Canvas */}
            <AngleRotator
              degrees={spinnerDegrees}
              onChange={(deg) => setSpinnerDegrees(deg)}
              highlight={highlightMode}
              showTester={highlightMode === 'tester'}
              size={200}
            />

            {/* Mode Highlight Buttons */}
            <div className="highlight-controls">
              <button
                className={`btn-highlight-toggle ${highlightMode === 'vertex' ? 'btn-highlight-toggle--active' : ''}`}
                onClick={() => handleHighlightToggle('vertex')}
              >
                Highlight Vertex
              </button>
              <button
                className={`btn-highlight-toggle ${highlightMode === 'arms' ? 'btn-highlight-toggle--active' : ''}`}
                onClick={() => handleHighlightToggle('arms')}
              >
                Highlight Arms
              </button>
              <button
                className={`btn-highlight-toggle ${highlightMode === 'interior' ? 'btn-highlight-toggle--active' : ''}`}
                onClick={() => handleHighlightToggle('interior')}
              >
                Highlight Interior
              </button>
              <button
                className={`btn-highlight-toggle ${highlightMode === 'tester' ? 'btn-highlight-toggle--active' : ''}`}
                onClick={() => handleHighlightToggle('tester')}
              >
                Show Square Tester
              </button>
            </div>

            {/* Static Feedback Table */}
            <div className="property-live-tally">
              <div className="tally-row">
                <span className="tally-item" style={{ color: ANGLE_TYPES[spinnerClass].color }}>
                  {Math.round(spinnerDegrees)}° — {ANGLE_TYPES[spinnerClass].shortLabel}
                </span>
              </div>
              <div className="tally-classification">
                This angle has {ANGLE_TYPES[spinnerClass].propertyDescription}.
              </div>
            </div>

            {/* Mascot fun fact bubble */}
            <Mascot mood="thinking" bubble={ANGLE_TYPES[spinnerClass].funFact} />
          </div>
        )}

        {/* ================= STATION B: RIGHT-ANGLE CHECKER ================= */}
        {station === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 className="sim-station-title" style={{ margin: 0 }}>
                <span>🎯</span> Right-Angle Checker
              </h3>
              <button
                className="btn-nav-outline"
                onClick={resetStationB}
                style={{ padding: '6px 12px', fontSize: '12px' }}
              >
                Reset ↺
              </button>
            </div>
            <p className="sim-station-instruction">Tap each corner, then choose whether it's a Right Angle, smaller, or bigger.</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px', marginTop: '8px' }}>
              {CORNER_OBJECTS.map((obj) => {
                const guess = checkerAnswers[obj.id];
                const correct = checkerCorrect[obj.id];
                return (
                  <div
                    key={obj.id}
                    style={{
                      background: 'var(--surface-card-nested)',
                      borderRadius: '14px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      border: correct === true ? '2px solid var(--accent-success-green)' : '2px solid transparent'
                    }}
                  >
                    <span style={{ fontSize: '30px' }}>{obj.emoji}</span>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted-lavender)', textAlign: 'center' }}>{obj.label}</span>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {ANGLE_KEYS.map((k) => (
                        <button
                          key={k}
                          className={`btn-highlight-toggle ${guess === k ? 'btn-highlight-toggle--active' : ''}`}
                          style={{ padding: '4px 8px', fontSize: '10px' }}
                          onClick={() => handleCheckerGuess(obj.id, k)}
                        >
                          {ANGLE_TYPES[k].emoji}
                        </button>
                      ))}
                    </div>
                    {correct === true && <span style={{ fontSize: '11px', color: 'var(--accent-success-green)', fontWeight: '800' }}>✓ {ANGLE_TYPES[obj.angleType].shortLabel}</span>}
                    {correct === false && <span style={{ fontSize: '11px', color: 'var(--accent-alert-coral)', fontWeight: '800' }}>Try again!</span>}
                  </div>
                );
              })}
            </div>

            <Mascot mood="thinking" bubble="Line up a paper corner against each shape — does it match exactly, leave a gap, or spill over?" />
          </div>
        )}

        {/* ================= STATION C: MATCH & SORT ================= */}
        {station === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <h3 className="sim-station-title">
              <span>🧩</span> Match & Sort
            </h3>
            <p className="sim-station-instruction">Match each clue on the left with the correct angle name on the right.</p>

            <div className="unfold-sandbox">
              <div
                style={{
                  width: '100%',
                  height: '100px',
                  backgroundColor: 'var(--surface-pill-darkest)',
                  border: '1px dashed rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: 'var(--accent-gold)',
                  fontWeight: '700',
                  gap: '8px',
                  textAlign: 'center',
                  padding: '0 12px'
                }}
              >
                {selectedClue !== null ? (
                  <>
                    <span>🎁 Clue:</span>
                    <span>{clueCards[selectedClue].text}</span>
                  </>
                ) : (
                  <span>Select a card on the left to start matching!</span>
                )}
              </div>

              <div className="matching-game">
                <div className="match-left">
                  {clueCards.map((clue, i) => {
                    const isMatched = Object.keys(matches).includes(i.toString());
                    const isSelected = selectedClue === i;
                    return (
                      <div
                        key={i}
                        className={`match-card ${isSelected ? 'match-card--selected' : ''} ${isMatched ? 'match-card--completed' : ''}`}
                        onClick={() => handleMatchClick('left', i)}
                      >
                        <span>{clue.text}</span>
                        {isMatched && <span>✓</span>}
                      </div>
                    );
                  })}
                </div>

                <div className="match-right">
                  {labelCards.map((label, i) => {
                    const matchValue = Object.values(matches).indexOf(i);
                    const isMatched = matchValue !== -1;
                    const isSelected = selectedLabel === i;
                    return (
                      <div
                        key={i}
                        className={`match-card ${isSelected ? 'match-card--selected' : ''} ${isMatched ? 'match-card--completed' : ''}`}
                        onClick={() => handleMatchClick('right', i)}
                      >
                        <span>{ANGLE_TYPES[label.type].emoji} {label.text}</span>
                        {isMatched && <span>Matched</span>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Mascot mood="thinking" bubble="A square corner is 90°! What about narrower or wider corners?" />
          </div>
        )}

        {/* ================= STATION D: CLOCK HANDS SANDBOX ================= */}
        {station === 3 && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <h3 className="sim-station-title" style={{ margin: 0 }}>
                <span>🕐</span> Clock Hands Sandbox
              </h3>
              <button
                className="btn-nav-outline"
                onClick={resetStationD}
                style={{ padding: '6px 12px', fontSize: '12px' }}
              >
                Reset ↺
              </button>
            </div>
            <p className="sim-station-instruction">Guess the angle type the clock hands make, then click 👀 to check.</p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'stretch' }}>
              {/* Left Column: Guesses Table */}
              <div style={{ flex: '1.2 1 320px' }} className="physics-sandbox">
                <div className="sandbox-row" style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', gridTemplateColumns: '80px 1fr 1fr 1fr 34px' }}>
                  <th>Time</th>
                  <th>Right?</th>
                  <th>Smaller?</th>
                  <th>Bigger?</th>
                  <th></th>
                </div>

                {CLOCK_TIMES.map((clock) => {
                  const state = clockGuesses[clock.id];
                  const btnStyle = (key) => {
                    if (!state || state.guess !== key) return 'sandbox-toggle-btn';
                    return state.correct ? 'sandbox-toggle-btn sandbox-toggle-btn--yes' : 'sandbox-toggle-btn sandbox-toggle-btn--no';
                  };
                  return (
                    <div key={clock.id} className="sandbox-row" style={{ gridTemplateColumns: '80px 1fr 1fr 1fr 34px' }}>
                      <td className="physics-shape-name">🕐 {clock.label}</td>
                      <td>
                        <button className={btnStyle('right')} onClick={() => handleClockGuess(clock.id, 'right')}>90°</button>
                      </td>
                      <td>
                        <button className={btnStyle('acute')} onClick={() => handleClockGuess(clock.id, 'acute')}>&lt;90°</button>
                      </td>
                      <td>
                        <button className={btnStyle('obtuse')} onClick={() => handleClockGuess(clock.id, 'obtuse')}>&gt;90°</button>
                      </td>
                      <td>
                        {state?.correct && (
                          <button className="watch-it-btn" onClick={() => triggerWatchIt(clock.id)} style={{ padding: '3px 6px', fontSize: '9px' }}>👀</button>
                        )}
                      </td>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Demo Arena */}
              <div style={{ flex: '0.8 1 200px', display: 'flex', flexDirection: 'column' }}>
                <div className="physics-stage-viewport" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, minHeight: '140px', marginTop: 0 }}>
                  <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '10px', color: 'var(--text-muted-lavender)' }}>
                    Demo Arena: {clockDemo ? `Clock at ${CLOCK_TIMES.find(c => c.id === clockDemo).label}` : 'Click the Eye 👀 icon to test'}
                  </div>
                  {clockDemo && (
                    <div key={demoTrigger} style={{ animation: 'bounceIn 0.5s ease forwards' }}>
                      <ClockFace
                        hourDeg={CLOCK_TIMES.find(c => c.id === clockDemo).hourDeg}
                        minuteDeg={CLOCK_TIMES.find(c => c.id === clockDemo).minuteDeg}
                        size={120}
                        showAngleArc={true}
                        angleType={CLOCK_TIMES.find(c => c.id === clockDemo).angleType}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Mascot mood="happy" bubble="At 3 o'clock, the hands make a perfect Right Angle!" />
          </div>
        )}

      </div>

      {/* Navigation Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <button
          className="btn-nav-outline"
          onClick={() => { if (station > 0) setStation(prev => prev - 1); }}
          disabled={station === 0}
        >
          🠔 Previous Station
        </button>

        {station < 3 ? (
          <button className="btn-nav-outline" onClick={() => setStation(prev => prev + 1)}>
            Next Station ➔
          </button>
        ) : (
          <button
            className="btn-gold"
            onClick={onNext}
            style={{ padding: '12px 28px', fontSize: '15px' }}
          >
            Begin Challenge Game! ➔
          </button>
        )}
      </div>
    </div>
  );
}
