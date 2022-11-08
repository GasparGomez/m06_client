document.addEventListener("DOMContentLoaded", function () {
    moduls = document.querySelectorAll("div.module");

    moduls.forEach(element => {
        element.style.display = "none";
    });

    crearLista(moduls);

    pestanyes = document.querySelector(".pestanyes");

    pestanyes.addEventListener("click", function(e) {
        console.log(e.target.getAttribute("num"));
        mostrarText(e.target.value);
    })
});

function mostrarText(xd) {
    
}

function crearLista(modules) {
    // Provar create element
    htmlStr = `<ul class="llista">`;
    for (let i = 0; i < modules.length; i++) {
        // console.log(modules[i]);
        titol = modules[i].querySelector("h2").innerText;
        // console.log(titol);
        htmlStr += `<li><a num="${i}">${titol}</a></li>`;
    }
    htmlStr += "</ul>";
    document.querySelector(".pestanyes").innerHTML = htmlStr;
}
