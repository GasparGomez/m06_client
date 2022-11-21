const Buscador = Vue.component('buscador-peliculas', {
    data: function () {
        return {busqueda: 'cars', resultado: []}
    },
    template: `
    <div>
        <b-form-input v-model="busqueda" placeholder="Pon el titulo a buscar"></b-form-input>
        <b-button @click="buscar" variant="success">Buscar</b-button>
        <b-row>
            <b-col md="3" v-for="peli in resultado">     
                <card-pelicula :datos=peli>
                
                    <b-button class="button-blue" @click="buscarInformacion(peli.imdbID)">Mas información</b-button>                
                    <b-button class="button-blue" pill @click="afegirPelicula(peli)" variant="outline-dark">Afegir</b-button>
                
                </card-pelicula>
            </b-col>
        </b-row>
        
    </div>`,
    methods: {
        afegirPelicula: function (peli) {
            let datosEnvio = new FormData();
            datosEnvio.append("Title", peli.Title);
            datosEnvio.append("Poster", peli.Poster);
            datosEnvio.append("imdbID", peli.imdbID);

            url = 'http://apisgaspar.alumnes.inspedralbes.cat/php-crud-api.php/records/PELICULA';
            fetch(url, {
                method: 'POST',
                body: datosEnvio
            })
        },
        buscarInformacion: function (id) {
            fetch("https://www.omdbapi.com/?apikey=2f34fcfe&i=" + id).then(response => response.json()).then(data => {
                Swal.fire({title: data.Title, text: data.Plot})
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
    data: function () {
        return {pelicules: []}
    },
    template: `
    <b-row>
        <b-col md="3" v-for="peli in pelicules">     
        <card-pelicula :datos=peli>
            <b-button class="button-red" pill @click="borrarPelicula(peli.id)" variant="outline-dark">Borrar</b-button>
        </card-pelicula>
        </b-col>
    </b-row>
    `,
    mounted: function () {
        url = 'http://apisgaspar.alumnes.inspedralbes.cat/php-crud-api.php/records/PELICULA';
        fetch(url).then((response) => response.json()).then((data) => {
            this.pelicules = data.records;
            // console.log(data.records);
        });
    },
    methods: {
        borrarPelicula: function (id) {
            fetch('http://apisgaspar.alumnes.inspedralbes.cat/php-crud-api.php/records/PELICULA/' + id, {method: 'DELETE'}).then((response) => response.json()).then((data) => { // this.peliculas.splice(pos, 1)
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
            isloading: false
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
                    Swal.fire({
                        icon: 'error',
                        title: 'Login incorrecte',
                        text: 'Torna a intentar-ho!',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
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
        <br>
        <slot></slot>
    </div>
    </b-card>`,
    methods: {
        enviarDades: function () {}
    }
})

// =============== Routes ===============
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
