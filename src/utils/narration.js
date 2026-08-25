// Canonical registry of every narrated string used across the Angles module.
// Components call the shared `speak(text)` function directly with these exact
// strings (see App.jsx), so this file is the single source of truth that
// scripts/generate_audio.js reads from to pre-generate matching static MP3s.
// Content Policy: Paragraphs & Questions ONLY — no titles or labels included here.

export function introNarration() {
  return [];
}

export function wonderNarration() {
  return [
    "A book corner looks like a perfect square. A slice of pizza looks much narrower and pointy. Are these two corners the same size, or different?",
    "They're different! The book corner is a Right Angle. The pizza slice is smaller than a Right Angle. Let's explore more in the story!"
  ];
}

export function getStoryNarration() {
  return [
    "Vertex the Robot is checking corners all around the workshop. Every corner is a different size of angle! Let's find out what makes each one special.",
    "The window frame makes a Right Angle. It fits a square-corner tester exactly, with no gap and no overflow. That's what makes it a Right Angle — always 90°.",
    "At 10:10, the clock's hands make a narrow, pointy angle — and so does a slice of pizza! When you place a square-corner tester on them, there's a gap left over. That means the angle is smaller than a Right Angle.",
    "A door swung wide open makes a big, wide angle — so does a reclined chair! When you place a square-corner tester on them, the angle spills outside the tester. That means it's bigger than a Right Angle."
  ];
}

export function simulateStationNarration() {
  return [
    "Welcome to the Angle Spinner! Drag the arm to change the angle, and toggle highlights to explore vertex, arms, and the interior.",
    "In the Right-Angle Checker, tap each corner and decide: is it a Right Angle, smaller, or bigger?",
    "Let's match! Match the angle clues on the left with their correct names on the right.",
    "Welcome to the Clock Hands Sandbox! Guess the angle type for each clock time, then click watch it to check."
  ];
}

export function praisePhrases() {
  return ["Excellent!", "Well done!", "Brilliant!", "You got it!", "Super smart!"];
}

export function playPhaseNarration() {
  return [
    "Oh no! You have run out of hearts. Let's retry this world."
  ];
}

export function reflectQuestionNarration() {
  return [
    "Tell me one way to spot a Right Angle in real life!",
    "What's an object at home that makes a bigger angle than a Right Angle?",
    "Can you name an object that is smaller than a Right Angle?",
    "How would you make your own square-corner tester?",
    "What time on a clock makes a perfect Right Angle?"
  ];
}
