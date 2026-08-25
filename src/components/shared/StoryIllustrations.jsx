import React from 'react';

// Custom flat-vector SVG illustrations for the Story phase, built from the app's own
// design-token palette so they sit natively full-bleed inside .story-img-bleed —
// no external images or raster assets required.

const Sky = ({ children }) => (
  <svg viewBox="0 0 600 300" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2e205e" />
        <stop offset="100%" stopColor="#130a2a" />
      </linearGradient>
    </defs>
    <rect width="600" height="300" fill="url(#skyGrad)" />
    {children}
  </svg>
);

// Slide 1: Vertex the Robot in a "Corner Workshop" surrounded by everyday cornered objects
export const Slide1Illustration = () => (
  <Sky>
    <circle cx="90" cy="60" r="3" fill="#ffbe1a" opacity="0.8" />
    <circle cx="520" cy="40" r="2.5" fill="#ffffff" opacity="0.6" />
    <circle cx="470" cy="90" r="2" fill="#ffffff" opacity="0.5" />

    {/* Workbench */}
    <rect x="40" y="220" width="520" height="14" rx="4" fill="#1b103c" />
    <rect x="60" y="234" width="14" height="40" fill="#0e0724" />
    <rect x="520" y="234" width="14" height="40" fill="#0e0724" />

    {/* Book on bench, open at a right angle */}
    <g transform="translate(110,150)">
      <path d="M0 70 L0 20 Q35 0 70 20 L70 70 Z" fill="#4a90d9" />
      <path d="M70 70 L70 20 Q105 0 140 20 L140 70 Z" fill="#7fa8f5" />
      <line x1="70" y1="20" x2="70" y2="70" stroke="#ffbe1a" strokeWidth="3" />
    </g>

    {/* Pizza slice (acute angle) */}
    <g transform="translate(300,175)">
      <path d="M0 0 L60 -18 L60 18 Z" fill="#ff8a50" stroke="#ffe0a3" strokeWidth="2" />
      <circle cx="45" cy="-6" r="3" fill="#ef4444" />
      <circle cx="40" cy="6" r="3" fill="#ef4444" />
    </g>

    {/* Open door (obtuse angle) */}
    <g transform="translate(420,150)">
      <rect x="-4" y="0" width="8" height="80" fill="#e6a200" />
      <rect x="0" y="0" width="55" height="80" fill="#ffbe1a" opacity="0.85" transform="rotate(-35)" />
    </g>

    {/* Vertex the robot */}
    <g transform="translate(230,150)">
      <rect x="-24" y="6" width="48" height="46" rx="10" fill="#2d1c69" stroke="#4d3b84" strokeWidth="2" />
      <rect x="-19" y="11" width="38" height="36" rx="6" fill="#1b103c" />
      <circle cx="-8" cy="26" r="4" fill="#00f3ff" />
      <circle cx="10" cy="26" r="4" fill="#00f3ff" />
      <path d="M-6 38 Q0 43 6 38" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="-3" y="-14" width="6" height="14" fill="#4d3b84" rx="2" />
      <circle cx="0" cy="-16" r="4" fill="#ffbe1a" />
    </g>
  </Sky>
);

// Slide 2: Right-angle demo — set-square / paper-corner tester on a window frame
export const Slide2Illustration = () => (
  <Sky>
    {/* Window frame forming perfect right angles */}
    <g transform="translate(150,40)">
      <rect x="0" y="0" width="220" height="180" fill="none" stroke="#ffffff" strokeWidth="6" />
      <line x1="110" y1="0" x2="110" y2="180" stroke="#ffffff" strokeWidth="4" />
      <line x1="0" y1="90" x2="220" y2="90" stroke="#ffffff" strokeWidth="4" />
      {/* right angle mark top-left pane */}
      <path d="M14 14 L28 14 L28 28" fill="none" stroke="#34d399" strokeWidth="3" />
    </g>

    {/* Set-square / corner tester being held up */}
    <g transform="translate(400,120)">
      <path d="M0 0 L90 0 L0 90 Z" fill="#34d399" opacity="0.85" stroke="#ffffff" strokeWidth="2" />
      <path d="M10 0 L10 10 L0 10" fill="none" stroke="#0e0724" strokeWidth="3" />
    </g>

    {/* Vertex the robot pointing */}
    <g transform="translate(80,190)">
      <rect x="-22" y="0" width="44" height="42" rx="9" fill="#2d1c69" stroke="#4d3b84" strokeWidth="2" />
      <rect x="-17" y="5" width="34" height="32" rx="5" fill="#1b103c" />
      <circle cx="-7" cy="18" r="3.5" fill="#00f3ff" />
      <circle cx="9" cy="18" r="3.5" fill="#00f3ff" />
      <path d="M-5 29 Q1 34 7 29" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="22" y1="20" x2="46" y2="8" stroke="#2d1c69" strokeWidth="6" strokeLinecap="round" />
    </g>

    <text x="300" y="270" textAnchor="middle" fill="#bca8f2" fontSize="16" fontFamily="Nunito, sans-serif" fontWeight="800">
      90° — a perfect square corner!
    </text>
  </Sky>
);

// Slide 3: Smaller than a right angle — clock hands at 10:10 and a slice of pizza
export const Slide3Illustration = () => (
  <Sky>
    {/* Big clock */}
    <g transform="translate(160,150)">
      <circle r="85" fill="#0e0724" stroke="#ffffff" strokeWidth="4" />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        const x1 = Math.sin(a) * 74, y1 = -Math.cos(a) * 74;
        const x2 = Math.sin(a) * 64, y2 = -Math.cos(a) * 64;
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#bca8f2" strokeWidth={i % 3 === 0 ? 3 : 1.5} />;
      })}
      {/* hour hand to 10 */}
      <line x1="0" y1="0" x2="-28" y2="-40" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
      {/* minute hand to 2 (10 min) */}
      <line x1="0" y1="0" x2="35" y2="-58" stroke="#ffbe1a" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M -20 -28 A 34 34 0 0 1 26 -42" fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
      <circle r="5" fill="#ef4444" />
    </g>

    {/* Pizza slice */}
    <g transform="translate(420,190) rotate(-15)">
      <path d="M0 0 L90 -22 L90 22 Z" fill="#ff8a50" stroke="#ffe0a3" strokeWidth="3" />
      <circle cx="65" cy="-10" r="4" fill="#ef4444" />
      <circle cx="60" cy="8" r="4" fill="#22c55e" />
      <circle cx="78" cy="0" r="4" fill="#ef4444" />
      <path d="M14 -3 A 15 15 0 0 1 14 3" fill="none" stroke="#a78bfa" strokeWidth="3" />
    </g>

    <text x="300" y="270" textAnchor="middle" fill="#bca8f2" fontSize="16" fontFamily="Nunito, sans-serif" fontWeight="800">
      Narrower than a square corner — smaller than 90°!
    </text>
  </Sky>
);

// Slide 4: Bigger than a right angle — wide-open door and a reclined chair
export const Slide4Illustration = () => (
  <Sky>
    {/* Wide open door on hinge */}
    <g transform="translate(140,60)">
      <rect x="-6" y="0" width="12" height="170" fill="#e6a200" />
      <g transform="rotate(-50)">
        <rect x="0" y="-6" width="150" height="12" fill="#ffbe1a" />
        <circle cx="140" cy="0" r="4" fill="#0e0724" />
      </g>
      <path d="M30 0 A 30 30 0 0 0 19 -23" fill="none" stroke="#ff8a50" strokeWidth="3" strokeLinecap="round" />
    </g>

    {/* Reclined lounge chair */}
    <g transform="translate(400,190)">
      <rect x="-40" y="-8" width="80" height="10" rx="4" fill="#a78bfa" />
      <rect x="-40" y="-70" width="14" height="66" rx="4" fill="#a78bfa" transform="rotate(-25 -40 -8)" />
      <line x1="-40" y1="0" x2="40" y2="0" stroke="#4d3b84" strokeWidth="6" />
      <line x1="-40" y1="0" x2="-40" y2="30" stroke="#4d3b84" strokeWidth="6" />
      <line x1="40" y1="0" x2="40" y2="30" stroke="#4d3b84" strokeWidth="6" />
    </g>

    {/* Vertex the robot, arms wide (obtuse pose) */}
    <g transform="translate(270,160)">
      <rect x="-22" y="0" width="44" height="42" rx="9" fill="#2d1c69" stroke="#4d3b84" strokeWidth="2" />
      <rect x="-17" y="5" width="34" height="32" rx="5" fill="#1b103c" />
      <path d="M-13 16 L-5 16 M-11 12 L-11 20" stroke="#00f3ff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M5 16 L13 16 M7 12 L7 20" stroke="#00f3ff" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M-7 28 Q1 35 9 28" fill="#ffbe1a" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    <text x="300" y="270" textAnchor="middle" fill="#bca8f2" fontSize="16" fontFamily="Nunito, sans-serif" fontWeight="800">
      Wider than a square corner — bigger than 90°!
    </text>
  </Sky>
);
