const Buscador = Vue.component('buscador-peliculas', {
    data: function () {
        return {busqueda: 'cars', resultado: [], infoDetallada: false}
    },
    template: `
    <div>
        <b-form-input v-model="busqueda" placeholder="Pon el titulo a buscar"></b-form-input>
        <b-button @click="buscar" variant="success">Buscar</b-button>
        <info-detallada v-show="infoDetallada.mostrar" :info="infoDetallada"></info-detallada>
        <b-row>
            <b-col md="3" v-for="peli in resultado">     
                <card-pelicula @evtMasInformacion='buscarInformacion' :datos=peli></card-pelicula>
            </b-col>
        </b-row>
        
    </div>`,
    methods: {
        buscarInformacion: function (id) {
            this.infoDetallada.mostrar = true;
            fetch("https://www.omdbapi.com/?apikey=2f34fcfe&i=" + id)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.infoDetallada.datos = data;
                });
        },
        buscar: function () {
            fetch('http://www.omdbapi.com/?i=tt3896198&apikey=2f34fcfe&s=' + this.busqueda).then((response) => response.json()).then(data => {
                this.resultado = data.Search;
            });
        }
    }

})

const Admin = Vue.component('zona-privada', {
    data: function(){
        return {
            pelicules: []
        }
    },
    template: `
    <h3>zona privada</h3>
    `
})

Vue.component('info-detallada', {
    props: ['info'],
    template: `<div>
        <h3>Información detallada: </h3>
        {{info.Plot}}
        <b-button @click="info.mostrar=false">Cerrar</b-button>
    </div>`,
});

Vue.component('login', {
    data: function () {
        return {
            form: {
                usuari: '',
                contrasenya: ''
            },
            logged: false,
            imgSrc: '',
            nombre: '',
            isloading: false // default value
        }
    },
    template: `
    <div>
        <div v-show="!logged" id="formUsuari">
            <b-form-input v-model="form.usuari" placeholder="Username" required></b-form-input>
            <b-form-input v-model="form.contrasenya" placeholder="Password" required></b-form-input>
            <b-button @click="submitLogin" variant="success">Log in <b-spinner v-show="isloading" small></b-spinner></b-button>
        </div>
        <div v-show="logged">
            Bienvenido {{nombre}}
            <b-img thumbnail fluid :src="imgSrc" :alt="form.usuari" class="imatgeUsuari"></b-img>
            <b-button @click="logout" variant="success">Log out</b-button>
        </div>
    </div>`,
    methods: {
        submitLogin: function () {
            this.isloading = true;
            fetch('http://alvaro.alumnes.inspedralbes.cat/loginGET.php?username=' + this.form.usuari + '&pwd=' + this.form.contrasenya)
            .then((response) => response.json())
            .then(data => {
                if (data.exito) {
                    this.logged = true;
                    this.imgSrc = data.imagen;
                    this.nombre = data.nombre;
                } else {
                    alert("Login incorrecte");
                }
                this.isloading = false;
            });
        },
        logout: function () {
            this.logged = false;
            this.form.usuari = '';
            this.form.contrasenya = '';
        }
    }
})

Vue.component('card-pelicula', {
    props: ['datos'],
    template: `
    <b-card border-variant="secondary" :header="datos.Title" header-border-variant="secondary" align="center">
    <div>
        <b-img thumbnail fluid :src="datos.Poster" :alt="datos.Title"></b-img>
        <b-button class="button-orange" @click="$emit('evtMasInformacion', datos.imdbID)">Mas información</b-button>
        <b-button class="button-orange" pill @click="buscarInfo" variant="outline-dark">Afegir</b-button>
    </div>
    </b-card>`,
    methods: {
        buscarInfo: function () {},
        enviarDades: function() {
            
        }
    }
})

// 2. Define some routes
// Each route should map to a component.
const routes = [
    {
        path: '/',
        component: Buscador
    }, {
        path: '/admin',
        component: Admin
    },
]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
    routes // short for `routes: routes`
})

let app = new Vue({el: '#app', router});
