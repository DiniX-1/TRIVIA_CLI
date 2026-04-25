const readlineSync = require("readline-sync");

/**
 * Displays a single question and its options, then collects the user's answer.
 * @param {object} questionObj - The question object with question, options, and answer fields.
 * @param {number} index - The question number (1-based).
 * @returns {boolean} - Whether the user answered correctly.
 */
function askQuestion(questionObj, index) {
  console.log(`\nQuestion ${index}: ${questionObj.question}`);
  questionObj.options.forEach((opt) => console.log(`  ${opt}`));

  const userAnswer = readlineSync.question("Your answer (A/B/C/D): ").trim().toUpperCase();

  if (userAnswer === questionObj.answer) {
    console.log("✅ Correct!");
    return true;
  } else {
    console.log(`❌ Wrong! The correct answer was ${questionObj.answer}.`);
    return false;
  }
}

/**
 * Runs the quiz by iterating over all questions and tracking the score.
 * Uses Array.map() to collect per-question results, then reduces to a final score.
 * @param {Array} questions - Array of question objects.
 * @returns {object} - { score, total, timeTaken }
 */
function runQuiz(questions) {
  const startTime = Date.now();

  // map() over questions to get an array of booleans (correct/incorrect)
  const results = questions.map((q, i) => askQuestion(q, i + 1));

  // reduce() the results array to compute the final score
  const score = results.reduce((acc, correct) => acc + (correct ? 1 : 0), 0);

  const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);

  return { score, total: questions.length, timeTaken };
}

/**
 * Displays the final results and a performance message.
 * @param {object} result - { score, total, timeTaken }
 */
function showResults({ score, total, timeTaken }) {
  const percentage = Math.round((score / total) * 100);

  console.log("\n========================================");
  console.log("           🏆 QUIZ COMPLETE! 🏆");
  console.log("========================================");
  console.log(`  Score     : ${score} / ${total}`);
  console.log(`  Accuracy  : ${percentage}%`);
  console.log(`  Time Taken: ${timeTaken} seconds`);
  console.log("----------------------------------------");

  if (percentage === 100) {
    console.log("  🌟 Perfect score! Outstanding!");
  } else if (percentage >= 70) {
    console.log("  👍 Great job! You passed!");
  } else if (percentage >= 50) {
    console.log("  📚 Not bad, but keep studying!");
  } else {
    console.log("  💪 Keep practicing — you'll get there!");
  }

  console.log("========================================\n");
}

module.exports = { runQuiz, showResults };
