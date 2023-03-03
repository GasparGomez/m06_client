let tablero = []
const probabildadMina = 30;
const N = 10;
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

function renderTablero() {
    let htmlStr = ""
    let id = 0;
    for (let y = 0; y < N; y++) {
        if (y > 0) {
            htmlStr += "<tr>"
        }
        for (let x = 0; x < N; x++) {
            htmlStr += "<td>"
            switch (tablero[y][x]) {
                case 0:
                    htmlStr += `<img src="img/open0.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
                case 1:
                    htmlStr += `<img src="img/open1.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
                case 2:
                    htmlStr += `<img src="img/open2.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
                case 3:
                    htmlStr += `<img src="img/open3.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
                case 4:
                    htmlStr += `<img src="img/open4.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
                case 5:
                    htmlStr += `<img src="img/open5.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
                case 6:
                    htmlStr += `<img src="img/open6.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
                case 7:
                    htmlStr += `<img src="img/open7.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
                case 8:
                    htmlStr += `<img src="img/open8.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
                case -5:
                    htmlStr += `<img src="img/mina.png" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;

                default:
                    htmlStr += `<img src="img/square.gif" width="25px" height="25px" id="${[y, x].toString()}"/>`
                    break;
            }

            htmlStr += "</td>"
            id++;
        }
        if (y > 0) {
            htmlStr += "</tr>"
        }

    }
    // console.log(tablero.toString());
    tableroId.innerHTML = htmlStr
}

renderTablero()
document.getElementById("tablero").addEventListener("click", (e) => {
    if (e.target.id != "" && e.target != tableroId) {
        let posicio = e.target.id.split(",")
        console.log(posicio);
        if (tablero[posicio[0]][posicio[1]] == -9) {
            e.target.setAttribute("src", "img/mina.png")
            tablero[posicio[0]][posicio[1]] = -5
        }
        let mines = contarMines(posicio);
        tablero[posicio[0]][posicio[1]] = mines
        console.log(mines);
        renderTablero()
    }

})

function contarMines(pos) {
    let contMines = 0;

    let [y, x] = pos

    for (let i = y - 1; i <= y + 1; i++) {
        for (let j = x - 1; j <= x + 1; j++) {
            if (i >= 0 && i < N && j >= 0 && j < N) {
                if (tablero[i][j] == -9 || tablero[i][j] == -5) {
                    contMines++;
                    console.log(contMines, i, j);
                }
            }
        }
    }


    return contMines
}