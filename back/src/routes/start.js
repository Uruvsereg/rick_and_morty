const { log } = require('console');
const app = require('./server');

app.listen(3001, () => {
    console.log('Servidor en el puerto 3001');
})