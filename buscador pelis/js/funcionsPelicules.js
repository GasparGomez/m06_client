Vue.component('buscador-peliculas', {
    data: function () {
        return {busqueda: 'cars', resultado: []}
    },
    template: `
    <div>
        <b-form-input v-model="busqueda" placeholder="Pon el titulo a buscar"></b-form-input>
        <b-button @click="buscar" variant="success">Buscar</b-button>
        <b-row>
            <b-col md="3" v-for="peli in resultado">     
                <card-pelicula :datos=peli></card-pelicula>
            </b-col>
        </b-row>
    </div>`,
    methods: {
        buscar: function () {
            fetch('http://www.omdbapi.com/?i=tt3896198&apikey=2f34fcfe&s=' + this.busqueda).then((response) => response.json()).then(data => {
                this.resultado = data.Search;
            });
        }
    }

})

Vue.component('card-pelicula', {
    props: ['datos'],
    template: `
    <b-card border-variant="secondary" :header="datos.Title" header-border-variant="secondary" align="center">
    <div>
        <b-img thumbnail fluid :src="datos.Poster" :alt="datos.Title"></b-img>
        <b-button @click="buscarInfo" variant="outline-dark">Mes informacio</b-button>
    </div>
    </b-card>`,
    methods: {
        buscarInfo : function() {
            
        }
    }
})

let app = new Vue({el: '#app'});
