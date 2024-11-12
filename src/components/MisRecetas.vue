<script setup>
// https://mockapi.io/projects/67311e517aaf2a9aff0fe0ea
import { onBeforeMount, ref } from 'vue';
import { useCookItStore } from '../store/cookItStore';
import { useRecetasModificadasStore } from '../store/RecetasModificadasStore';
import axios from 'axios';

const cookItStore = useCookItStore()
const recetasModificadasStore = useRecetasModificadasStore()
const misRecetas = ref([])
const recetasOriginales = ref([]);


// LA IDEA ES MODIFICAR ESTE METODO POR EL QUE USEMOS -- al no pasar por la home no se ejecuta el metodo
const getRecipesHome = async () => {
  let r;
  const data = await axios.get('https://www.mockachino.com/770e676d-e81c-40/recetas').then(resp => r = resp.data)
 
  return r.recipes;

}

const getAllRecipes = async () => {
 
  const userFavoritos = await cookItStore.getUserLogged().favoritos;
  let recetas = [];

  if (recetasOriginales.value.length === 0){
    recetasOriginales.value = await getRecipesHome()
  }
  
  
  for (let i = 0; i < userFavoritos.length; i++) {
    const r = userFavoritos[i];
    if (r.original === true){
      let recetaEncontrada = recetasOriginales.value.find(a => a.id === r.id)
      recetas.push(recetaEncontrada);
      
      
    } else{
      let recetaEncontrada = await recetasModificadasStore.getAllRecipes().then(e=>e.find(a => a.id === r.id));
      recetas.push(recetaEncontrada.receta);
    }
    
  }  
  misRecetas.value = recetas;

}





onBeforeMount(() => {
  getAllRecipes();
});

</script>

<template>
  <div class="container-md" >
    <h1 class="text-center">Mis Recetas</h1>

    <!-- RECETAS -->
     
    <div class="cards container-lg">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="r in misRecetas" class="col">
          <RouterLink class=" router-link" :to="`/recipe/detail/${r.id}`">
            <div class="card">
              <img :src="r.image" class="card-img-top" :alt="r.name">
              <div class="card-body">
                <h5 class="card-title">{{ r.name }}</h5>
                <p class="card-text">{{ `${r.difficulty}, ${r.prepTimeMinutes} minutos, ${r.servings} porciones` }}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>