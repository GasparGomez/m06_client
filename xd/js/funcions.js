document.addEventListener("DOMContentLoaded", function(){
    moduls = document.querySelectorAll(".module");

    moduls.forEach(element => {
        element.style.display = "none";
    });

    crearLista(moduls);

    pestanyes = document.querySelector("click", function(e) {
        console.log(e.target.getAttribute("num"));
    })
});

function crearLista(modules) {
    htmlStr = "<ul>";
    for (let i = 0; i < modules.length; i++) {
        titol = modules[i].querySelector("h2").innerText;
        htmlStr += `<li><a num="${i}">${titol}</a></li>`;
    }
    htmlStr += "</ul>";
    document.querySelector(".pestanyes").innerHTML = htmlStr;
}