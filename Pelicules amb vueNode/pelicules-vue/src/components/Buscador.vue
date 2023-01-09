<script setup>
import cardPelicula from './cardPelicula.vue'

function afegirPelicula(peli) {
    let datosEnvio = new FormData();
    datosEnvio.append("Title", peli.Title);
    datosEnvio.append("Poster", peli.Poster);
    datosEnvio.append("imdbID", peli.imdbID);

    url =
        "http://apisgaspar.alumnes.inspedralbes.cat/php-crud-api.php/records/PELICULA";
    fetch(url, {
        method: "POST",
        body: datosEnvio,
    });
    Swal.fire({
        title: "Pelicula añadida correctamente",
        icon: "success",
    });
}

function buscarInformacion(id) {
    fetch("https://www.omdbapi.com/?apikey=2f34fcfe&i=" + id)
        .then((response) => response.json())
        .then((data) => {
            Swal.fire({ title: data.Title, text: data.Plot });
        });
}

function buscar() {
    fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=2f34fcfe&s=" + this.busqueda
    )
        .then((response) => response.json())
        .then((data) => {
            this.resultado = data.Search;
        });
}
</script>

<template>
    <div>
        <input type="text" v-model="busqueda" placeholder="Pon el titulo a buscar">
        <button @click="buscar" variant="success">Buscar</button>
        <div md="3" v-for="peli in resultado">
            <cardPelicula :datos=peli>

                <button class="button-blue" @click="buscarInformacion(peli.imdbID)">Mas información</button>
                <button class="button-blue" pill @click="afegirPelicula(peli)" variant="outline-dark">Afegir</button>

            </cardPelicula>
        </div>
    </div>
</template>