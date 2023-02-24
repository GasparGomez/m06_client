let tablero = []
const probabildadMina = 30;
let tableroId = document.getElementById("tablero")


for (let i = 0; i < 10; i++) {
    tablero[i] = [];
    for (let j = 0; j < 10; j++) {
        if (getRandomInt(100) <= probabildadMina) {
            tablero[i][j] = -9;
        } else {
            tablero[i][j] = -8;
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function renderTablero(tablero) {
    let htmlStr = ""
    let id = 0;
    for (let i = 0; i < 10; i++) {
        if (i > 0) {
            htmlStr += "<tr>"
        }
        for (let j = 0; j < 10; j++) {
            htmlStr += "<td>"
            htmlStr += `<img src="img/busca.png" width="25px" id=${id}/>`
            htmlStr += "</td>"
            id++;
        }
        if (i > 0) {
            htmlStr += "</tr>"
        }

    }
    console.log(htmlStr);
    tableroId.innerHTML = htmlStr
}

renderTablero(tablero)