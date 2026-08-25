export const questionBank = [
  // ================= WORLD 0: RIGHT ANGLE RECOGNITION (Easy) =================
  {
    id: "AW0Q1", type: "angle_type", world: 0, difficulty: 1, targetDegrees: 90,
    questionText: "What type of angle is shown here?",
    visual: "angle_view",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Not an angle"],
    correctAnswer: "Right Angle",
    hint1: "Look carefully — does it form a perfect square corner?",
    hint2: "A Right Angle always measures exactly 90°.",
    explanation: "This is a RIGHT ANGLE. It forms a perfect square corner and always measures exactly 90°."
  },
  {
    id: "AW0Q2", type: "true_false", world: 0, difficulty: 1, targetDegrees: 90,
    questionText: "True or False: A Right Angle looks like a perfect square corner.",
    visual: "angle_view",
    options: ["True", "False", "Maybe", "Both"],
    correctAnswer: "True",
    hint1: "Think about the corner of a piece of paper.",
    hint2: "Every square corner you see, like a book or window, is a Right Angle.",
    explanation: "TRUE. A Right Angle always looks like a perfect square corner, measuring 90°."
  },
  {
    id: "AW0Q3", type: "real_world_match", world: 0, difficulty: 1,
    questionText: "Mei Ling looks at the corner of her exercise book. What type of angle is it?",
    visual: "real_object", objectName: "book",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "Exercise books are printed with perfectly square corners.",
    hint2: "Try lining up the corner of another paper against it — it should fit exactly.",
    explanation: "A book's corner is a RIGHT ANGLE — exactly 90°, a perfect square corner."
  },
  {
    id: "AW0Q4", type: "degree_fact", world: 0, difficulty: 1,
    questionText: "A Right Angle always measures exactly how many degrees?",
    visual: "angle_view", targetDegrees: 90,
    options: [45, 90, 180, 60],
    correctAnswer: 90,
    hint1: "It's the same number every single time — no more, no less.",
    hint2: "Think of the four equal corners of a square. Each one is 90°.",
    explanation: "A Right Angle always measures exactly 90°, no matter how big or small the shape is."
  },
  {
    id: "AW0Q5", type: "real_world_match", world: 0, difficulty: 1,
    questionText: "Ahmad checks the corner of the classroom whiteboard. What type of angle is it?",
    visual: "real_object", objectName: "window",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "Whiteboards, like windows, are rectangular with square corners.",
    hint2: "All four corners of a rectangle are Right Angles.",
    explanation: "The whiteboard's corner is a RIGHT ANGLE, just like every corner of a rectangle."
  },
  {
    id: "AW0Q6", type: "angle_type", world: 0, difficulty: 1, targetDegrees: 90,
    questionText: "If you place a square-corner paper tester on this angle, it fits with no gap and no overflow. What angle is it?",
    visual: "angle_tester", targetDegrees: 90,
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Curved angle"],
    correctAnswer: "Right Angle",
    hint1: "No gap, no overflow means it matches perfectly.",
    hint2: "A perfect match with a square-corner tester always means 90°.",
    explanation: "When a tester fits exactly with no gap or overflow, the angle is a RIGHT ANGLE."
  },
  {
    id: "AW0Q7", type: "real_world_match", world: 0, difficulty: 1,
    questionText: "Priya folds a piece of paper exactly in half, then in half again. What angle do the folds make at the corner?",
    visual: "real_object", objectName: "paper",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "Folding a rectangular paper in half twice always makes square corners.",
    hint2: "This is actually how you can make your own square-corner tester!",
    explanation: "Folding paper in half twice creates a RIGHT ANGLE — this is how a paper tester is made!"
  },
  {
    id: "AW0Q8", type: "true_false", world: 0, difficulty: 1,
    questionText: "True or False: All four corners of a square are Right Angles.",
    visual: "angle_view", targetDegrees: 90,
    options: ["True", "False", "Only two of them", "Cannot tell"],
    correctAnswer: "True",
    hint1: "A square is a very special rectangle with equal sides.",
    hint2: "Every corner of a square measures exactly 90°.",
    explanation: "TRUE. All four corners of a square are Right Angles, each measuring exactly 90°."
  },
  {
    id: "AW0Q9", type: "real_world_match", world: 0, difficulty: 1,
    questionText: "Jun Wei looks at the corner of a table. What type of angle is it?",
    visual: "real_object", objectName: "table",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "Most tables are rectangular with square corners.",
    hint2: "Test it with the corner of your book!",
    explanation: "A standard table corner is a RIGHT ANGLE — exactly 90°."
  },
  {
    id: "AW0Q10", type: "angle_type", world: 0, difficulty: 1, targetDegrees: 90,
    questionText: "How can you check if an angle is a Right Angle without a protractor?",
    visual: "angle_tester", targetDegrees: 90,
    options: [
      "Use a square-corner tester like a paper corner",
      "Guess by looking at the color",
      "Measure how long the arms are",
      "Count how many arms it has"
    ],
    correctAnswer: "Use a square-corner tester like a paper corner",
    hint1: "You don't need special tools — a folded paper corner works perfectly!",
    hint2: "Line the paper's square corner up against the angle you want to check.",
    explanation: "You can check for a Right Angle by lining up a square-corner tester — like a folded paper corner — against it."
  },

  // ================= WORLD 1: BIGGER OR SMALLER? (Easy-Med) =================
  {
    id: "AW1Q1", type: "compare", world: 1, difficulty: 1, targetDegrees: 40,
    questionText: "Is this angle bigger or smaller than a Right Angle?",
    visual: "angle_view", targetDegrees: 40,
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Exactly a Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "Compare it to a square corner — does it look narrower or wider?",
    hint2: "A narrow, pointy angle is smaller than 90°.",
    explanation: "This angle is SMALLER THAN A RIGHT ANGLE — it is narrower than a square corner."
  },
  {
    id: "AW1Q2", type: "compare", world: 1, difficulty: 1, targetDegrees: 140,
    questionText: "Is this angle bigger or smaller than a Right Angle?",
    visual: "angle_view", targetDegrees: 140,
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Exactly a Right Angle", "Cannot tell"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "Compare it to a square corner — does it look narrower or wider?",
    hint2: "A wide, open angle is bigger than 90°.",
    explanation: "This angle is BIGGER THAN A RIGHT ANGLE — it is wider than a square corner."
  },
  {
    id: "AW1Q3", type: "compare_objects", world: 1, difficulty: 2,
    questionText: "Which is smaller: a slice of pizza or the corner of a book?",
    visual: "real_object", objectName: "pizza",
    options: ["Slice of pizza", "Corner of a book", "They are equal", "Cannot tell"],
    correctAnswer: "Slice of pizza",
    hint1: "A pizza slice tip is usually thin and pointy.",
    hint2: "A book corner is exactly 90°, while a pizza slice is usually much narrower.",
    explanation: "A slice of pizza is usually SMALLER (narrower) than a book's Right Angle corner."
  },
  {
    id: "AW1Q4", type: "compare_objects", world: 1, difficulty: 2,
    questionText: "Which is bigger: a wide-open door or the corner of a window?",
    visual: "real_object", objectName: "door",
    options: ["Wide-open door", "Corner of a window", "They are equal", "Cannot tell"],
    correctAnswer: "Wide-open door",
    hint1: "Think about how far a door swings open compared to a square window frame.",
    hint2: "A window's corner is a Right Angle (90°); a wide-open door is much wider.",
    explanation: "A wide-open door makes a BIGGER angle than a window's Right Angle corner."
  },
  {
    id: "AW1Q5", type: "angle_type", world: 1, difficulty: 2, targetDegrees: 60,
    questionText: "This angle looks narrower than a square corner tester. What type of angle is it?",
    visual: "angle_tester", targetDegrees: 60,
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Curved angle"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "If it's narrower than the square tester, there will be a gap.",
    hint2: "A gap in the tester means the angle is less than 90°.",
    explanation: "When an angle is narrower than the tester and leaves a gap, it is SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW1Q6", type: "angle_type", world: 1, difficulty: 2, targetDegrees: 150,
    questionText: "This angle spills outside the square corner tester. What type of angle is it?",
    visual: "angle_tester", targetDegrees: 150,
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Curved angle"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "If the angle spills outside the tester, it's too wide to fit.",
    hint2: "Spilling outside the tester means the angle is more than 90°.",
    explanation: "When an angle spills outside a square tester, it is BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW1Q7", type: "true_false", world: 1, difficulty: 2,
    questionText: "True or False: Every narrow, pointy-looking angle is bigger than a Right Angle.",
    visual: "angle_view", targetDegrees: 30,
    options: ["False", "True", "Sometimes", "Cannot tell"],
    correctAnswer: "False",
    hint1: "Think about what 'narrow' usually means for the size of an angle.",
    hint2: "Narrow, pointy angles are usually SMALLER than a Right Angle, not bigger.",
    explanation: "FALSE. A narrow, pointy-looking angle is usually SMALLER than a Right Angle."
  },
  {
    id: "AW1Q8", type: "true_false", world: 1, difficulty: 2,
    questionText: "True or False: A wide, spread-out angle is bigger than a Right Angle.",
    visual: "angle_view", targetDegrees: 160,
    options: ["True", "False", "Sometimes", "Cannot tell"],
    correctAnswer: "True",
    hint1: "Think about how far apart the two arms are.",
    hint2: "The wider the arms spread apart, the bigger the angle.",
    explanation: "TRUE. A wide, spread-out angle is BIGGER than a Right Angle."
  },
  {
    id: "AW1Q9", type: "compare_objects", world: 1, difficulty: 2,
    questionText: "Which angle is closer to a Right Angle: a fully closed pair of scissors, or a half-open pair of scissors?",
    visual: "real_object", objectName: "scissors",
    options: ["Half-open pair", "Fully closed pair", "They are equal", "Cannot tell"],
    correctAnswer: "Half-open pair",
    hint1: "A fully closed pair of scissors has almost no angle at all — nearly 0°.",
    hint2: "A half-open pair spreads the blades out more, getting closer to 90°.",
    explanation: "A half-open pair of scissors is closer to a Right Angle than a fully closed pair, which is nearly 0°."
  },
  {
    id: "AW1Q10", type: "angle_type", world: 1, difficulty: 2, targetDegrees: 20,
    questionText: "What type of angle is this very thin, narrow angle?",
    visual: "angle_view", targetDegrees: 20,
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Not possible"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "The thinner the angle, the further it is from a square corner.",
    hint2: "Any angle narrower than 90° is smaller than a Right Angle.",
    explanation: "A very thin, narrow angle like this is SMALLER THAN A RIGHT ANGLE."
  },

  // ================= WORLD 2: CLOCK CORNER KINGDOM (Medium) =================
  {
    id: "AW2Q1", type: "clock_angle", world: 2, difficulty: 2,
    questionText: "At 3 o'clock, what type of angle do the clock hands make?",
    visual: "clock_view", hourDeg: 90, minuteDeg: 0,
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "No angle"],
    correctAnswer: "Right Angle",
    hint1: "The hour hand points straight down to the 3, the minute hand points straight up to the 12.",
    hint2: "3 o'clock and 9 o'clock both make perfect Right Angles.",
    explanation: "At 3 o'clock, the hands form a RIGHT ANGLE — exactly 90° apart."
  },
  {
    id: "AW2Q2", type: "clock_angle", world: 2, difficulty: 2,
    questionText: "At 9 o'clock, what type of angle do the clock hands make?",
    visual: "clock_view", hourDeg: 270, minuteDeg: 0,
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "No angle"],
    correctAnswer: "Right Angle",
    hint1: "The hour hand points to the 9, the minute hand points to the 12.",
    hint2: "This is the same shape of angle as 3 o'clock, just mirrored.",
    explanation: "At 9 o'clock, the hands form a RIGHT ANGLE — exactly 90° apart."
  },
  {
    id: "AW2Q3", type: "clock_angle", world: 2, difficulty: 2,
    questionText: "At 12:10, the hands are close together. What type of angle do they make?",
    visual: "clock_view", hourDeg: 5, minuteDeg: 60,
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "No angle"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "At 12:10, both hands are near the top of the clock, close to each other.",
    hint2: "Hands that are close together make a small, narrow angle.",
    explanation: "At 12:10, the hands are close together, making an angle SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW2Q4", type: "clock_angle", world: 2, difficulty: 3,
    questionText: "At 10:10, what type of angle do the clock hands make?",
    visual: "clock_view", hourDeg: 305, minuteDeg: 60,
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "No angle"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "This is the classic 'smiling clock' position used in adverts!",
    hint2: "The hour hand near the 10 and minute hand near the 2 make a narrow V-shape.",
    explanation: "At 10:10, the hands make a narrow angle that is SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW2Q5", type: "clock_angle", world: 2, difficulty: 3,
    questionText: "At 8:20, what type of angle do the clock hands make?",
    visual: "clock_view", hourDeg: 250, minuteDeg: 120,
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "No angle"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "The hour hand is between 8 and 9, the minute hand is on the 4.",
    hint2: "The gap between the hands is wider than a quarter of the clock face.",
    explanation: "At 8:20, the hands spread wide apart, making an angle BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW2Q6", type: "clock_angle", world: 2, difficulty: 3,
    questionText: "At 7:35, what type of angle do the clock hands make?",
    visual: "clock_view", hourDeg: 227.5, minuteDeg: 210,
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "No angle"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "The hour hand is near 7, and the minute hand is on the 7 too, but they're not overlapping exactly.",
    hint2: "This angle spreads wider than 90° between the hands.",
    explanation: "At 7:35, the hands make an angle BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW2Q7", type: "true_false", world: 2, difficulty: 2,
    questionText: "True or False: 6 o'clock makes a Right Angle between the hands.",
    visual: "clock_view", hourDeg: 180, minuteDeg: 0,
    options: ["False", "True", "Sometimes", "Cannot tell"],
    correctAnswer: "False",
    hint1: "At 6 o'clock, the hands point in completely opposite directions.",
    hint2: "A straight line between the hands is not a Right Angle — it's much bigger.",
    explanation: "FALSE. At 6 o'clock, the hands point opposite ways, making a straight angle bigger than a Right Angle."
  },
  {
    id: "AW2Q8", type: "clock_angle", world: 2, difficulty: 2,
    questionText: "Which two clock times make a perfect Right Angle between their hands?",
    visual: "clock_view", hourDeg: 90, minuteDeg: 0,
    options: ["3 o'clock and 9 o'clock", "12 o'clock and 6 o'clock", "1 o'clock and 2 o'clock", "5 o'clock and 7 o'clock"],
    correctAnswer: "3 o'clock and 9 o'clock",
    hint1: "Think about the clock times where the hands look like an 'L' shape.",
    hint2: "Both 3 o'clock and 9 o'clock make the hands 90° apart.",
    explanation: "3 O'CLOCK AND 9 O'CLOCK both make perfect Right Angles between the hands."
  },
  {
    id: "AW2Q9", type: "clock_angle", world: 2, difficulty: 3,
    questionText: "At 12:05, are the clock hands closer together or further apart than at 12:20?",
    visual: "clock_view", hourDeg: 2.5, minuteDeg: 30,
    options: ["Closer together", "Further apart", "Exactly the same", "Cannot tell"],
    correctAnswer: "Closer together",
    hint1: "As the minute hand moves further from 12, the gap grows.",
    hint2: "At 12:05 the minute hand has barely moved; at 12:20 it has moved much further.",
    explanation: "At 12:05, the hands are CLOSER TOGETHER than at 12:20, since the minute hand hasn't moved far yet."
  },
  {
    id: "AW2Q10", type: "true_false", world: 2, difficulty: 3,
    questionText: "True or False: The angle between clock hands can be smaller than, equal to, or bigger than a Right Angle, depending on the time.",
    visual: "clock_view", hourDeg: 90, minuteDeg: 0,
    options: ["True", "False", "Only sometimes", "Never"],
    correctAnswer: "True",
    hint1: "Think about all the different times you've explored in this sandbox.",
    hint2: "The angle changes constantly as the hands move throughout the day.",
    explanation: "TRUE. The angle between clock hands changes throughout the day and can be any type of angle."
  },

  // ================= WORLD 3: AROUND THE HOUSE (Medium) =================
  {
    id: "AW3Q1", type: "real_world_match", world: 3, difficulty: 2,
    questionText: "Wei Xuan opens a laptop screen until it tilts back comfortably. What type of angle does it make with the keyboard?",
    visual: "real_object", objectName: "laptop",
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "A comfortable laptop viewing angle is usually tilted back quite far.",
    hint2: "The screen leans back past a square corner, making it wider than 90°.",
    explanation: "A comfortably tilted laptop screen usually makes an angle BIGGER THAN A RIGHT ANGLE with the keyboard."
  },
  {
    id: "AW3Q2", type: "real_world_match", world: 3, difficulty: 2,
    questionText: "Siti cuts a sandwich diagonally into two triangles. What type of angle is at the pointed tip of each triangle?",
    visual: "real_object", objectName: "sandwich",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "A square sandwich cut corner-to-corner makes two triangles.",
    hint2: "The original square corners of the sandwich stay as Right Angles at two of the triangle's points.",
    explanation: "When a square sandwich is cut diagonally, two of its original corners remain RIGHT ANGLES."
  },
  {
    id: "AW3Q3", type: "real_world_match", world: 3, difficulty: 2,
    questionText: "An open umbrella's ribs spread out from the center pole. What type of angle do neighboring ribs usually make?",
    visual: "real_object", objectName: "umbrella",
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "An umbrella usually has 8 ribs spread evenly around a full circle.",
    hint2: "Dividing a circle into 8 equal parts gives an angle smaller than 90° between each rib.",
    explanation: "Neighboring umbrella ribs usually make an angle SMALLER THAN A RIGHT ANGLE between them."
  },
  {
    id: "AW3Q4", type: "real_world_match", world: 3, difficulty: 2,
    questionText: "Ahmad opens a book flat on the table so both pages lie down completely. What type of angle does the spine make?",
    visual: "real_object", objectName: "openbook",
    options: ["Bigger than a Right Angle", "Right Angle", "Smaller than a Right Angle", "Cannot tell"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "A book lying completely flat is opened much wider than a quarter-turn.",
    hint2: "A book opened flat is close to a straight line — much bigger than 90°.",
    explanation: "A book opened completely flat makes an angle BIGGER THAN A RIGHT ANGLE at the spine."
  },
  {
    id: "AW3Q5", type: "real_world_match", world: 3, difficulty: 2,
    questionText: "Priya folds a fan halfway open. What type of angle does it usually make?",
    visual: "real_object", objectName: "fan",
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "A half-open fan is not yet fully spread out.",
    hint2: "It usually still looks narrower than a square corner.",
    explanation: "A halfway-open fan usually makes an angle SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW3Q6", type: "real_world_match", world: 3, difficulty: 2,
    questionText: "Jun Wei leans a ladder against the wall so it forms a very steep, narrow triangle with the ground. What type of angle is at the base?",
    visual: "real_object", objectName: "ladder",
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "A steep ladder stands close to the wall, making a narrow angle at its base.",
    hint2: "The steeper the ladder, the smaller the angle with the ground.",
    explanation: "A steep ladder leaning against a wall makes an angle SMALLER THAN A RIGHT ANGLE at its base."
  },
  {
    id: "AW3Q7", type: "true_false", world: 3, difficulty: 2,
    questionText: "True or False: The corner of a standard door frame is a Right Angle.",
    visual: "real_object", objectName: "doorframe",
    options: ["True", "False", "Only sometimes", "Cannot tell"],
    correctAnswer: "True",
    hint1: "Door frames are built to fit rectangular doors.",
    hint2: "Rectangular shapes always have Right Angle corners.",
    explanation: "TRUE. A standard door frame's corner is a RIGHT ANGLE, just like any rectangle's corner."
  },
  {
    id: "AW3Q8", type: "real_world_match", world: 3, difficulty: 2,
    questionText: "Mei Ling watches a see-saw tilt all the way to one side. What type of angle does the see-saw plank make with the ground?",
    visual: "real_object", objectName: "seesaw",
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "A fully tilted see-saw is close to touching the ground on one side.",
    hint2: "The angle between the plank and the ground becomes very small.",
    explanation: "A see-saw tilted fully to one side makes an angle SMALLER THAN A RIGHT ANGLE with the ground."
  },
  {
    id: "AW3Q9", type: "real_world_match", world: 3, difficulty: 2,
    questionText: "Ahmad opens a swing chair's canopy so it leans far back. What type of angle does the canopy make with the seat?",
    visual: "real_object", objectName: "swingchair",
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "A canopy leaning far back opens up wider than a square corner.",
    hint2: "The further back it leans, the bigger the angle grows.",
    explanation: "A canopy leaning far back makes an angle BIGGER THAN A RIGHT ANGLE with the seat."
  },
  {
    id: "AW3Q10", type: "real_world_match", world: 3, difficulty: 2,
    questionText: "Siti places two rulers so they form the letter 'L'. What type of angle do they make?",
    visual: "real_object", objectName: "rulers",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "The letter 'L' has one horizontal line and one vertical line.",
    hint2: "A horizontal and vertical line always meet at a Right Angle.",
    explanation: "Two rulers forming the letter 'L' make a RIGHT ANGLE — exactly 90°."
  },

  // ================= WORLD 4: CORNER SORTING STATION (Med-Hard) =================
  {
    id: "AW4Q1", type: "sort_group", world: 4, difficulty: 3, targetDegrees: 45,
    questionText: "Which group does this angle belong to?",
    visual: "angle_view", targetDegrees: 45,
    options: ["Smaller than a Right Angle", "Right Angle", "Bigger than a Right Angle", "Not a real angle"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "Compare the width of this angle to a square corner.",
    hint2: "It's narrower than 90°, so it belongs in the 'smaller' group.",
    explanation: "This angle is SMALLER THAN A RIGHT ANGLE — it belongs in the narrow angle group."
  },
  {
    id: "AW4Q2", type: "sort_group", world: 4, difficulty: 3, targetDegrees: 100,
    questionText: "Which group does this angle belong to?",
    visual: "angle_view", targetDegrees: 100,
    options: ["Bigger than a Right Angle", "Right Angle", "Smaller than a Right Angle", "Not a real angle"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "Compare the width of this angle to a square corner.",
    hint2: "It's a bit wider than 90°, so it belongs in the 'bigger' group.",
    explanation: "This angle is BIGGER THAN A RIGHT ANGLE, even if only slightly wider than 90°."
  },
  {
    id: "AW4Q3", type: "sort_group", world: 4, difficulty: 3, targetDegrees: 90,
    questionText: "Which group does this angle belong to?",
    visual: "angle_view", targetDegrees: 90,
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Not a real angle"],
    correctAnswer: "Right Angle",
    hint1: "Does this angle look like a perfect square corner?",
    hint2: "If it's a perfect match with the tester, it's a Right Angle.",
    explanation: "This angle is exactly a RIGHT ANGLE — a perfect square corner."
  },
  {
    id: "AW4Q4", type: "count_group", world: 4, difficulty: 3,
    questionText: "A square has 4 corners. How many of them are Right Angles?",
    visual: "real_object", objectName: "square",
    options: [4, 2, 1, 0],
    correctAnswer: 4,
    hint1: "Squares are very special rectangles.",
    hint2: "All four corners of any square are always Right Angles.",
    explanation: "All 4 corners of a square are RIGHT ANGLES."
  },
  {
    id: "AW4Q5", type: "count_group", world: 4, difficulty: 3,
    questionText: "A rectangle has 4 corners. How many of them are Right Angles?",
    visual: "real_object", objectName: "rectangle",
    options: [4, 2, 1, 0],
    correctAnswer: 4,
    hint1: "Rectangles, like squares, have very special corners.",
    hint2: "Every corner of a rectangle is a Right Angle, even if the sides are different lengths.",
    explanation: "All 4 corners of a rectangle are RIGHT ANGLES."
  },
  {
    id: "AW4Q6", type: "sort_group", world: 4, difficulty: 3,
    questionText: "Sort this description: 'A gap is left when a square tester is placed on it.' Which group?",
    visual: "angle_tester", targetDegrees: 50,
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Not enough clues"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "A gap means the angle didn't fill up the whole tester.",
    hint2: "Narrower angles leave a gap when tested.",
    explanation: "A gap left by the tester means the angle is SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW4Q7", type: "sort_group", world: 4, difficulty: 3,
    questionText: "Sort this description: 'The angle spills past the edges of a square tester.' Which group?",
    visual: "angle_tester", targetDegrees: 120,
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Not enough clues"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "Spilling past the edges means the angle is too wide for the tester.",
    hint2: "Wider angles spill outside a square tester.",
    explanation: "Spilling outside the tester means the angle is BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW4Q8", type: "sort_group", world: 4, difficulty: 3,
    questionText: "A triangle has three corners: 90°, 60°, and 30°. How many corners are Right Angles?",
    visual: "real_object", objectName: "triangle",
    options: [1, 0, 2, 3],
    correctAnswer: 1,
    hint1: "Only one of the three numbers equals exactly 90.",
    hint2: "This is a special triangle called a right-angled triangle.",
    explanation: "Only the 90° corner is a RIGHT ANGLE. The other two (60° and 30°) are smaller than a Right Angle."
  },
  {
    id: "AW4Q9", type: "sort_group", world: 4, difficulty: 3,
    questionText: "A triangle has three corners: 100°, 50°, and 30°. How many corners are Right Angles?",
    visual: "real_object", objectName: "triangle2",
    options: [0, 1, 2, 3],
    correctAnswer: 0,
    hint1: "Check whether any of the three numbers equals exactly 90.",
    hint2: "None of them are 90°, so none are Right Angles.",
    explanation: "None of the corners equal 90°, so there are 0 RIGHT ANGLES in this triangle."
  },
  {
    id: "AW4Q10", type: "sort_group", world: 4, difficulty: 3,
    questionText: "Which of these is NOT one of the three angle groups we've learned?",
    visual: "angle_view", targetDegrees: 90,
    options: ["Curved Angle", "Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle"],
    correctAnswer: "Curved Angle",
    hint1: "Angles are always made from two straight arms meeting at a point.",
    hint2: "'Curved Angle' is not a real geometry term we've studied.",
    explanation: "'CURVED ANGLE' is not a real category. Angles are grouped as Right, Smaller than a Right Angle, or Bigger than a Right Angle."
  },

  // ================= WORLD 5: PAPER TESTER FACTORY (Medium) =================
  {
    id: "AW5Q1", type: "tester_result", world: 5, difficulty: 2,
    questionText: "You place your paper tester on an angle and it fits exactly with no gap. What does this tell you?",
    visual: "angle_tester", targetDegrees: 90,
    options: ["It is a Right Angle", "It is smaller than a Right Angle", "It is bigger than a Right Angle", "It is not a real angle"],
    correctAnswer: "It is a Right Angle",
    hint1: "An exact fit means the sizes match perfectly.",
    hint2: "No gap, no overflow = Right Angle.",
    explanation: "An exact fit with the tester means the angle IS A RIGHT ANGLE."
  },
  {
    id: "AW5Q2", type: "tester_result", world: 5, difficulty: 2,
    questionText: "You place your paper tester on an angle and see a gap between the tester and one arm. What does this tell you?",
    visual: "angle_tester", targetDegrees: 55,
    options: ["It is smaller than a Right Angle", "It is bigger than a Right Angle", "It is a Right Angle", "It is not a real angle"],
    correctAnswer: "It is smaller than a Right Angle",
    hint1: "A gap means the angle is narrower than the tester's square corner.",
    hint2: "Not enough space filled = smaller than 90°.",
    explanation: "A gap between the tester and the angle's arm means the angle IS SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW5Q3", type: "tester_result", world: 5, difficulty: 2,
    questionText: "You place your paper tester on an angle, and one arm sticks out past the tester's edge. What does this tell you?",
    visual: "angle_tester", targetDegrees: 130,
    options: ["It is bigger than a Right Angle", "It is smaller than a Right Angle", "It is a Right Angle", "It is not a real angle"],
    correctAnswer: "It is bigger than a Right Angle",
    hint1: "An arm sticking out means the angle is too wide for the tester.",
    hint2: "Overflow = bigger than 90°.",
    explanation: "An arm sticking out past the tester means the angle IS BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW5Q4", type: "make_tester", world: 5, difficulty: 2,
    questionText: "How do you make your own square-corner tester from a plain piece of paper?",
    visual: "real_object", objectName: "paper",
    options: [
      "Fold it in half, then in half again",
      "Roll it into a tube",
      "Cut it into a circle",
      "Crumple it into a ball"
    ],
    correctAnswer: "Fold it in half, then in half again",
    hint1: "Two folds are all you need!",
    hint2: "Folding a rectangular paper twice always creates a square corner.",
    explanation: "Folding a piece of paper in half, then in half again, creates a perfect square-corner TESTER."
  },
  {
    id: "AW5Q5", type: "tester_result", world: 5, difficulty: 3,
    questionText: "Priya tests two angles. Angle A leaves a small gap, Angle B leaves a bigger gap. Which angle is narrower?",
    visual: "angle_view", targetDegrees: 60,
    options: ["Angle B", "Angle A", "They are the same", "Cannot tell"],
    correctAnswer: "Angle B",
    hint1: "A bigger gap means the angle takes up less of the tester's space.",
    hint2: "The narrower an angle, the bigger the gap left by the tester.",
    explanation: "Angle B, with the bigger gap, is the narrower angle — further from 90°."
  },
  {
    id: "AW5Q6", type: "tester_result", world: 5, difficulty: 3,
    questionText: "Jun Wei tests two angles. Angle A overflows a little, Angle B overflows a lot. Which angle is wider?",
    visual: "angle_view", targetDegrees: 150,
    options: ["Angle B", "Angle A", "They are the same", "Cannot tell"],
    correctAnswer: "Angle B",
    hint1: "More overflow means the angle spreads much further past the tester.",
    hint2: "The wider an angle, the more it overflows the tester.",
    explanation: "Angle B, with the bigger overflow, is the wider angle — further from 90° on the bigger side."
  },
  {
    id: "AW5Q7", type: "true_false", world: 5, difficulty: 2,
    questionText: "True or False: You need an expensive protractor to check if something is a Right Angle.",
    visual: "angle_tester", targetDegrees: 90,
    options: ["False", "True", "Only for big angles", "Only for small angles"],
    correctAnswer: "False",
    hint1: "Remember what tool we made from folded paper.",
    hint2: "A simple paper tester works just as well for spotting Right Angles!",
    explanation: "FALSE. A simple folded-paper square-corner tester works perfectly to check for Right Angles."
  },
  {
    id: "AW5Q8", type: "tester_result", world: 5, difficulty: 2,
    questionText: "Which of these objects makes the best square-corner tester?",
    visual: "real_object", objectName: "book",
    options: [
      "The corner of a rectangular book or paper",
      "A round plate",
      "A ball",
      "A curved ribbon"
    ],
    correctAnswer: "The corner of a rectangular book or paper",
    hint1: "You need a tool with a perfect square corner.",
    hint2: "Round or curved objects don't have any straight corners at all.",
    explanation: "The corner of a rectangular book or paper makes the best tester because it's already a perfect Right Angle."
  },
  {
    id: "AW5Q9", type: "tester_result", world: 5, difficulty: 3,
    questionText: "Mei Ling's tester fits exactly on a triangle's biggest corner. What can she conclude about that triangle?",
    visual: "real_object", objectName: "triangle",
    options: [
      "It is a right-angled triangle",
      "It has no Right Angles",
      "All corners are equal",
      "It is not a triangle"
    ],
    correctAnswer: "It is a right-angled triangle",
    hint1: "A triangle with one 90° corner has a special name.",
    hint2: "If one corner fits the tester exactly, that corner is 90°.",
    explanation: "A triangle with one Right Angle corner is called a RIGHT-ANGLED TRIANGLE."
  },
  {
    id: "AW5Q10", type: "tester_result", world: 5, difficulty: 3,
    questionText: "Ahmad's tester never fits exactly on any corner of a shape — always a gap or overflow. What can he conclude?",
    visual: "real_object", objectName: "shape",
    options: [
      "The shape has no Right Angles",
      "The shape has 4 Right Angles",
      "The shape is a square",
      "The tester is broken"
    ],
    correctAnswer: "The shape has no Right Angles",
    hint1: "If nothing ever fits exactly, none of the corners match 90°.",
    hint2: "Some shapes, like many triangles, have no Right Angles at all.",
    explanation: "If the tester never fits exactly on any corner, the shape has NO RIGHT ANGLES."
  },

  // ================= WORLD 6: SHAPE CORNER CASTLE (Hard) =================
  {
    id: "AW6Q1", type: "shape_corners", world: 6, difficulty: 3,
    questionText: "How many Right Angle corners does a square have?",
    visual: "real_object", objectName: "square",
    options: [4, 3, 2, 0],
    correctAnswer: 4,
    hint1: "Count all four corners of a square.",
    hint2: "Every single one is a Right Angle.",
    explanation: "A square has 4 RIGHT ANGLE corners."
  },
  {
    id: "AW6Q2", type: "shape_corners", world: 6, difficulty: 3,
    questionText: "How many Right Angle corners does a rectangle have?",
    visual: "real_object", objectName: "rectangle",
    options: [4, 2, 1, 0],
    correctAnswer: 4,
    hint1: "Rectangles are 'stretched' squares.",
    hint2: "Stretching doesn't change the corner angles — all 4 stay Right Angles.",
    explanation: "A rectangle has 4 RIGHT ANGLE corners, just like a square."
  },
  {
    id: "AW6Q3", type: "shape_corners", world: 6, difficulty: 3,
    questionText: "A right-angled triangle has exactly how many Right Angle corners?",
    visual: "real_object", objectName: "triangle",
    options: [1, 2, 3, 0],
    correctAnswer: 1,
    hint1: "The name gives you a strong clue!",
    hint2: "Only one of its three corners is exactly 90°.",
    explanation: "A right-angled triangle has exactly 1 RIGHT ANGLE corner."
  },
  {
    id: "AW6Q4", type: "shape_corners", world: 6, difficulty: 3,
    questionText: "A regular pentagon (5 equal sides) has corners bigger than 90° each. What type of angle are its corners?",
    visual: "real_object", objectName: "pentagon",
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "The question already tells you they measure more than 90°.",
    hint2: "Angles bigger than 90° are always in the 'bigger' group.",
    explanation: "Each corner of a regular pentagon is BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW6Q5", type: "shape_corners", world: 6, difficulty: 3,
    questionText: "A star shape often has very pointy corners. What type of angle are these usually?",
    visual: "real_object", objectName: "star",
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "Pointy corners are narrow, like a pizza slice tip.",
    hint2: "Narrow corners are smaller than a Right Angle.",
    explanation: "Pointy star corners are usually SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW6Q6", type: "true_false", world: 6, difficulty: 3,
    questionText: "True or False: A shape can have some Right Angle corners and some non-Right-Angle corners at the same time.",
    visual: "real_object", objectName: "triangle",
    options: ["True", "False", "Never", "Only circles can"],
    correctAnswer: "True",
    hint1: "Think about the right-angled triangle again.",
    hint2: "It has ONE Right Angle and TWO other, different angles.",
    explanation: "TRUE. A right-angled triangle, for example, has one Right Angle and two other angle types."
  },
  {
    id: "AW6Q7", type: "shape_corners", world: 6, difficulty: 3,
    questionText: "Which shape is guaranteed to have ALL Right Angle corners?",
    visual: "real_object", objectName: "rectangle",
    options: ["Rectangle", "Triangle", "Pentagon", "Star"],
    correctAnswer: "Rectangle",
    hint1: "Only one shape here always has four 90° corners.",
    hint2: "Rectangles (and squares) always have 4 Right Angles.",
    explanation: "A RECTANGLE is guaranteed to have all 4 corners as Right Angles."
  },
  {
    id: "AW6Q8", type: "shape_corners", world: 6, difficulty: 3,
    questionText: "A picture frame is shaped like a rectangle. How many of its inside corners are Right Angles?",
    visual: "real_object", objectName: "frame",
    options: [4, 2, 1, 0],
    correctAnswer: 4,
    hint1: "A picture frame follows the same corner rule as any rectangle.",
    hint2: "All 4 inside corners of the frame are Right Angles.",
    explanation: "A rectangular picture frame has 4 RIGHT ANGLE corners on the inside."
  },
  {
    id: "AW6Q9", type: "shape_corners", world: 6, difficulty: 3,
    questionText: "A stop sign is shaped like an octagon (8 equal sides). Its corners are wider than a square corner. What type of angle are they?",
    visual: "real_object", objectName: "octagon",
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "The question tells you the corners are 'wider' than a square corner.",
    hint2: "Wider than 90° means bigger than a Right Angle.",
    explanation: "A stop sign's octagon corners are BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW6Q10", type: "shape_corners", world: 6, difficulty: 3,
    questionText: "How many Right Angles does a circle have?",
    visual: "real_object", objectName: "circle",
    options: [0, 1, 4, "Cannot count"],
    correctAnswer: 0,
    hint1: "Angles need two straight arms meeting at a point.",
    hint2: "A circle has no straight arms or corners at all!",
    explanation: "A circle has 0 Right Angles — it has no straight arms or corners at all."
  },

  // ================= WORLD 7: RIGHT ANGLE OR NOT LAB (Hard) =================
  {
    id: "AW7Q1", type: "angle_type", world: 7, difficulty: 3, targetDegrees: 80,
    questionText: "Look carefully — is this angle a Right Angle, or just close to one?",
    visual: "angle_tester", targetDegrees: 80,
    options: ["Smaller than a Right Angle", "Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "Even a small gap in the tester means it's not exactly 90°.",
    hint2: "Look for the tiny gap — this angle is a little narrower than a Right Angle.",
    explanation: "This angle is SMALLER THAN A RIGHT ANGLE — even a small gap means it isn't a perfect 90°."
  },
  {
    id: "AW7Q2", type: "angle_type", world: 7, difficulty: 3, targetDegrees: 100,
    questionText: "Look carefully — is this angle a Right Angle, or just a little more than one?",
    visual: "angle_tester", targetDegrees: 100,
    options: ["Bigger than a Right Angle", "Right Angle", "Smaller than a Right Angle", "Cannot tell"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "Even a small overflow past the tester means it's not exactly 90°.",
    hint2: "Look for the tiny overflow — this angle is a little wider than a Right Angle.",
    explanation: "This angle is BIGGER THAN A RIGHT ANGLE — even a small overflow means it isn't a perfect 90°."
  },
  {
    id: "AW7Q3", type: "true_false", world: 7, difficulty: 3,
    questionText: "True or False: If an angle looks almost like a Right Angle, it must be exactly 90°.",
    visual: "angle_view", targetDegrees: 85,
    options: ["False", "True", "Only sometimes", "Cannot tell"],
    correctAnswer: "False",
    hint1: "'Almost' is a big clue here.",
    hint2: "Only a perfect match with the tester (no gap, no overflow) proves it's exactly 90°.",
    explanation: "FALSE. An angle only close to 90° is NOT necessarily a Right Angle — you must check with a tester to be sure."
  },
  {
    id: "AW7Q4", type: "angle_type", world: 7, difficulty: 3, targetDegrees: 90,
    questionText: "This angle fits the tester with absolutely no gap and no overflow at all. What must it be?",
    visual: "angle_tester", targetDegrees: 90,
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "A perfect match, with zero gap and zero overflow, is the definition of a Right Angle.",
    hint2: "This is the only way to be 100% sure an angle is exactly 90°.",
    explanation: "A perfect fit with zero gap and zero overflow confirms this is a RIGHT ANGLE."
  },
  {
    id: "AW7Q5", type: "compare", world: 7, difficulty: 3,
    questionText: "Angle A is 91° and Angle B is 89°. Which one is smaller than a Right Angle?",
    visual: "angle_view", targetDegrees: 89,
    options: ["Angle B", "Angle A", "Both", "Neither"],
    correctAnswer: "Angle B",
    hint1: "Right Angle is exactly 90°. Anything less is 'smaller than'.",
    hint2: "89 is less than 90, so Angle B is smaller than a Right Angle.",
    explanation: "Angle B (89°) is SMALLER THAN A RIGHT ANGLE, while Angle A (91°) is bigger."
  },
  {
    id: "AW7Q6", type: "compare", world: 7, difficulty: 3,
    questionText: "Angle A is 91° and Angle B is 89°. Which one is bigger than a Right Angle?",
    visual: "angle_view", targetDegrees: 91,
    options: ["Angle A", "Angle B", "Both", "Neither"],
    correctAnswer: "Angle A",
    hint1: "Right Angle is exactly 90°. Anything more is 'bigger than'.",
    hint2: "91 is more than 90, so Angle A is bigger than a Right Angle.",
    explanation: "Angle A (91°) is BIGGER THAN A RIGHT ANGLE, while Angle B (89°) is smaller."
  },
  {
    id: "AW7Q7", type: "true_false", world: 7, difficulty: 3,
    questionText: "True or False: An angle of exactly 90° is both 'not smaller' and 'not bigger' than a Right Angle.",
    visual: "angle_view", targetDegrees: 90,
    options: ["True", "False", "Only sometimes", "Cannot tell"],
    correctAnswer: "True",
    hint1: "90° IS the Right Angle itself.",
    hint2: "It can't be smaller or bigger than itself!",
    explanation: "TRUE. An angle of exactly 90° is neither smaller nor bigger — it IS a Right Angle."
  },
  {
    id: "AW7Q8", type: "angle_type", world: 7, difficulty: 3, targetDegrees: 179,
    questionText: "This angle is almost a straight line. What type of angle is it?",
    visual: "angle_view", targetDegrees: 179,
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "A straight line angle (180°) is much wider than a square corner.",
    hint2: "Anything wider than 90° belongs in the 'bigger' group.",
    explanation: "An angle close to a straight line is far BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW7Q9", type: "angle_type", world: 7, difficulty: 3, targetDegrees: 5,
    questionText: "This angle is almost completely closed, like closed scissors. What type of angle is it?",
    visual: "angle_view", targetDegrees: 5,
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "An almost-closed angle is extremely narrow.",
    hint2: "Anything narrower than 90° belongs in the 'smaller' group.",
    explanation: "An angle that is almost completely closed is far SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW7Q10", type: "true_false", world: 7, difficulty: 3,
    questionText: "True or False: To be certain an angle is a Right Angle, you should always check with a tester rather than just guessing by eye.",
    visual: "angle_tester", targetDegrees: 90,
    options: ["True", "False", "Only for big angles", "Only for small angles"],
    correctAnswer: "True",
    hint1: "Our eyes can be tricked by angles that only look close to 90°.",
    hint2: "Testing with a square-corner tester is always the most reliable way to check.",
    explanation: "TRUE. Always check with a tester — angles that only 'look' like 90° might actually be a little different."
  },

  // ================= WORLD 8: REAL WORLD ANGLE SAFARI (Hard, Singapore-flavoured) =================
  {
    id: "AW8Q1", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "At a hawker stall, an uncle tilts open a big umbrella halfway. What type of angle does the umbrella pole make with a rib?",
    visual: "real_object", objectName: "umbrella",
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "A halfway-open umbrella hasn't spread its ribs out very far yet.",
    hint2: "The ribs are still close to the pole, making a narrow angle.",
    explanation: "A halfway-open umbrella rib makes an angle SMALLER THAN A RIGHT ANGLE with the pole."
  },
  {
    id: "AW8Q2", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "A roti prata is cut into 4 equal quarters. What type of angle is at the tip of each quarter piece?",
    visual: "real_object", objectName: "prata",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "Cutting a circle into 4 equal parts makes each slice exactly a quarter-turn.",
    hint2: "A quarter of a full turn is exactly 90°.",
    explanation: "Each quarter of a prata cut into 4 equal pieces has a tip angle of exactly 90° — a RIGHT ANGLE."
  },
  {
    id: "AW8Q3", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "An MRT platform floor tile is a perfect square. What type of angle is at each tile corner?",
    visual: "real_object", objectName: "tile",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "Floor tiles are almost always square or rectangular.",
    hint2: "Every corner of a square tile is a Right Angle.",
    explanation: "Each corner of a square MRT platform tile is a RIGHT ANGLE."
  },
  {
    id: "AW8Q4", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "An HDB window grille has diagonal bars crossing straight bars. Where a diagonal bar crosses a straight vertical bar at a slant, what type of angle is likely formed?",
    visual: "real_object", objectName: "grille",
    options: ["Smaller than a Right Angle", "Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "A diagonal bar crossing a vertical bar at a slant usually makes a sharp angle on one side.",
    hint2: "The sharper side of a slanted crossing is usually narrower than 90°.",
    explanation: "The sharp side where a slanted grille bar meets a straight bar is usually SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW8Q5", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "A void deck badminton net pole stands straight up from the flat ground. What type of angle does the pole make with the ground?",
    visual: "real_object", objectName: "pole",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "A pole standing perfectly straight up is vertical.",
    hint2: "A vertical pole meeting flat, horizontal ground always forms a Right Angle.",
    explanation: "A pole standing straight up from flat ground makes a RIGHT ANGLE."
  },
  {
    id: "AW8Q6", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "A wide slide at the playground is tilted at a gentle, low slope. What type of angle does it make with the ground?",
    visual: "real_object", objectName: "slide",
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "A gentle, low slope stays close to the ground.",
    hint2: "Low slopes make a narrow angle with the ground — smaller than 90°.",
    explanation: "A gently sloped playground slide makes an angle SMALLER THAN A RIGHT ANGLE with the ground."
  },
  {
    id: "AW8Q7", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "A zebra crossing has two sets of straight white lines that cross the road perpendicular to the curb. What type of angle do the lines make with the curb?",
    visual: "real_object", objectName: "crossing",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "'Perpendicular' is a special word meaning exactly 90°.",
    hint2: "Perpendicular lines always cross at a Right Angle.",
    explanation: "Perpendicular zebra crossing lines meet the curb at a RIGHT ANGLE."
  },
  {
    id: "AW8Q8", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "A durian's spikes point outward at very sharp, narrow points. What type of angle is at the tip of each spike?",
    visual: "real_object", objectName: "durian",
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Cannot tell"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "Sharp, narrow points are always small angles.",
    hint2: "Spikes are much narrower than a square corner.",
    explanation: "The sharp tip of a durian spike makes an angle SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW8Q9", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "A hawker centre table and its bench seat meet the floor legs at standard right angles. How many Right Angle corners does a rectangular table top have?",
    visual: "real_object", objectName: "table",
    options: [4, 2, 1, 0],
    correctAnswer: 4,
    hint1: "A hawker table top is usually rectangular.",
    hint2: "Just like any rectangle, it has 4 Right Angle corners.",
    explanation: "A rectangular hawker centre table top has 4 RIGHT ANGLE corners."
  },
  {
    id: "AW8Q10", type: "real_world_match", world: 8, difficulty: 3,
    questionText: "A traffic light pole meets the pavement, and a road sign is bolted onto it sticking out sideways. What type of angle does the sign arm usually make with the pole?",
    visual: "real_object", objectName: "signpost",
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Cannot tell"],
    correctAnswer: "Right Angle",
    hint1: "Road signs usually stick straight out sideways from a vertical pole.",
    hint2: "A sideways arm on a straight-up pole makes a Right Angle.",
    explanation: "A road sign arm sticking straight out from a vertical pole usually makes a RIGHT ANGLE."
  },

  // ================= WORLD 9: MYSTERY ANGLE PALACE (Hardest, reverse reasoning) =================
  {
    id: "AW9Q1", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am an angle exactly 90°. What am I?",
    visual: "angle_view", targetDegrees: 90,
    options: ["A Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Not a real angle"],
    correctAnswer: "A Right Angle",
    hint1: "There is only one type of angle that is always exactly 90°.",
    hint2: "That's the definition of a Right Angle!",
    explanation: "An angle exactly 90° is, by definition, A RIGHT ANGLE."
  },
  {
    id: "AW9Q2", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am wider than a square corner, and a door swung fully open could be like me. What am I?",
    visual: "angle_view", targetDegrees: 130,
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Not a real angle"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "The clue says 'wider than a square corner'.",
    hint2: "Wider than 90° means Bigger than a Right Angle.",
    explanation: "An angle wider than a square corner, like a fully-open door, is BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW9Q3", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am narrower than a square corner, and a pizza slice could be like me. What am I?",
    visual: "angle_view", targetDegrees: 40,
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Not a real angle"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "The clue says 'narrower than a square corner'.",
    hint2: "Narrower than 90° means Smaller than a Right Angle.",
    explanation: "An angle narrower than a square corner, like a pizza slice, is SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW9Q4", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I fit a tester exactly, and I appear at every corner of a square. What am I?",
    visual: "angle_tester", targetDegrees: 90,
    options: ["A Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Not a real angle"],
    correctAnswer: "A Right Angle",
    hint1: "'Fits a tester exactly' is the strongest clue here.",
    hint2: "Every corner of a square is a Right Angle.",
    explanation: "An angle that fits the tester exactly, like every square corner, IS A RIGHT ANGLE."
  },
  {
    id: "AW9Q5", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "3 o'clock and I share the same type of angle. I appear at the corners of your exercise book too. What am I?",
    visual: "clock_view", hourDeg: 90, minuteDeg: 0,
    options: ["A Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Not a real angle"],
    correctAnswer: "A Right Angle",
    hint1: "3 o'clock is one of the classic Right Angle clock times.",
    hint2: "Book corners are also Right Angles!",
    explanation: "3 o'clock's hands and a book's corner are both examples of A RIGHT ANGLE."
  },
  {
    id: "AW9Q6", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am bigger than 90° but smaller than a straight line. A reclined chair could be like me. What am I?",
    visual: "angle_view", targetDegrees: 135,
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Not a real angle"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "'Bigger than 90°' is the key clue.",
    hint2: "Any angle over 90° falls in this group.",
    explanation: "An angle bigger than 90°, like a reclined chair, is BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW9Q7", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am the only angle group that always measures the exact same number of degrees, no matter the shape. What am I?",
    visual: "angle_view", targetDegrees: 90,
    options: ["Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "None of these"],
    correctAnswer: "Right Angle",
    hint1: "'Smaller' and 'Bigger' cover a whole range of degrees, not one fixed number.",
    hint2: "Only the Right Angle is always exactly 90°.",
    explanation: "The RIGHT ANGLE is the only group that is always the exact same 90°, no matter what."
  },
  {
    id: "AW9Q8", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I leave a gap in a tester, and I am found at the tip of a slice of cake. What am I?",
    visual: "real_object", objectName: "cake",
    options: ["Smaller than a Right Angle", "Bigger than a Right Angle", "Right Angle", "Not a real angle"],
    correctAnswer: "Smaller than a Right Angle",
    hint1: "'Leaves a gap' means it doesn't fill up the whole tester.",
    hint2: "Cake slice tips, like pizza slices, are usually narrow.",
    explanation: "An angle that leaves a gap in the tester, like a cake slice tip, is SMALLER THAN A RIGHT ANGLE."
  },
  {
    id: "AW9Q9", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I spill outside a tester, and I am found where an open laptop screen meets its keyboard. What am I?",
    visual: "real_object", objectName: "laptop",
    options: ["Bigger than a Right Angle", "Smaller than a Right Angle", "Right Angle", "Not a real angle"],
    correctAnswer: "Bigger than a Right Angle",
    hint1: "'Spills outside' means it's too wide for the tester.",
    hint2: "A comfortably tilted laptop screen is wider than 90°.",
    explanation: "An angle that spills outside the tester, like a tilted laptop screen, is BIGGER THAN A RIGHT ANGLE."
  },
  {
    id: "AW9Q10", type: "reverse_reasoning", world: 9, difficulty: 3,
    questionText: "I am found at 9 o'clock on a clock face, at every corner of a rectangle, and wherever perpendicular lines cross. What am I?",
    visual: "angle_view", targetDegrees: 90,
    options: ["A Right Angle", "Smaller than a Right Angle", "Bigger than a Right Angle", "Not a real angle"],
    correctAnswer: "A Right Angle",
    hint1: "All three clues describe the very same special angle.",
    hint2: "9 o'clock, rectangle corners, and perpendicular lines are all Right Angles!",
    explanation: "All three clues describe A RIGHT ANGLE — the special 90° angle found everywhere in daily life!"
  }
];
