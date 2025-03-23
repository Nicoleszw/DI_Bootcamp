const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes);

app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

app.listen(PORT, () => {
  console.log(`Task API running at http://localhost:${PORT}`);
});
