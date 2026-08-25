import React, { useState, useEffect } from 'react';
import Mascot from '../shared/Mascot';
import AngleRotator from '../shared/AngleRotator';
import ClockFace from '../shared/ClockFace';
import { questionBank } from '../../data/questionBank';

// Simple helper to shuffle array
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const WORLDS = [
  { id: 0, name: "Right Angle Recognition", color: "#34D399", focus: "Spotting Right Angles", difficulty: "Easy" },
  { id: 1, name: "Bigger or Smaller?", color: "#A78BFA", focus: "Comparing angles to a Right Angle", difficulty: "Easy-Med" },
  { id: 2, name: "Clock Corner Kingdom", color: "#4A90D9", focus: "Angles made by clock hands", difficulty: "Medium" },
  { id: 3, name: "Around the House", color: "#FF8A50", focus: "Everyday object angles", difficulty: "Medium" },
  { id: 4, name: "Corner Sorting Station", color: "#e6a200", focus: "Sorting angles into 3 groups", difficulty: "Med-Hard" },
  { id: 5, name: "Paper Tester Factory", color: "#8b5cf6", focus: "Using a square-corner tester", difficulty: "Medium" },
  { id: 6, name: "Shape Corner Castle", color: "#06b6d4", focus: "Corners of 2D shapes", difficulty: "Hard" },
  { id: 7, name: "Right Angle or Not Lab", color: "#ec4899", focus: "Fine discrimination near 90°", difficulty: "Hard" },
  { id: 8, name: "Real World Angle Safari", color: "#ef4444", focus: "Singapore real-world angles", difficulty: "Hard" },
  { id: 9, name: "Mystery Angle Palace", color: "#10b981", focus: "Mixed hard, reverse reasoning", difficulty: "Hardest" }
];

// Emoji fallback map for real-world object visuals
const OBJECT_EMOJIS = {
  book: '📖', window: '🪟', paper: '📄', table: '🍽️', pizza: '🍕', door: '🚪',
  scissors: '✂️', laptop: '💻', sandwich: '🥪', umbrella: '☂️', openbook: '📖',
  fan: '🪭', ladder: '🪜', doorframe: '🚪', seesaw: '🛝', swingchair: '🪑',
  rulers: '📏', square: '⬛', rectangle: '▭', triangle: '🔺', triangle2: '🔻',
  pentagon: '⬠', star: '⭐', frame: '🖼️', octagon: '🛑', circle: '⚪',
  shape: '🔷', cake: '🍰', prata: '🫓', tile: '🀄', grille: '🪟', pole: '🚩',
  slide: '🛝', crossing: '🚸', durian: '🥭', signpost: '🚧'
};

export default function PlayPhase({
  onNext,
  playSound,
  speak,
  xp,
  setXp,
  totalStars,
  setTotalStars,
  streak,
  setStreak,
  maxStreak,
  setMaxStreak,
  worldScores,
  setWorldScores,
  unlockedBadges,
  unlockBadge,
  usedQuestionIds,
  setUsedQuestionIds,
  onResetWorlds,
  setCorrectAnswers
}) {
  const [activeWorld, setActiveWorld] = useState(null); // null means World Select screen
  const [questions, setQuestions] = useState([]); // shuffled questions for active world
  const [currQIdx, setCurrQIdx] = useState(0); // 0-9

  // In-game temporary state
  const [lives, setLives] = useState(3);
  const [attempts, setAttempts] = useState(0); // attempts on current question
  const [hintsUsed, setHintsUsed] = useState(0); // 0, 1, 2
  const [answeredState, setAnsweredState] = useState(null); // 'correct', 'incorrect', or null
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [floatScore, setFloatScore] = useState(null); // { x, y, val } for float up anim

  // Filter and shuffle questions for the active world
  const startWorld = (worldId) => {
    const worldQuestions = questionBank.filter(q => q.world === worldId);
    const usedForThisWorld = usedQuestionIds[worldId] || [];
    const availableQuestions = worldQuestions.filter(q => !usedForThisWorld.includes(q.id));

    const questionsToUse = availableQuestions.length > 0
      ? availableQuestions
      : worldQuestions;

    setQuestions(shuffle(questionsToUse).slice(0, 10)); // Take 10 questions
    setCurrQIdx(0);
    setLives(3);
    setAttempts(0);
    setHintsUsed(0);
    setAnsweredState(null);
    setSelectedOption(null);
    setShowExplanation(false);
    setActiveWorld(worldId);
    playSound('levelUp');
    speak(`Welcome to World ${worldId + 1}: ${WORLDS[worldId].name}. Let's answer some questions!`);
  };

  const currentQ = questions[currQIdx];

  // Speak question on load
  useEffect(() => {
    if (activeWorld !== null && currentQ) {
      speak(currentQ.questionText);
    }
  }, [currQIdx, activeWorld, currentQ, speak]);

  const handleAnswerSubmit = (option, e) => {
    if (answeredState === 'correct') return; // already solved

    setSelectedOption(option);
    const isCorrect = option === currentQ.correctAnswer;
    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);

    // Mark question as used
    setUsedQuestionIds(prev => {
      const world = { ...prev };
      if (!world[activeWorld]) world[activeWorld] = [];
      if (!world[activeWorld].includes(currentQ.id)) {
        world[activeWorld].push(currentQ.id);
      }
      return world;
    });

    if (isCorrect) {
      playSound('correct');
      setAnsweredState('correct');
      setCorrectAnswers(prev => prev + 1);
      setStreak(prev => {
        const nextStreak = prev + 1;
        if (nextStreak > maxStreak) setMaxStreak(nextStreak);
        return nextStreak;
      });

      // Calculate XP
      let earnedXP = 10;
      if (nextAttempts === 2) earnedXP = 7;
      if (hintsUsed > 0) earnedXP = 5;

      // Streak multiplier bonus
      let bonusXP = 0;
      if (streak >= 4) {
        bonusXP = 5;
        playSound('streak');
      }

      const totalEarned = earnedXP + bonusXP;
      setXp(prev => prev + totalEarned);

      // Floating score visual
      if (e) {
        const rect = e.target.getBoundingClientRect();
        setFloatScore({
          x: rect.left + rect.width / 2,
          y: rect.top,
          val: `+${totalEarned} XP`
        });
        setTimeout(() => setFloatScore(null), 1000);
      }

      speakPraisePhrase();

      // Check badges
      if (streak + 1 >= 10) {
        unlockBadge('streak_legend');
      }

    } else {
      playSound('wrong');
      setStreak(0);
      setShowExplanation(true);
      setAnsweredState('incorrect');

      if (lives > 1) {
        setLives(prev => prev - 1);
      } else {
        // 0 lives remaining
        setLives(0);
        speak("Oh no! You have run out of hearts. Let's retry this world.");
      }
    }
  };

  const speakPraisePhrase = () => {
    const praises = ["Excellent!", "Well done!", "Brilliant!", "You got it!", "Super smart!"];
    speak(praises[Math.floor(Math.random() * praises.length)]);
  };

  const handleNextQuestion = () => {
    if (currQIdx < 9) {
      setCurrQIdx(prev => prev + 1);
      setAttempts(0);
      setHintsUsed(0);
      setAnsweredState(null);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Completed world! Calculate score
      const finalWorldScore = Math.max(0, lives + 7); // Score based on remaining lives

      setWorldScores(prev => {
        const nextScores = [...prev];
        nextScores[activeWorld] = finalWorldScore;
        return nextScores;
      });

      // Calculate Stars earned (10 score = 3 stars, 8-9 = 2 stars, 6-7 = 1 star, <6 = 0)
      let stars = 0;
      if (finalWorldScore >= 9) stars = 3;
      else if (finalWorldScore >= 7) stars = 2;
      else if (finalWorldScore >= 5) stars = 1;

      setTotalStars(prev => prev + stars);

      playSound('badge');

      // Unlock Angle-Specific Badges
      if (activeWorld === 2 && finalWorldScore >= 9) unlockBadge('clock_champion');
      if (activeWorld === 8 && finalWorldScore >= 9) unlockBadge('real_world_champion');
      if (activeWorld === 9 && finalWorldScore >= 9) unlockBadge('perfect_world');

      speak(`Fabulous! You completed the world with ${stars} stars and a score of ${finalWorldScore} out of 10.`);
      setActiveWorld(null); // return to select screen
    }
  };

  const handleRetryWorld = () => {
    startWorld(activeWorld);
  };

  const handleUseHint = () => {
    if (hintsUsed < 2) {
      setHintsUsed(prev => prev + 1);
      playSound('explore');
      const hintText = hintsUsed === 0 ? currentQ.hint1 : currentQ.hint2;
      speak(hintText);
    }
  };

  // World unlocking validation
  const isWorldUnlocked = (idx) => {
    if (idx === 0) return true;
    const priorScore = worldScores[idx - 1];
    return priorScore !== null && priorScore >= 5; // Unlocks at score 5+ (1 star)
  };

  // -------------------------------------------------------------
  // RENDER GRAPHICS CANVAS
  // -------------------------------------------------------------
  const renderVisual = () => {
    if (!currentQ || !currentQ.visual) return null;
    const { visual, targetDegrees, hourDeg, minuteDeg, objectName } = currentQ;

    if (visual === 'angle_view') {
      return (
        <AngleRotator degrees={targetDegrees ?? 90} size={140} interactive={false} showDegreeLabel={false} />
      );
    }

    if (visual === 'angle_tester') {
      return (
        <AngleRotator degrees={targetDegrees ?? 90} size={140} interactive={false} showTester={true} showDegreeLabel={false} />
      );
    }

    if (visual === 'clock_view') {
      return (
        <ClockFace hourDeg={hourDeg ?? 90} minuteDeg={minuteDeg ?? 0} size={140} showAngleArc={true} />
      );
    }

    if (visual === 'real_object') {
      const objectEmoji = OBJECT_EMOJIS[objectName] || '🎁';
      return (
        <div style={{ fontSize: '72px', animation: 'floatActor 2s ease-in-out infinite alternate' }}>
          {objectEmoji}
        </div>
      );
    }

    // Default fallback
    return (
      <AngleRotator degrees={90} size={140} interactive={false} />
    );
  };

  // -------------------------------------------------------------
  // VIEWPORT: WORLD SELECT SCREEN
  // -------------------------------------------------------------
  if (activeWorld === null) {
    // Check total completion for badge unlock
    const allCompleted = worldScores.every(score => score !== null);
    if (allCompleted) {
      unlockBadge('geometry_master');
    }

    return (
      <div className="main-card" style={{ minHeight: '520px' }}>
        <div className="simulate-header">
          <h2 className="simulate-heading">🎮 Choose Your World!</h2>
          <p className="simulate-sub">Beat each world to unlock the next. Earn stars and XP!</p>
        </div>

        <div className="world-select-list">
          {WORLDS.map((w, idx) => {
            const unlocked = isWorldUnlocked(idx);
            const score = worldScores[idx];
            let starRating = 0;
            if (score >= 9) starRating = 3;
            else if (score >= 7) starRating = 2;
            else if (score >= 5) starRating = 1;

            return (
              <div key={w.id} className={`world-card ${unlocked ? '' : 'world-card--locked'}`}>
                <div className="world-card-left">
                  {unlocked ? (
                    <div className="world-dot-icon" style={{ backgroundColor: `${w.color}20`, border: `2.5px solid ${w.color}` }}>
                      <span style={{ fontSize: '14px' }}>📐</span>
                    </div>
                  ) : (
                    <div className="world-lock-icon">
                      🔒
                    </div>
                  )}
                  <div className="world-info">
                    <span className="world-name">
                      World {w.id + 1}: {w.name}
                    </span>
                    <span className="world-difficulty">
                      Focus: {w.focus} ({w.difficulty})
                    </span>
                  </div>
                </div>

                <div className="world-card-right">
                  {unlocked && score !== null && (
                    <div className="world-stars">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <span key={i} style={{ opacity: i < starRating ? 1 : 0.2 }}>⭐</span>
                      ))}
                    </div>
                  )}

                  {unlocked ? (
                    <button className="btn-play-world" onClick={() => startWorld(w.id)}>
                      {score !== null ? 'REPLAY' : 'PLAY'}
                    </button>
                  ) : (
                    <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-locked-gray)' }}>LOCKED</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Reset Worlds button */}
        <button
          className="btn-nav-outline"
          onClick={onResetWorlds}
          style={{ marginTop: '20px', padding: '10px 24px', fontSize: '14px', alignSelf: 'center' }}
        >
          🔄 Reset Worlds
        </button>

        {/* Complete reflect CTA when at least World 1 is done */}
        {worldScores[0] !== null && (
          <button
            className="btn-gold"
            onClick={onNext}
            style={{ marginTop: '10px', padding: '12px 28px', fontSize: '15px', alignSelf: 'center' }}
          >
            Go to Reflection ➔
          </button>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEWPORT: QUIZ HUD & GAME SCREEN
  // -------------------------------------------------------------
  const pct = Math.round(((currQIdx + 1) / 10) * 100);

  return (
    <div style={{ width: '100%' }}>
      {/* HUD stack */}
      <div className="quiz-header">
        {/* World Pill */}
        <div className="world-pill-badge">
          <div className="world-badge-dot" style={{ backgroundColor: WORLDS[activeWorld].color }} />
          <span>{WORLDS[activeWorld].name}</span>
        </div>

        {/* Stats HUD Bar */}
        <div className="stats-hud">
          <span className="hud-item hud-item--xp">
            ⭐ {xp} XP
          </span>
          <span className="hud-item hud-item--lives">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} style={{ opacity: i < lives ? 1 : 0.2 }}>❤️</span>
            ))}
          </span>
          <span className="hud-item hud-item--streak">
            🔥 {streak}x Streak
          </span>
        </div>

        {/* Progress labels */}
        <div className="progress-row">
          <span>Question {currQIdx + 1}/10</span>
          <span>{pct}%</span>
        </div>

        {/* Progress tracker bar */}
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Main Question Card */}
      <div className="main-card" style={{ minHeight: '460px' }}>

        {/* If user failed with 0 lives */}
        {lives === 0 ? (
          <div className="results-box" style={{ justifyContent: 'center', height: '100%', marginTop: '40px' }}>
            <span style={{ fontSize: '64px' }}>😢</span>
            <h3 className="results-title" style={{ color: 'var(--accent-alert-coral)' }}>Out of Hearts!</h3>
            <p style={{ color: 'var(--text-muted-lavender)' }}>
              Vertex says: "No worries! Let's practice some more. Try again to master this world!"
            </p>
            <div className="results-actions">
              <button className="btn-gold" onClick={handleRetryWorld}>
                🔄 Retry World
              </button>
              <button className="btn-nav-outline" onClick={() => setActiveWorld(null)}>
                🚪 Quit World
              </button>
            </div>
          </div>
        ) : (
          <div className="quiz-question-box">

            {/* Question title */}
            <h2 className="quiz-question-text">{currentQ.questionText}</h2>

            {/* Canvas / Render visual model */}
            <div className="quiz-visual-area">
              {renderVisual()}
            </div>

            {/* 2x2 Answer Grid */}
            <div className="answer-grid">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedOption === opt;
                const isCorrectAns = opt === currentQ.correctAnswer;

                let btnClass = "answer-btn";
                if (answeredState) {
                  if (isCorrectAns) {
                    btnClass += " answer-btn--correct";
                  } else if (isSelected) {
                    btnClass += " answer-btn--incorrect";
                  }
                }

                return (
                  <button
                    key={i}
                    className={btnClass}
                    onClick={(e) => handleAnswerSubmit(opt, e)}
                    disabled={answeredState !== null}
                  >
                    {opt.toString()}
                  </button>
                );
              })}
            </div>

            {/* Float up score animation */}
            {floatScore && (
              <div
                className="float-up-score"
                style={{ left: `${floatScore.x}px`, top: `${floatScore.y}px` }}
              >
                {floatScore.val}
              </div>
            )}

            {/* Drawer for Hints */}
            {hintsUsed > 0 && (
              <div className="hint-drawer">
                <span className="hint-drawer-icon">💡</span>
                <span className="hint-drawer-text">
                  {hintsUsed === 1 ? currentQ.hint1 : currentQ.hint2}
                </span>
              </div>
            )}

            {/* Drawer for Explanation on double failure */}
            {showExplanation && (
              <div className="explanation-panel">
                <div className="explanation-heading">💡 Correct Answer Explanation:</div>
                <div className="explanation-text">{currentQ.explanation}</div>
              </div>
            )}

            {/* Hint toggles & Action bottom bar */}
            <div className="quiz-actions">
              <button
                className="btn-hint"
                onClick={handleUseHint}
                disabled={hintsUsed >= 2 || answeredState === 'correct'}
                style={{ opacity: answeredState === 'correct' ? 0.3 : 1 }}
              >
                💡 {hintsUsed === 0 ? 'Use Hint' : hintsUsed === 1 ? 'Show Another Hint' : 'No More Hints'}
              </button>

              {answeredState !== null && (
                <button className="btn-gold" onClick={handleNextQuestion} style={{ padding: '8px 24px', fontSize: '14px' }}>
                  {currQIdx < 9 ? 'Next Question ➔' : 'Complete World ➔'}
                </button>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
