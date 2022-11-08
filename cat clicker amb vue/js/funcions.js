document.addEventListener("DOMContentLoaded", function () {
    var app = new Vue({
        el: '#appGatos',
        data: {
            gatoActivo: 0,
            gatos: [
                {
                    name: "Ismael",
                    content: "gato ismael gato ismael",
                    image: "img/floppa.jpg",
                    nclicks: 0
                },
                {
                    name: "Oscar",
                    content: "ole el oscar",
                    image: "img/oscar.png",
                    nclicks: 0
                },
                {
                    name: "Fabian",
                    content: "fabian mangui :)",
                    image: "img/fabian.jpg",
                    nclicks: 0
                },
                {
                    name: "Gomi",
                    content: "mapache",
                    image: "img/gomielmapache.jpg",
                    nclicks: 0
                }, {
                    name: "Marti",
                    content: "literalmente marti",
                    image: "img/bingus.jpg",
                    nclicks: 0
                }, {
                    name: "Jaime",
                    content: "literalmente jaime",
                    image: "img/jaime.jpg",
                    nclicks: 0
                }
            ]
        },

        methods: {
            hazAlgo: function (index) {
                this.gatoActivo = index
            },

            clickGato: function () {
                this.gatos[this.gatoActivo].nclicks ++
            }
        }
    })
});
