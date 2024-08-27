const mainNav = document.getElementById("main")

const sideNav = document.getElementById("sidenav");

const navLinks = document.getElementsByClassName("navbar-link");

const fotoPerfil = document.getElementById("foto-perfil");

const btnMostrar = document.getElementById("boton-mostrar");

const fotoFlecha = document.getElementById("foto-flecha");

// Funciones

// Funciones para abrir o cerrar la varra vertical de navegación
// utiliza el metodo .hidden para ocultar la visualización de los elementos
// lo único que no deja de mostrarse es el botón
// los estilos son cambiados al alterar el valor de su clase, agregando el caracter '-oculto' o volviendo al valor original

// Función cerrar barra de navegación
function closeNav() {

    for (link of navLinks) {
        link.hidden = true;
    }
    fotoPerfil.hidden = true;
    sideNav.classList.value += '-oculto';
    btnMostrar.classList.value += '-oculto';
    fotoFlecha.classList.value += '-oculto';
    fotoPerfil.classList.value += '-oculto';
    mainNav.classList.value += '-oculto';
}

// Función mostrar barra de navegación
function showNav() {
    for (link of navLinks) {
        link.hidden = false;
    }
    fotoPerfil.hidden = false;
    sideNav.classList.value = 'sidenav';
    btnMostrar.classList.value = 'boton-mostrar';
    fotoFlecha.classList.value = 'foto-flecha';
    fotoPerfil.classList.value = 'foto-perfil';
    mainNav.classList.value = 'main';

}

// Evento cuando el botón mostrar se "clickea"
btnMostrar.addEventListener('click', function (event) {

    event.preventDefault();

    switch (navLinks[0].hidden) {

        case false:
            closeNav();
            break;
        
        case true:
            showNav();
            break;
    }
});

// Redirección al enviar el formulario debidamente completado

formContacto = document.getElementById("form-contacto");

formContacto.addEventListener("submit", function(event){
    console.log("Formulario aceptado");
    formContacto.innerHtml
    formContacto.reset();
});
