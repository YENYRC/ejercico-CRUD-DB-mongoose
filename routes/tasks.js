const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// POST /create - Crear una tarea
router.post('/create', async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: 'El título es requerido' });
    const task = new Task({ title });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error creando la tarea', error });
  }
});

// GET / - Obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo las tareas', error });
  }
});

// PUT /id/:_id - Actualizar el título de una tarea
router.put('/id/:_id', async (req, res) => {
  try {
    const { title } = req.body;
    const task = await Task.findByIdAndUpdate(req.params._id, { title }, { new: true });
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error actualizando la tarea', error });
  }
});

// DELETE /id/:_id - Eliminar una tarea
router.delete('/id/:_id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params._id);
    if (!task) return res.status(404).json({ message: 'Tarea no encontrada' });
    res.status(200).json({ message: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ message: 'Error eliminando la tarea', error });
  }
});

module.exports = router;