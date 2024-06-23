const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'tu_usuario',
  password: 'tu_contraseña',
  database: 'tu_base_de_datos'
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos');
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para recuperar los datos de la encuesta
app.get('/api/getSurveyData', (req, res) => {
  let sql = 'SELECT pregunta1, pregunta2 FROM encuesta WHERE id = 1'; // Ajusta según tu esquema
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.json({});
    }
  });
});

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
