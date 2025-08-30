process.on('uncaughtException', (err) => {
    console.error('Excepción no capturada:', err);
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

try {
    app.use(express.json());

    const taskRoutes = require('./routes/tasks');
    app.use('/api/tasks', taskRoutes);

    const sequelize = require('./config/db');
    const Task = require('./models/Task');

    sequelize.authenticate()
        .then(() => {
            console.log('Conexión a MySQL establecida');
            return sequelize.sync({ force: false });
        })
        .then(() => console.log('Modelo sincronizado con la base de datos'))
        .catch(err => console.error('Error al conectar o sincronizar:', err));

    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
} catch (error) {
    console.error('Error al iniciar el servidor:', error);
}

process.on('unhandledRejection', (reason, promise) => {
    console.error('Rechazo no manejado en una promesa:', reason);
});