
let btn = document.getElementById("submit")
let resultado = document.getElementById("resultado")
let done = false;
let error = false;

function calcula() {
    done = false;
    document.getElementById("error").innerText = ""
    error = false;
    setTimeout(() => {
        if (!done) {
            timeoutError()
            error = true;
        }
    }, "2000")
    document.getElementById("resultado").innerText = ""
    document.getElementById("loading").style.display = "block"
    let datosEnvio = new FormData();
    datosEnvio.append("a", document.getElementById("number_a").value);
    datosEnvio.append("b", document.getElementById("number_b").value);
    datosEnvio.append("op", document.getElementById("options_select").value);

    let url = "http://alvaro.alumnes.inspedralbes.cat/calculadora.php"
    fetch(url, {
        method: "POST",
        body: datosEnvio,
    }).then((response) => response.json())
        .then((data) => {
            // console.log(data);
            if (!error) {
                done = true;
                document.getElementById("resultado").innerText = data
                document.getElementById("loading").style.display = "none"
            }

        });

    // console.log(datosEnvio);
}

function timeoutError() {
    document.getElementById("loading").style.display = "none"
    document.getElementById("error").innerText = "Timeout error"
}