import React, { useState, useEffect } from 'react';
import Mascot from '../shared/Mascot';
import AngleViewer from '../shared/AngleViewer';

export default function WonderPhase({ onNext, playSound, speak }) {
  const [revealed, setRevealed] = useState(false);
  const [degrees, setDegrees] = useState(60);

  // Narrate the question on load
  useEffect(() => {
    speak("A book corner looks like a perfect square. A slice of pizza looks much narrower and pointy. Are these two corners the same size, or different?");
  }, [speak]);

  // Gentle wobble animation after reveal to show the two corners are genuinely different sizes
  useEffect(() => {
    if (!revealed) return;
    const interval = setInterval(() => {
      setDegrees(prev => (prev >= 90 ? 45 : prev + 5));
    }, 220);
    return () => clearInterval(interval);
  }, [revealed]);

  const handleReveal = () => {
    if (revealed) {
      onNext(); // Advance if already revealed
      return;
    }

    setRevealed(true);
    playSound('shapeReveal');
    speak("They're different! The book corner is a Right Angle. The pizza slice is smaller than a Right Angle. Let's explore more in the story!");
  };

  return (
    <div className="main-card">
      {/* Mascot Speech */}
      <Mascot
        mood={revealed ? "happy" : "thinking"}
        bubble={revealed ? "Aha! A Right Angle is a perfect square corner — 90°! 📐" : "Hmm... I wonder..."}
      />

      {/* Silhouette / Revealed Angle Viewport */}
      <div className="wonder-badge-circle">
        <div className={`wonder-silhouette ${revealed ? 'wonder-revealed' : ''}`}>
          <AngleViewer
            degrees={revealed ? degrees : 90}
            size={80}
            color={revealed ? '#a78bfa' : '#34D399'}
            highlight={revealed ? 'interior' : null}
            showTester={revealed}
          />
        </div>
      </div>

      {/* Question Text Panel */}
      <h2 className="wonder-heading">
        A book corner looks like a perfect square. A slice of pizza looks much narrower and pointy. Are these two corners the same size, or different?
      </h2>

      <p className="wonder-subtitle">
        What if we used the corner of a piece of paper to test each one?
      </p>

      {/* Fact/Hint Pill */}
      <div className="hint-fact-pill">
        ✨ We could line up a paper corner against each shape to check! ✨
      </div>

      {/* Confetti Particle simulation on reveal */}
      {revealed && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
          {Array.from({ length: 24 }).map((_, i) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 0.5;
            const size = Math.random() * 6 + 6;
            const color = ['#ffbe1a', '#22c55e', '#a78bfa', '#ff8a50'][i % 4];
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${left}%`,
                  top: '60%',
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  borderRadius: i % 2 === 0 ? '50%' : '0',
                  opacity: 0.8,
                  transform: 'translateY(0)',
                  animation: `floatUp 1.2s ease-out forwards`,
                  animationDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>
      )}

      {/* Action Button */}
      <button
        className="btn-gold"
        onClick={handleReveal}
        style={{ marginTop: 'auto', alignSelf: 'center' }}
      >
        {revealed ? "Let's Read the Story! ➔" : "I have a guess! 🔍 Let's Find Out!"}
      </button>
    </div>
  );
}
