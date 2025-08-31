module.exports = {
  openapi: '3.0.1',
  info: {
    title: 'API de Tareas',
    description: 'API para gestionar tareas CRUD',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'https://<tu_url_render>.onrender.com/api',
      description: 'Servidor en Render',
    },
    {
      url: 'http://localhost:3000/api',
      description: 'Servidor local',
    },
  ],
};