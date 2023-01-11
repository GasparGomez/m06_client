<script>
export default {
    data() {
        return {
            form: {
                usuari: "",
                contrasenya: "",
            },
            logged: false,
            imgSrc: "",
            nombre: "",
            isloading: false,
        }
    },
    methods: {
        submitLogin() {
            this.isloading = true;
            fetch(
                "http://alvaro.alumnes.inspedralbes.cat/loginGET.php?username=" +
                this.form.usuari +
                "&pwd=" +
                this.form.contrasenya
            )
                .then((response) => response.json())
                .then((data) => {
                    if (data.exito) {
                        this.logged = true;
                        this.imgSrc = data.imagen;
                        this.nombre = data.nombre;
                    } else {
                        this.$swal({
                            icon: "error",
                            title: "Login incorrecte",
                            text: "Torna a intentar-ho!",
                            showClass: {
                                popup: "animate__animated animate__fadeInDown",
                            },
                            hideClass: {
                                popup: "animate__animated animate__fadeOutUp",
                            },
                        });
                    }
                    this.isloading = false;
                });
        },
        logout() {
            this.logged = false;
            this.form.usuari = "";
            this.form.contrasenya = "";
        },
    },
}
</script>

<template>
    <div>
        <div v-show="!logged" id="formUsuari">
            <input v-model="form.usuari" placeholder="Username" required />
            <input v-model="form.contrasenya" type="password" placeholder="Password" required />
            <button @click="submitLogin" variant="success">Log in</button>
        </div>
        <div v-show="logged">
            Bienvenido {{ nombre }}
            <img thumbnail fluid :src="imgSrc" :alt="form.usuari" class="imatgeUsuari" />
            <button @click="logout"  type="button" class="btn btn-primary">Log out</button>
        </div>
    </div>
</template>