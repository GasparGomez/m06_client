document.addEventListener("DOMContentLoaded", function () {
    moduls = document.querySelectorAll(".module");

    moduls.forEach(element => {
        element.style.display = "none";
    });

    crearLista(moduls);

    document.querySelector(".pestanyes").addEventListener("click", function (e) {
        mostrarText(e.target.getAttribute("num"));
    })
});

function crearLista(modules) {
    htmlStr = "<ul>";
    for (let i = 0; i < modules.length; i++) {
        titol = modules[i].querySelector("h2").innerText;
        htmlStr += `<li><a num="${i}" class="">${titol}</a></li>`;
    }
    htmlStr += "</ul>";
    document.querySelector(".pestanyes").innerHTML = htmlStr;
}

function mostrarText(ind) {
    moduls = document.querySelectorAll(".module");
    llista = document.querySelectorAll(".pestanyes");

    moduls.forEach(element => {
        element.style.display = "none";
        
    });

    moduls[ind].style.display = "block";
}