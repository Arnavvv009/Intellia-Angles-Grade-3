import React, { useState, useEffect } from 'react';
import Mascot from '../shared/Mascot';

const slidesData = [
  {
    title: "Vertex's Corner Workshop",
    body: "Vertex the Robot is checking corners all around the workshop. Every corner is a different size of angle! Let's find out what makes each one special.",
    fact: "3 Angle Types to Discover!",
    nudge: "Let's line up a paper corner against each one!",
    image: "/assets/ChatGPT Image Jul 3, 2026, 10_07_00 AM.png"
  },
  {
    title: "The Perfect Square Corner",
    body: "The window frame makes a Right Angle. It fits a square-corner tester exactly, with no gap and no overflow. That's what makes it a Right Angle — always 90°.",
    fact: "Right Angle: fits a square-corner tester exactly",
    nudge: "Any corner that matches a square exactly is a Right Angle!",
    image: "/assets/ChatGPT Image Jul 3, 2026, 11_45_54 AM.png"
  },
  {
    title: "Smaller Than a Right Angle",
    body: "At 10:10, the clock's hands make a narrow, pointy angle — and so does a slice of pizza! When you place a square-corner tester on them, there's a gap left over. That means the angle is smaller than a Right Angle.",
    fact: "Smaller than a Right Angle: leaves a gap in the tester",
    nudge: "Narrow and pointy? It's smaller than a Right Angle!",
    image: "/assets/ChatGPT Image Jul 3, 2026, 11_45_59 AM.png"
  },
  {
    title: "Bigger Than a Right Angle",
    body: "A door swung wide open makes a big, wide angle — so does a reclined chair! When you place a square-corner tester on them, the angle spills outside the tester. That means it's bigger than a Right Angle.",
    fact: "Bigger than a Right Angle: spills outside the tester",
    nudge: "Now you know all three angle types — let's go practice!",
    image: "/assets/ChatGPT Image Jul 3, 2026, 11_46_06 AM.png"
  }
];

export default function StoryPhase({ onNext, speak }) {
  const [slideIdx, setSlideIdx] = useState(0);
  const currentSlide = slidesData[slideIdx];

  // Narrate the body text of current slide when slideIdx changes
  useEffect(() => {
    speak(currentSlide.body);
  }, [slideIdx, speak]);

  const handleNext = () => {
    if (slideIdx < slidesData.length - 1) {
      setSlideIdx(prev => prev + 1);
    } else {
      onNext(); // Advance phase
    }
  };

  const handlePrev = () => {
    if (slideIdx > 0) {
      setSlideIdx(prev => prev - 1);
    }
  };

  const pct = Math.round(((slideIdx + 1) / slidesData.length) * 100);

  return (
    <div style={{ width: '100%' }}>
      {/* Progress tracking row (underneath top phase tracker) */}
      <div className="story-header">
        <span>Slide {slideIdx + 1} of 4</span>
        <div className="story-dots">
          {slidesData.map((_, idx) => (
            <div
              key={idx}
              className={`story-dot ${idx === slideIdx ? 'story-dot--active' : ''}`}
            />
          ))}
        </div>
        <span>{pct}%</span>
      </div>

      {/* Thin Gold Progress Bar */}
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* Main Card wrapper */}
      <div className="main-card" style={{ paddingBottom: '32px' }}>
        {/* Full-width Bleed Illustration */}
        <div className="story-img-bleed" style={{ height: 'auto', aspectRatio: '2.5 / 1' }}>
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          />
        </div>

        {/* Content Panel */}
        <div className="story-content-section">
          <h2 className="story-title">{currentSlide.title}</h2>

          <p className="story-body">{currentSlide.body}</p>

          <div className="hint-fact-pill" style={{ alignSelf: 'flex-start' }}>
            ✨ {currentSlide.fact} ✨
          </div>

          {/* Mascot speech box at the bottom */}
          <Mascot mood="idle" bubble={currentSlide.nudge} />
        </div>
      </div>

      {/* Floating/Bottom Align Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <button
          className="btn-nav-outline"
          onClick={handlePrev}
          disabled={slideIdx === 0}
          style={{ opacity: slideIdx === 0 ? 0.5 : 1 }}
        >
          ← Previous
        </button>
        <button className="btn-nav-outline" onClick={handleNext}>
          {slideIdx < slidesData.length - 1 ? "Next ➔" : "Go to Practice ➔"}
        </button>
      </div>
    </div>
  );
}
