const readlineSync = require("readline-sync");
const questions = require("./questions");
const { runQuiz, showResults } = require("./game");

/**
 * Displays the welcome banner and game instructions.
 */
function showWelcome() {
  console.log("\n========================================");
  console.log("         Welcome to Trivia CLI!");
  console.log("========================================");
  console.log("  Rules:");
  console.log("  - Answer each question with A, B, C, or D");
  console.log("  - Your time is tracked from start to finish");
  console.log(`  - There are ${questions.length} questions in total`);
  console.log("========================================\n");
}

/**
 * Runs a 3-second countdown before the quiz starts using setInterval (async timer).
 * @returns {Promise} - Resolves when countdown is complete.
 */
function startCountdown() {
  return new Promise((resolve) => {
    let count = 3;
    console.log("Get ready...");

    const timer = setInterval(() => {
      process.stdout.write(`${count}... `);
      count--;

      if (count < 0) {
        clearInterval(timer);
        console.log("\nGo!\n");
        resolve();
      }
    }, 700);
  });
}

/**
 * Main function — orchestrates the full game flow.
 */
async function main() {
  showWelcome();

  const start = readlineSync.keyInYNStrict("Ready to start the quiz?");
  if (!start) {
    console.log("\nMaybe next time! Goodbye.\n");
    process.exit(0);
  }

  await startCountdown();

  const result = runQuiz(questions);
  showResults(result);

  const playAgain = readlineSync.keyInYNStrict("Play again?");
  if (playAgain) {
    main();
  } else {
    console.log("\nThanks for playing! Goodbye.\n");
  }
}

main();
