document.addEventListener("DOMContentLoaded", function () { // EL TEU CODI AQUI
    botoBuscar = document.getElementById("buscar");

    botoBuscar.addEventListener("click", function () {
        numeroLibros = document.getElementById("numeroLibros").value;
        result = validarNumeroLibros(numeroLibros);
        if (!result) {
            alert("Numero incorrecte.");
        } else {
            let datosEnvio = new FormData();
            datosEnvio.append("numLibros", numeroLibros);

            url = 'http://alvaro.alumnes.inspedralbes.cat/goodreads/getBooks.php';
            fetch(url, {
                method: 'POST',
                body: datosEnvio
            }).then((response) => response.json()).then((data) => mostrarDades(data.AllBooks));
        }
    });

});

function validarNumeroLibros(num) {
    let regexNum = /^[1-8](\d)*$/;

    let numResult = regexNum.test(num);

    return numResult;
}

function mostrarDades(dades) {
    console.log(dades);
    htmlStr = "<ul>";
    for (let i = 0; i < dades.length; i++) {
        const element = dades[i];
        htmlStr += 
        `<li><h2>${element.id}.- ${element.title}</h2></li>
        <h4>Autor: ${element.author}</h4>
        <h5>Summary: ${element.summary}</h5><br>
        <h6>Likes: ${element.likes} / Dislikes: ${element.dislikes}</h6>
        <img src="${element.cover}" width="200px">
        <br><br>`;
    }
    htmlStr += '</ul>'
    document.getElementById("list").innerHTML = htmlStr;
}
