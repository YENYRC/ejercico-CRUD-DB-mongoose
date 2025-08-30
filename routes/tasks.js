const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// POST /api/tasks/create - Crear una tarea
router.post('/create', async (req, res) => {
    try {
        const { title } = req.body;
        const task = await Task.create({ title });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/tasks - Obtener todas las tareas
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/tasks/markAsCompleted/:id - Marcar tarea como completada
router.put('/markAsCompleted/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            task.completed = true;
            await task.save();
            res.json(task);
        } else {
            res.status(404).json({ error: 'Tarea no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/tasks/:id - Actualizar título de la tarea
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            task.title = req.body.title || task.title;
            await task.save();
            res.json(task);
        } else {
            res.status(404).json({ error: 'Tarea no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/tasks/:id - Eliminar una tarea
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (task) {
            await task.destroy();
            res.json({ message: 'Tarea eliminada' });
        } else {
            res.status(404).json({ error: 'Tarea no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;