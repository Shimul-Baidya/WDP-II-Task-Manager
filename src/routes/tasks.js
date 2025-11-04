const express = require('express');
const router = express.Router();

const tasks = [
       { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date('2024-01-15') },
       { id: 2, title: 'Build REST API', completed: false, priority: 'high', createdAt: new Date('2024-01-16') },
       { id: 3, title: 'Setup Database', completed: true, priority: 'medium', createdAt: new Date('2024-01-14') },
       { id: 4, title: 'Write Documentation', completed: false, priority: 'low', createdAt: new Date('2024-01-17') },
       { id: 5, title: 'Deploy Application', completed: false, priority: 'medium', createdAt: new Date('2024-01-18') }
];

router.get('/', (req, res) => {
       res.json(tasks);
});

router.get('/:id', (req, res) => {
       const id = parseInt(req.params.id);
       
       if (isNaN(id)) {
              return res.status(400).json({ error: 'Invalid ID format' });
       }
       
       const task = tasks.find(t => t.id === id);
       
       if (!task) {
              return res.status(404).json({ error: 'Task not found' });
       }
       
       res.json(task);
});

module.exports = router;