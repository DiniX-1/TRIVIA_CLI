# Trivia CLI

A Command-Line Interface trivia game built with JavaScript (Node.js).

## Features

- 10 multiple-choice trivia questions
- Real-time answer feedback (correct/incorrect)
- Async countdown timer before the quiz starts
- Time tracking from first question to last answer
- Final score with accuracy percentage and performance message
- Play-again option

## JavaScript Concepts Used

| Concept | Where |
|---|---|
| Arrays | `questions.js` — questions stored as an array of objects |
| `Array.map()` | `game.js` — maps each question to a correct/incorrect boolean |
| `Array.reduce()` | `game.js` — reduces results array to a final score |
| `forEach` loop | `game.js` — iterates over options to display them |
| Functions | `game.js`, `index.js` — modular, single-responsibility functions |
| Async / Timers | `index.js` — `setInterval` wrapped in a `Promise` for countdown |
| User Input | `readline-sync` — synchronous CLI input for answers |

## Project Structure

```
TRIVIA_CLI/
├── index.js        # Entry point: welcome screen, countdown, game loop
├── game.js         # Core logic: askQuestion, runQuiz, showResults
├── questions.js    # Trivia data: array of question objects
├── package.json
└── README.md
```

## Setup & Run

```bash
# Install dependencies
npm install

# Start the game
npm start
```

## How to Play

1. Run `npm start`
2. Press `Y` when prompted to begin
3. Watch the countdown, then answer each question with `A`, `B`, `C`, or `D`
4. See your score, accuracy, and time at the end
5. Choose to play again or exit
