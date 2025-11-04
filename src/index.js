const express = require('express');
const app = express();
const port = 3000;

const tasks = [
       { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date('2025-11-4') },
       { id: 2, title: 'Build REST API', completed: false, priority: 'high', createdAt: new Date('2025-11-4') },
       { id: 3, title: 'Setup Database', completed: true, priority: 'medium', createdAt: new Date('2025-11-4') },
       { id: 4, title: 'Write Documentation', completed: false, priority: 'low', createdAt: new Date('2025-11-4') },
       { id: 5, title: 'Deploy Application', completed: false, priority: 'medium', createdAt: new Date('2025-11-4') }
];

app.get('/', (req, res) => {
       res.send('Task Management API is running!');
});

app.get('/tasks', (req, res) => {
       res.json(tasks);
});

app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
});