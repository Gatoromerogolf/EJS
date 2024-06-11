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

    if(JSON.parse(localStorage.getItem('idioma')) == 2){
        window.location.href = "../public/contenido/Menu-General-en.html";
    }  else {
        window.location.href = "../public/contenido/Menu-General.html";
    }
})
