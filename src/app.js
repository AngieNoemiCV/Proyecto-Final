const cors = require('cors');

const express = require('express');
const app = express();
const puerto = 80;
const ForosController = require('./controllers/ForosController');
const TemasController = require('./controllers/TemasController');
const DesafiosController = require('./controllers/DesafiosController');
const RespuestasController = require('./controllers/RespuestasController');
const PublicacionesController = require('./controllers/PublicacionesController');
const UsuariosController = require('./controllers/UsuariosController');

app.use(cors());
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000', // o cualquier otro origen que desees permitir
    methods: ['GET', 'POST', 'PUT', 'PATCH'], // Métodos permitidos
    allowedHeaders: ['Content-Type'] // Encabezados permitidos
  };
  
  app.use(cors(corsOptions));
  

/*app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('¡Prueba 123456789012!');
});*/

app.get('/temas', TemasController.indexGet);
app.get('/temas/:id([0-9]+)', TemasController.itemGet);
app.post('/temas', TemasController.agregar);
app.put('/temas/:id([0-9]+)', TemasController.editar);
app.patch('/temas/:id([0-9]+)', TemasController.itemPatch);

app.get('/foros', ForosController.indexGet);
app.get('/foros/:id([0-9]+)', ForosController.itemGet);
app.post('/foros', ForosController.agregar);
app.put('/foros/:id([0-9]+)', ForosController.editar);
app.patch('/foros/:id([0-9]+)', ForosController.itemPatch);

app.get('/desafios', DesafiosController.indexGet);
app.get('/desafios/:id([0-9]+)', DesafiosController.itemGet);
app.post('/desafios', DesafiosController.agregar);
app.put('/desafios/:id([0-9]+)', DesafiosController.editar);
app.patch('/desafios/:id([0-9]+)', DesafiosController.itemPatch);

app.get('/respuestas_usuario_des', RespuestasController.indexGet );
app.get('/respuestas_usuario_des/:id([0-9]+)', RespuestasController.itemGet);
app.post('/respuestas_usuario_des', RespuestasController.agregar);
app.put('/respuestas_usuario_des/:id([0-9]+)', RespuestasController.editar);
app.patch('/respuestas_usuario_des/:id([0-9]+)', RespuestasController.itemPatch);

app.get('/publicaciones', PublicacionesController.indexGet);
app.get('/publicaciones/:id([0-9]+)', PublicacionesController.itemGet);
app.post('/publicaciones', PublicacionesController.agregar);
app.put('/publicaciones/:id([0-9]+)', PublicacionesController.editar);
app.patch('/publicaciones/:id([0-9]+)', PublicacionesController.itemPatch);

app.get('/usuarios', UsuariosController.indexGet );
app.get('/usuarios/:id([0-9]+)', UsuariosController.itemGet);
app.post('/usuarios', UsuariosController.agregar);
app.put('/usuarios/:id([0-9]+)', UsuariosController.editar);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);


app.listen(puerto, function() {
    console.log("Servidor en espera http://localhost");
});