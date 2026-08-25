import React from 'react';

// Renders a single angle as two arms meeting at a vertex, with an arc showing
// the angle "opening", an optional square-corner tester overlay, and highlight modes
// for vertex / arms / interior — mirroring the highlight-toggle pattern used for 3D shapes.
export default function AngleViewer({
  degrees = 90,
  size = 200,
  highlight = null, // 'vertex' | 'arms' | 'interior' | 'tester'
  color = '#34D399',
  showTester = false,
  showDegreeLabel = false,
  armLength = null,
}) {
  const cx = size / 2;
  const cy = size * 0.72;
  const r = armLength || size * 0.42;

  // Fixed arm sits horizontal; moving arm rotates by `degrees` counter-clockwise (screen coords: up is negative Y)
  const fixedEnd = { x: cx + r, y: cy };
  const rad = (degrees * Math.PI) / 180;
  const movingEnd = { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) };

  // Arc path for the angle sweep
  const arcR = r * 0.32;
  const arcStart = { x: cx + arcR, y: cy };
  const arcEnd = { x: cx + arcR * Math.cos(rad), y: cy - arcR * Math.sin(rad) };
  const largeArc = degrees > 180 ? 1 : 0;
  const arcPath = `M ${arcStart.x} ${arcStart.y} A ${arcR} ${arcR} 0 ${largeArc} 0 ${arcEnd.x} ${arcEnd.y}`;

  // Square-corner tester overlay (a small right-angle square anchored at the vertex, along the fixed arm)
  const testerSize = r * 0.34;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', margin: '0 auto', overflow: 'visible' }}
    >
      {/* Interior wedge fill (subtle) */}
      <path
        d={`M ${cx} ${cy} L ${fixedEnd.x} ${fixedEnd.y} A ${r} ${r} 0 ${largeArc} 0 ${movingEnd.x} ${movingEnd.y} Z`}
        fill={color}
        opacity={highlight === 'interior' ? 0.28 : 0.12}
        stroke="none"
      />

      {/* Square-corner tester (dashed) */}
      {showTester && (
        <g opacity={highlight === 'tester' ? 1 : 0.55}>
          <path
            d={`M ${cx + testerSize} ${cy} L ${cx + testerSize} ${cy - testerSize} L ${cx} ${cy - testerSize}`}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
        </g>
      )}

      {/* Fixed arm */}
      <line
        x1={cx} y1={cy} x2={fixedEnd.x} y2={fixedEnd.y}
        stroke={highlight === 'arms' ? color : '#ffffff'}
        strokeWidth={highlight === 'arms' ? 6 : 4.5}
        strokeLinecap="round"
      />

      {/* Moving arm */}
      <line
        x1={cx} y1={cy} x2={movingEnd.x} y2={movingEnd.y}
        stroke={highlight === 'arms' ? color : '#ffffff'}
        strokeWidth={highlight === 'arms' ? 6 : 4.5}
        strokeLinecap="round"
      />

      {/* Angle arc */}
      <path d={arcPath} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />

      {/* Vertex dot */}
      <circle
        cx={cx} cy={cy}
        r={highlight === 'vertex' ? 9 : 6}
        fill={highlight === 'vertex' ? color : '#ffbe1a'}
        stroke="#130a2a"
        strokeWidth="2"
      />

      {/* Degree label */}
      {showDegreeLabel && (
        <text
          x={cx + arcR * 1.9}
          y={cy - arcR * 0.9}
          fill={color}
          fontSize={size * 0.09}
          fontWeight="800"
          fontFamily="Nunito, sans-serif"
          textAnchor="middle"
        >
          {Math.round(degrees)}°
        </text>
      )}
    </svg>
  );
}
