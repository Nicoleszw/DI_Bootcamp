const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '🎉', name: 'Party' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '🏀', name: 'Basketball' },
  { emoji: '🎵', name: 'Music' },
];

let leaderboard = [];
let currentEmoji = {};
let score = 0;

function getRandomEmojiSet() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const options = new Set([correct.name]);

  while (options.size < 4) {
    const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
    options.add(randomOption);
  }

  const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);
  return { correct, options: shuffledOptions };
}

app.get('/api/question', (req, res) => {
  const { correct, options } = getRandomEmojiSet();
  currentEmoji = correct;
  res.json({ emoji: correct.emoji, options });
});

app.post('/api/guess', (req, res) => {
  const { guess, player } = req.body;

  if (!guess || !player) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  let isCorrect = guess === currentEmoji.name;
  if (isCorrect) score++;
  else score = 0;

  leaderboard.push({ player, score });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard = leaderboard.slice(0, 5); 

  res.json({ isCorrect, correctAnswer: currentEmoji.name, score, leaderboard });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Emoji Game running at http://localhost:${PORT}`);
});
