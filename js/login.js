
//importar librerias:::::::::::::::::::::::::::::::::::::::::::
// const express = require('express');
// const mysql = require('mysql2');

//objetos para llamar metodos de express::::::::::::::::::::::
// const app = express();

//configuraciones :::::::::::::::::::::::::::::::::::::::::::::
// aca se indica que se utiliza un motor para ver las pantillas
// app.set('view engine', 'ejs')
// app.use(express.json()); // asi reconoce los objetos que vienen de las paginas
// app.use(express.urlencoded({extended: false})); // para que no analice lo que recibe....

// app.get('/', (req, res) => {
//     res.render('login .ejs')
//   })

const username = document.getElementById("username");
const clave = document.getElementById("clave");
const login = document.getElementById("login");

login.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: clave.value
    }
    console.log(data)

    window.location.href = "../contenido/presentacion.html"; 
});

//     if(JSON.parse(localStorage.getItem('idioma')) == 2){
//         window.location.href = "../public/contenido/Menu-General-en.html";
//     }  else {
//         window.location.href = "../public/contenido/Menu-General.html";
//     }
// })

