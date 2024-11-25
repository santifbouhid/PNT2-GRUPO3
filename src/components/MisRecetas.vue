<script setup>
// https://mockapi.io/projects/67311e517aaf2a9aff0fe0ea
import { onBeforeMount, ref, computed } from 'vue';
import { useCookItStore } from '../store/cookItStore';
import { usersCookITAPI } from '../store/usersStore.js';
import { useRecetasModificadasStore } from '../store/RecetasModificadasStore.js';
import axios from 'axios';
import CorazonFav from './CorazonFav.vue';

const cookItStore = useCookItStore()
const usersStore = usersCookITAPI()
const recetasModificadasStore = useRecetasModificadasStore()

const misRecetas = ref([])

const recetasOriginales = ref([])



// LA IDEA ES MODIFICAR ESTE METODO POR EL QUE USEMOS -- al no pasar por la home no se ejecuta el metodo

const getRecipesHome = async () => {
  let r;
  // const data = await axios.get('https://www.mockachino.com/770e676d-e81c-40/recetas').then(resp => r = resp.data)
  const data = await axios.get('https://cookit-api.up.railway.app/recipes/allRecipes').then(resp => r = resp.data)
  return r;
}


const getAllRecipes = async () => {
  // const userFavoritos = await cookItStore.getUserLogged().recetasFavoritas;
  const user = await usersStore.getUserActualizado()
  const userFavoritos = user.recetasFavoritas;


  let recetas = [];
  // Esto se hace porque necesito el array de las recetas originales. Lo mejor seria que este en recetasStore.
  if (recetasOriginales.value.length == 0) {
    recetasOriginales.value = await getRecipesHome()
    // recetasOriginales.value = await recetasStore.getAllRecipes();
  }

  for (let i = 0; i < userFavoritos.length; i++) {
    const fav = userFavoritos[i];
    if (fav.original === true) {
      let recetaEncontrada = recetasOriginales.value.find(a => a._id == fav.idRecetaOriginal)
      recetaEncontrada !== undefined ? recetas.push({ ...recetaEncontrada, fav: true, idRecetaFavorita: fav._id }) : null;
    } else {
      let recetaEncontrada = await recetasModificadasStore.getAllRecipes().then(e => e.find(a => a.id == fav.idRecetaOriginal));
      recetas.push({ ...recetaEncontrada.receta, fav: true });
    }

  }
  misRecetas.value = recetas;

}

const fav = async (_id) => {
  // MODIFICA EL BOTON
  const index = misRecetas.value.findIndex(re => re._id === _id)
  const r = misRecetas.value[index]
  r.fav === true ? r.fav = false : r.fav = true;
  misRecetas.value.splice(index, 1, r)
  // AGREGAR O QUITAR DE FAVORITOS
  const idUser = await cookItStore.getUserLogged()._id;
  console.log("idUser", idUser);
  if (r.fav === false) {
    const idRecetaFavorita = misRecetas.value[index].idRecetaFavorita;
    console.log(idRecetaFavorita);

    usersStore.removeRecetaFavorita(misRecetas.value[index].idRecetaFavorita)

  }

}

onBeforeMount(() => {
  getAllRecipes();
})

</script>

<template>
  <div class="container-md">
    <h1 class="text-center">Mis Recetas</h1>

    <!-- RECETAS -->

    <div class="cards container-lg">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="r in misRecetas" class="col"> <!-- algunos tienen id y otros _id -->
          <RouterLink class=" router-link" :to="`/recipe/detail/${r.id === undefined ? r._id : r.id}`">
            <div class="card">
                <img v-if="r.image == null" src='../assets/foto-stock.jpg' class="card-img-top" :alt="r.name">
                <img v-else :src=r.image class="card-img-top" :alt="r.name">
                <div class="card-body">
                  <div class="content">
                    <h5 class="card-title">{{ r.name }}</h5>
                    <p class="card-text">{{ `${r.difficulty}, ${r.prepTimeMinutes} minutos, ${r.servings} porciones` }}</p>
                  </div>
                  <div class="sellos">
                    <img v-if="r.apto.includes('gf')" src="https://img.freepik.com/premium-vector/vector-gluten-free-icon-vector-vector-icon-gluten-free-label_606304-747.jpg" alt="glutenfree">
                    <img class="veggie" v-if="r.apto.includes('veggie')" src="https://static.vecteezy.com/system/resources/previews/046/930/751/non_2x/vegetarian-icon-vegetarian-certified-label-eco-illustration-for-product-packaging-logo-sign-symbol-or-emblem-vector.jpg" alt="vegetariano">
                    <img v-if="r.apto.includes('vegan')" src="https://static.vecteezy.com/system/resources/previews/023/959/764/non_2x/vegan-icon-logo-isolated-on-white-background-vector.jpg" alt="vegano">
                  </div>
                </div>
                <CorazonFav :idReceta="r._id"/>
              <!-- <div class="contenedor_boton_fav" @click.stop.prevent="fav(r._id)">
                <font-awesome-icon v-if="r.fav === false" :icon="['far', 'heart']" size="xl" />
                <font-awesome-icon v-else="r.fav===true" :icon="['fas', 'heart']" size="xl" />
              </div> -->
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.contenedor_boton_fav {
  text-align: right;
}

.cards {
  padding-top: 25px !important;

.card-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

.sellos {
      display: flex;
      flex-direction: row;

img {
        width: auto;
        height: 40px;

}

      .veggie {
        padding: 5px;
        box-sizing: border-box;
      }
    }
  }
}
</style>