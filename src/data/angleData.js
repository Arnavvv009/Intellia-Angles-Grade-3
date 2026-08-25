// Core reference data for the three angle classifications taught in this module.
// Grade 2/3 MOE syllabus scope: Right Angle, and comparing other angles as
// "greater than" or "less than" a right angle (no protractor/degree-measuring required,
// but degree values are included here to drive the interactive simulations precisely).

export const ANGLE_TYPES = {
  right: {
    id: 'right',
    name: 'Right Angle',
    shortLabel: 'Right Angle',
    emoji: '📐',
    color: '#34D399',
    degrees: 90,
    testerFit: 'exact',
    description: 'Exactly the size of a square corner — like the corner of this page.',
    realWorldExamples: ['corner of a book', 'window frame', 'clock at 3 o\'clock', 'edge of a table'],
    singaporeExamples: ['corner of an HDB window grille', 'edge of a school exercise book', 'MRT platform floor tile corner'],
    funFact: 'You can check for a right angle by using the corner of any piece of paper as a tester!',
    propertyDescription: 'a square corner — two straight arms meeting at exactly 90°',
  },
  acute: {
    id: 'acute',
    name: 'Smaller than a Right Angle',
    shortLabel: 'Less than a Right Angle',
    emoji: '🔻',
    color: '#A78BFA',
    degrees: 45,
    testerFit: 'gap',
    description: 'A narrower, sharper angle that fits INSIDE a square-corner tester, leaving a gap.',
    realWorldExamples: ['slice of pizza', 'hands of a clock at 10:10', 'half-open scissors', 'a slice of pie'],
    singaporeExamples: ['a slice of roti prata cut in quarters', 'the hands of the clock at Clarke Quay', 'a half-opened fan'],
    funFact: 'A very thin, pointy angle — like the tip of a slice of pizza — is smaller than a right angle!',
    propertyDescription: 'two arms that meet more sharply than a square corner — narrower than 90°',
  },
  obtuse: {
    id: 'obtuse',
    name: 'Bigger than a Right Angle',
    shortLabel: 'Greater than a Right Angle',
    emoji: '🔺',
    color: '#FF8A50',
    degrees: 135,
    testerFit: 'overflow',
    description: 'A wider angle that spills OUTSIDE a square-corner tester when you place it in the corner.',
    realWorldExamples: ['a door opened wide', 'a laptop screen tilted back', 'a reclined chair', 'hands of a clock at 8:20'],
    singaporeExamples: ['a hawker stall umbrella tilted open', 'a laptop screen in the library', 'a swing chair pushed back'],
    funFact: 'When a door swings wide open, the angle it makes with the wall is bigger than a right angle!',
    propertyDescription: 'two arms that meet more widely than a square corner — wider than 90°',
  },
};

// Helper: classify any angle in degrees against the three MOE-syllabus categories
export function classifyAngle(deg) {
  const normalized = ((deg % 360) + 360) % 360;
  const measure = normalized > 180 ? 360 - normalized : normalized;
  if (Math.abs(measure - 90) < 2) return 'right';
  if (measure < 90) return 'acute';
  return 'obtuse';
}

export function classificationLabel(key) {
  return ANGLE_TYPES[key]?.shortLabel || '';
}

// Comparison table data, used in the "Face & Corner"-style tally / property station
export const ANGLE_COMPARISON = [
  { type: 'Smaller than a Right Angle', degrees: '< 90°', example: 'Pizza slice', color: '#A78BFA' },
  { type: 'Right Angle', degrees: '= 90°', example: 'Book corner', color: '#34D399' },
  { type: 'Bigger than a Right Angle', degrees: '> 90°', example: 'Open door', color: '#FF8A50' },
];

// Real-world corner objects used in Station B (Right-Angle Checker) and Station D (Clock Hands)
export const CORNER_OBJECTS = [
  { id: 'book', label: 'Book Corner', emoji: '📖', angleType: 'right' },
  { id: 'pizza', label: 'Pizza Slice', emoji: '🍕', angleType: 'acute' },
  { id: 'door', label: 'Open Door', emoji: '🚪', angleType: 'obtuse' },
  { id: 'setsquare', label: 'Set-Square Tip', emoji: '📐', angleType: 'right' },
  { id: 'scissors', label: 'Half-Open Scissors', emoji: '✂️', angleType: 'acute' },
  { id: 'laptop', label: 'Tilted Laptop Screen', emoji: '💻', angleType: 'obtuse' },
  { id: 'sandwich', label: 'Sandwich Corner', emoji: '🥪', angleType: 'right' },
  { id: 'umbrella', label: 'Open Umbrella Rib', emoji: '☂️', angleType: 'obtuse' },
];

// Clock times used in Station D (Clock Hands Sandbox), with the angle their hands form
export const CLOCK_TIMES = [
  { id: 'c1', label: '3:00', hourDeg: 90, minuteDeg: 0, angleType: 'right' },
  { id: 'c2', label: '9:00', hourDeg: 270, minuteDeg: 0, angleType: 'right' },
  { id: 'c3', label: '12:10', hourDeg: 5, minuteDeg: 60, angleType: 'acute' },
  { id: 'c4', label: '10:10', hourDeg: 305, minuteDeg: 60, angleType: 'acute' },
  { id: 'c5', label: '8:20', hourDeg: 250, minuteDeg: 120, angleType: 'obtuse' },
  { id: 'c6', label: '7:35', hourDeg: 227.5, minuteDeg: 210, angleType: 'obtuse' },
];
