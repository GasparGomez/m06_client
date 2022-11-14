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
            fetch('http://alvaro.alumnes.inspedralbes.cat/loginGET.php?username=' + this.form.usuari + '&pwd=' + this.form.contrasenya).then((response) => response.json()).then(data => {
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
        <b-button pill @click="buscarInfo" variant="outline-dark">Mes informacio</b-button>
    </div>
    </b-card>`,
    methods: {
        buscarInfo: function () {}
    }
})

// 1. Define route components.
const Home = {
    template: `<div>
    ruta home
</div>`
}
const About = {
    template: '<div>ruta about</div>'
}

// 2. Define some routes
// Each route should map to a component.
const routes = [
    {
        path: '/',
        component: Home
    }, {
        path: '/about',
        component: About
    },
]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
    routes // short for `routes: routes`
})

let app = new Vue({el: '#app', router});
