
//importar librerias:::::::::::::::::::::::::::::::::::::::::::
const express = require('express');
const mysql = require('mysql2');

//objetos para llamar meetodos de express::::::::::::::::::::::
const app = express();

//configuraciones :::::::::::::::::::::::::::::::::::::::::::::
// aca se indica que se utiliza un motor para ver las pantillas
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

//middleware ::::::::::::::::::::::::::::::::::::::::::::::::::
app.use(express.static("public"));

//conexion a la base de datos::::::::::::::::::::::::::::::::::
const conexion = mysql.createConnection({
  host: 'localhost',
  database: 'bolilla_negra',
  user: 'root',
  password: 'Flam822'
})

conexion.connect(function (err) {
  if(err){
    throw err;
    console.log (`no se pudo conectar`)
  }else{
    console.log('conexion exitosa')
  }
})

//consulta a la base de datos::::::::::::::::::::::::::::::::::
const jugadores = 'SELECT * from players';
conexion.query(jugadores, function (error, lista){
if(error){
  throw(error)}
  else{
      console.log(lista)
  }
})

//cierre de la conexion a la base :::::::::::::::::::::::::::::
conexion.end(function(err){
if(err){
  throw err;
  console.log ('no puedo cerrar la conexión')
}else{
  console.log('conexión cerrada exitosamente')
}
})


//configuración del puerto ::::::::::::::::::::::::::::::::::::
const puerto = process.env.PORT || 3000;
app.listen(puerto, () =>{
    console.log (`Escuchando en puerto ${puerto}`)
})