import React from 'react';
import { ANGLE_TYPES } from '../../data/angleData';

// Simple analog clock face that draws hour/minute hands at fixed angles (in degrees,
// measured clockwise from 12 o'clock) and optionally highlights the angle between them.
export default function ClockFace({ hourDeg = 90, minuteDeg = 0, size = 140, showAngleArc = false, angleType = null }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.42;

  const toXY = (deg, length) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + length * Math.cos(rad), y: cy + length * Math.sin(rad) };
  };

  const hourTip = toXY(hourDeg, r * 0.5);
  const minTip = toXY(minuteDeg, r * 0.78);

  const color = angleType ? ANGLE_TYPES[angleType].color : '#ffbe1a';

  // Arc between the two hands for the highlighted sweep
  const diff = ((minuteDeg - hourDeg + 360) % 360);
  const largeArc = diff > 180 ? 1 : 0;
  const arcR = r * 0.28;
  const a1 = toXY(hourDeg, arcR);
  const a2 = toXY(minuteDeg, arcR);

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <circle cx={cx} cy={cy} r={r} fill="#0e0724" stroke="#ffffff" strokeWidth="3" opacity="0.9" />
      {Array.from({ length: 12 }).map((_, i) => {
        const tickOuter = toXY(i * 30, r * 0.92);
        const tickInner = toXY(i * 30, r * 0.8);
        return (
          <line key={i} x1={tickInner.x} y1={tickInner.y} x2={tickOuter.x} y2={tickOuter.y}
            stroke="#bca8f2" strokeWidth={i % 3 === 0 ? 2.5 : 1.5} />
        );
      })}
      {showAngleArc && (
        <path
          d={`M ${a1.x} ${a1.y} A ${arcR} ${arcR} 0 ${largeArc} 1 ${a2.x} ${a2.y}`}
          fill="none" stroke={color} strokeWidth="3" strokeLinecap="round"
        />
      )}
      <line x1={cx} y1={cy} x2={hourTip.x} y2={hourTip.y} stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={minTip.x} y2={minTip.y} stroke="#ffbe1a" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="4" fill="#ef4444" />
    </svg>
  );
}
