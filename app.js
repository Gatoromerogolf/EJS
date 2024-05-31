
//importar librerias:::::::::::::::::::::::::::::::::::::::::::
const express = require('express');
const mysql = require('mysql2');

//objetos para llamar metodos de express::::::::::::::::::::::
const app = express();

//configuraciones :::::::::::::::::::::::::::::::::::::::::::::
// aca se indica que se utiliza un motor para ver las pantillas
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('Menu-General.ejs')
})

app.get('/carga', (req, res) => {
  res.render('carga');
})

//ruta de archivos estáticos - middleware :::::::::::::::::::::
app.use(express.static(__dirname + '/public'));


//conexion a la base de datos::::::::::::::::::::::::::::::::::
const conexion = mysql.createConnection({
  host: 'localhost',
  database: 'bolilla_negra',
  user: 'root',
  password: 'Flam822'
});

conexion.connect(function (err) {
  if (err) {
    throw err;
    console.log(`no se pudo conectar`)
  } else {
    console.log('conexion exitosa')
  }
})

//consulta a la base de datos::::::::::::::::::::::::::::::::::
const jugadores = 'SELECT * from players where id<10';
conexion.query(jugadores, function (error, lista) {
  if (error) {
    throw (error)
  }
  else {
    console.log(lista)
  }
})

//agregado de registro:::::::::::::::::::::::::::::::::::::::::
const nuevoPlayer =
  'INSERT INTO players (id, Alias, Nombre, Apellido, Matricula, Jefe) VALUES (NULL, "Fantasma", "NomFantasma", "ApeFantasma", 99999, "Mujer maravilla")';

conexion.query(nuevoPlayer, function (error, lista) {
  if (error) {
    throw (error)
  }
  else {
    console.log(lista.insertId, lista.fieldCount)
  }
})

//modificar registro:::::::::::::::::::::::::::::::::::::::::

const cambioPlayer =
  'UPDATE players SET Matricula = 905509 WHERE players.id = 13';


conexion.query(cambioPlayer, function (error, lista) {
  if (error) {
    throw (error)
  }
  else {
    console.log(lista.insertId, lista.fieldCount)
  }
})


//eliminar registro:::::::::::::::::::::::::::::::::::::::::

const borrarPlayer =
  'DELETE FROM players WHERE players.id > 13';

conexion.query(borrarPlayer, function (error, lista) {
  if (error) {
    throw (error)
  }
  else {
    console.log(lista.insertId, lista.fieldCount)
  }
})
//cierre de la conexion a la base :::::::::::::::::::::::::::::
conexion.end(function (err) {
  if (err) {
    throw err;
    console.log('no puedo cerrar la conexión')
  } else {
    console.log('conexión cerrada exitosamente')
  }
})


//configuración del puerto ::::::::::::::::::::::::::::::::::::
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Escuchando en puerto ${puerto}`)
})