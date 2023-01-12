Vue.component("buscador-ctails", {
  data: function () {
    return { lletraBusqueda: "", resultado: [] };
  },
  template: `
      <div>
        <b-button-group>
            <b-button v-for="letra in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'W']" @click="buscar(letra)" variant="success">{{letra}}</b-button>
        </b-button-group>
        <b-row>
            <b-col md="3" v-for="beguda in resultado.drinks">     
                <card-begudes :datos=beguda></card-begudes>
            </b-col>
        </b-row>
      </div>`,
  methods: {
    buscar: function (lletra) {
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + lletra
      )
        .then((response) => response.json())
        .then((data) => {
          this.resultado = data;
          console.log(data);
        });
    },
  },
});

Vue.component("card-begudes", {
  props: ["datos"],
  template: `
      <b-card border-variant="secondary" :header="datos.strDrink" header-border-variant="secondary" align="center">
      <div>
        <b-img thumbnail fluid :src="datos.strDrinkThumb" :alt="datos.strDrink"></b-img>
        <br>
        <b-list-group flush v-for="item in [datos.strIngredient1, datos.strIngredient2, datos.strIngredient3, datos.strIngredient4, datos.strIngredient5, datos.strIngredient6, datos.strIngredient7, datos.strIngredient8, datos.strIngredient9, datos.strIngredient10, datos.strIngredient11, datos.strIngredient12, datos.strIngredient13, datos.strIngredient14, datos.strIngredient15]">
            <b-list-group-item v-show="item != null">{{item}}</b-list-group-item>
        </b-list-group>
        <b-card-text>
            {{datos.strInstructions}}
        </b-card-text>
      </div>
      </b-card>`,
  methods: {
    enviarDades: function () {},
  },
});

let app = new Vue({
  el: "#app",
});
