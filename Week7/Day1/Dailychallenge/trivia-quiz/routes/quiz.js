const express = require('express');
const router = express.Router();

const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const currentQuestion = triviaQuestions[currentQuestionIndex].question;
  res.send(`
    <h2>Question ${currentQuestionIndex + 1}: ${currentQuestion}</h2>
    <form method="POST" action="/quiz">
      <input type="text" name="answer" placeholder="Your answer" required/>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post('/', (req, res) => {
  const userAnswer = req.body.answer.trim().toLowerCase();
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer.toLowerCase();

  let feedback = '';
  if (userAnswer === correctAnswer) {
    score++;
    feedback = "<p>Correct!</p>";
  } else {
    feedback = `<p>Incorrect! Correct answer: ${triviaQuestions[currentQuestionIndex].answer}</p>`;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const nextQuestion = triviaQuestions[currentQuestionIndex].question;
  res.send(`
    ${feedback}
    <h2>Next Question ${currentQuestionIndex + 1}: ${nextQuestion}</h2>
    <form method="POST" action="/quiz">
      <input type="text" name="answer" placeholder="Your answer" required/>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.get('/score', (req, res) => {
  const finalScore = score;
  const total = triviaQuestions.length;

  currentQuestionIndex = 0;
  score = 0;

  res.send(`
    <h2>Your final score: ${finalScore} / ${total}</h2>
    <a href="/quiz">Play Again</a>
  `);
});

module.exports = router;
