Vue.component('pelicula', {
    props: ['datos'],
    template: `<div>
        <h3>{{datos.Title}}</h3>
        <b-img thumbnail fluid :src="datos.Poster" :alt="datos.Title"></b-img>        
    </div>`,
})

Vue.component('buscador-peliculas', {
    data: function() {
        return {
            busqueda: '',
            resultado: []
        }
    },
    template: ` 
    <div>
    <b-form-input v-model="busqueda" placeholder="Pon el titulo a buscar"></b-form-input>
    <b-button @click="buscar" variant="success">Buscar</b-button>
    <b-row>
        <b-col md="3" v-for="peli in resultado">            
            <pelicula :datos=peli></pelicula>
        </b-col>
    </b-row>
    
    </div>`,
    methods: {
        buscar: function() {
            fetch("https://www.omdbapi.com/?apikey=19f8a30e&s=" + this.busqueda)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.resultado = data.Search;
                });
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {

    },


});