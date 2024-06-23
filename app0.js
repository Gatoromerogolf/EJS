
//importar librerias:::::::::::::::::::::::::::::::::::::::::::
const express = require('express');
const mysql = require('mysql2');

//objetos para llamar metodos de express::::::::::::::::::::::
const app = express();

//configuraciones :::::::::::::::::::::::::::::::::::::::::::::
// aca se indica que se utiliza un motor para ver las pantillas
app.set('view engine', 'ejs')
app.use(express.json()); // asi reconoce los objetos que vienen de las paginas
app.use(express.urlencoded({extended: false})); // para que no analice lo que recibe....

app.get('/', (req, res) => {
  res.render('login.ejs')
})

app.get('/carga', (req, res) => {
  res.render('carga');
})

app.post('/validar', (req, res) => {
  const datos = req.body;
  validacion(datos, (error, results) => {
    if (error) {
      console.error ('Error en la validación', error);
      res.status(500).send('Error en la validación');
    }else{
      console.log ('Resultados:', results);
      res.status(200).send('Validación completada con exito');      
    }
  });
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


//configuración del puerto ::::::::::::::::::::::::::::::::::::
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Escuchando en puerto ${puerto}`)
})