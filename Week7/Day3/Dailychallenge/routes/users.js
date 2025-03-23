const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const router = express.Router();

const filePath = path.join(__dirname, '../data/users.json');

const readUsers = () => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const writeUsers = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');

router.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;
  if (!firstName || !lastName || !email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const users = readUsers();
  const exists = users.find(u => u.username === username);
  if (exists) return res.json({ message: 'Username already exists' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword
  };
  users.push(newUser);
  writeUsers(users);
  res.json({ message: 'Hello Your account is now created!' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.json({ message: 'Username is not registered' });

  const valid = await bcrypt.compare(password, user.password);
  if (valid) {
    res.json({ message: `Hi ${username} welcome back again!` });
  } else {
    res.json({ message: 'Invalid password' });
  }
});

router.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

router.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

router.put('/users/:id', (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  const { firstName, lastName, email } = req.body;
  users[index] = { ...users[index], firstName, lastName, email };
  writeUsers(users);
  res.json(users[index]);
});

module.exports = router;
