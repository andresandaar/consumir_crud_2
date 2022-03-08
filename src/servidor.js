const axios = require('axios');
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

// Settings (Definir el puerto, entorno de desarrollo, motor de plantilla)
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares (Son funciones que se ejecutan antes de  que se procese algo, por ejemplo si estamos esperando que ell servidor reciba algun archivo)
app.use(morgan('tiny'));
/* app.use(express.json()); */
/* app.use(express.urlencoded({ extended: false })); */

//Static conten (Contenidos estaticos)
app.use('/recursos', express.static(path.join(__dirname, './public')));

//Routes (Rutas)

app.use(require('./routes/principal'));
app.use(require('./routes/respuestas'));

//Starting server
app.listen(app.get('port'), () => {
	console.log(`Server on: http://localhost:${app.get('port')}`);
});

/* Ejecutar: npm i ejs express morgan */
