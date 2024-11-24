<script setup>
// https://mockapi.io/projects/67311e517aaf2a9aff0fe0ea
import { onBeforeMount, ref, computed } from 'vue';
import { useCookItStore } from '../store/cookItStore';
import { usersCookITAPI } from '../store/usersStore.js';
import { useRecetasModificadasStore } from '../store/RecetasModificadasStore.js';
import { useRecetasStore } from '../store/recetasStore.js';
import axios from 'axios';

const cookItStore = useCookItStore()
const usersStore = usersCookITAPI()
const recetasStore = useRecetasStore()
const recetasModificadasStore = useRecetasModificadasStore()

const misRecetas = ref([])

const getMisRecetas = computed(() => misRecetas.value);

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
  console.log('USER ', user);
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
      recetaEncontrada !== undefined ? recetas.push({ ...recetaEncontrada, fav: true , idRecetaFavorita:fav._id}) : null;
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
    // `https://cookit-api.up.railway.app/update/removeRecetaFavorita/${idUser}`
    axios.patch(`http://localhost:8080/users/update/removeRecetaFavorita/${idUser}`, {
      idRecetaFavorita: misRecetas.value[index].idRecetaFavorita 
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        console.log('Receta eliminada de favoritos', response);
      })
      .catch(error => {
        console.error('Error en la eliminación de receta de favoritos', error);
      });

      // console.log('ANTES',misRecetas.value);
      // misRecetas.value.splice(index, 1)
      // console.log('DESPUES',misRecetas.value);
      

    // try {
    // const response = await fetch(`http://localhost:8080/users/update/removeRecetaFavorita/${idUser}`, {
    //   method: 'PATCH', // Especifica el método HTTP
    //   headers: {
    //     'Content-Type': 'application/json' // Indica el tipo de contenido
    //   },
    //   body: JSON.stringify({ idRecetaFavorita: misRecetas.value[index].idRecetaFavorita }) // Convierte el cuerpo en formato JSON
    // });

  //   if (!response.ok) {
  //     // Manejo de errores HTTP
  //     throw new Error(`Error HTTP: ${response.status}`);
  //   }

  //   const data = await response.json(); // Obtén la respuesta en formato JSON
  //   console.log('Receta eliminada de favoritos', data);
  // } catch (error) {
  //   // Manejo de errores de red u otros
  //   console.error('Error en la eliminación de receta de favoritos', error);
  // }

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
              <img :src="r.image" class="card-img-top" :alt="r.name">
              <div class="card-body">
                <h5 class="card-title">{{ r.name }}</h5>
                <p class="card-text">{{ `${r.difficulty}, ${r.prepTimeMinutes} minutos, ${r.servings} porciones` }}</p>
              </div>
              <div class="contenedor_boton_fav" @click.stop.prevent="fav(r._id)">
                <font-awesome-icon v-if="r.fav === false" :icon="['far', 'heart']" size="xl" />
                <font-awesome-icon v-else="r.fav===true" :icon="['fas', 'heart']" size="xl" />
              </div>
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
</style>