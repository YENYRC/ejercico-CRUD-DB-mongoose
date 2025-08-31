module.exports = {
  paths: {
    '/tasks/create': {
      post: {
        summary: 'Crear una nueva tarea',
        description: 'Crea una nueva tarea con un título',
        tags: ['Tasks'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    description: 'Título de la tarea',
                    example: 'Comprar comida',
                  },
                },
                required: ['title'],
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Tarea creada con éxito',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task',
                },
              },
            },
          },
          '400': {
            description: 'Error en la solicitud',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
    '/tasks': {
      get: {
        summary: 'Obtener todas las tareas',
        description: 'Devuelve una lista de todas las tareas',
        tags: ['Tasks'],
        responses: {
          '200': {
            description: 'Lista de tareas',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Task',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/tasks/id/{_id}': {
      put: {
        summary: 'Actualizar el título de una tarea',
        description: 'Actualiza solo el título de una tarea específica',
        tags: ['Tasks'],
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            description: 'ID de la tarea',
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    description: 'Nuevo título de la tarea',
                    example: 'Tarea actualizada',
                  },
                },
                required: ['title'],
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Tarea actualizada con éxito',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Task',
                },
              },
            },
          },
          '404': {
            description: 'Tarea no encontrada',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
      delete: {
        summary: 'Eliminar una tarea',
        description: 'Elimina una tarea específica por su ID',
        tags: ['Tasks'],
        parameters: [
          {
            name: '_id',
            in: 'path',
            required: true,
            description: 'ID de la tarea',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Tarea eliminada con éxito',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      example: 'Tarea eliminada',
                    },
                  },
                },
              },
            },
          },
          '404': {
            description: 'Tarea no encontrada',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error',
                },
              },
            },
          },
        },
      },
    },
  },
};