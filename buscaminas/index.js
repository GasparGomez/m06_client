let tablero = []
const probabildadMina = 30;
const N = 5;
let tableroId = document.getElementById("tablero")


for (let i = 0; i < N; i++) {
    tablero[i] = [];
    for (let j = 0; j < N; j++) {
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
    for (let y = 0; y < N; y++) {
        if (y > 0) {
            htmlStr += "<tr>"
        }
        for (let x = 0; x < N; x++) {
            htmlStr += "<td>"
            htmlStr += `<img src="img/square.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
            htmlStr += "</td>"
            id++;
        }
        if (y > 0) {
            htmlStr += "</tr>"
        }

    }
    console.log(tablero.toString());
    tableroId.innerHTML = htmlStr
}

renderTablero(tablero)
document.getElementById("tablero").addEventListener("click", (e) => {
    if (e.target.id != "" && e.target != tableroId) {
        let posicio = e.target.id.split(",")
        console.log(posicio);
        if (tablero[posicio[0]][posicio[1]] == -9) {
            e.target.setAttribute("src", "img/mina.png")
            tablero[posicio[0]][posicio[1]] = -5
        }
        let mines = contarMines(posicio);
    }

})

function contarMines(pos) {
    let contMines = 0;

    let [y, x] = pos

    if (y > 0) {
        if (x > 0 && tablero[y - 1][x - 1] == -9) {
            contMines++;
        }

        if (tablero[y - 1][x] == -9) {
            contMines++;
        }

        if (tablero[y - 1][x + 1] == -9) {
            contMines++;
        }
    }

    if (y < N) {
        if (x > 0 && tablero[y + 1][x - 1] == -9) {
            contMines++;
        }

        if (tablero[y + 1][x] == -9) {
            contMines++;
        }

        if (x < N && tablero[y + 1][x + 1] == -9) {
            contMines++;
        }
    }

    if (x > 0 && tablero[y][x - 1] == -9) {
        contMines++;
    }

    if (x < N && tablero[y][x + 1] == -9) {
        contMines++;
    }


    return contMines
}