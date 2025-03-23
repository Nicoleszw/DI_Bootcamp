const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const userRoutes = require('./routes/users');
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`User API running at http://localhost:${PORT}`);
});
