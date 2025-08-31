module.exports = {
  components: {
    schemas: {
      Task: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'ID de la tarea',
          },
          title: {
            type: 'string',
            description: 'Título de la tarea',
          },
          completed: {
            type: 'boolean',
            description: 'Estado de completado',
            default: false,
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de creación',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            description: 'Fecha de actualización',
          },
        },
        required: ['title'],
      },
      Error: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Mensaje de error',
          },
        },
      },
    },
  },
};