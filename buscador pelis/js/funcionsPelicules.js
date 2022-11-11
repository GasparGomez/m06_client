Vue.component('buscador-peliculas', {
    data: function () {
        return {busqueda: 'cars', resultado: []}
    },
    template: `
    <div>
        <b-form-input v-model="busqueda" placeholder="Pon el titulo a buscar"></b-form-input>
        <b-button @click="buscar" variant="success">Buscar</b-button>
        <cards-peliculas></cards-peliculas>
    </div>`,
    methods: {
        buscar: function () {
            fetch('http://www.omdbapi.com/?i=tt3896198&apikey=2f34fcfe&s=' + this.busqueda).then((response) => response.json()).then(data => {
                console.log(data);
                this.resultado = data.Search;
            });
        }
    }

})

Vue.component('cards-peliculas', {
    data: function () {},
    template: `
    <div>
        <ul>
            <li v-for="peli in resultado">
                {{peli.Title}}
            </li>
        </ul>
    </div>`,
    methods: {}
})

let app = new Vue({el: '#app'});
