<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCookItStore } from '../store/cookItStore.js';

const cookItStore = useCookItStore()
const sinBusqueda = ref(true)
const etiquetas = ref(["Pizza", "Asiática", "Postre", "Ensalada", "Cocktail"])
const resultados = ref([])
const allRecipes = cookItStore.getAllRecipes()

const setPrimerResultado = () => {
  if (sinBusqueda.value == true){
    resultados.value = primeros4(allRecipes)
  }
}

const buscarPorEtiquetas = (value) => {
  sinBusqueda.value = false;
  const filtrados = []
    allRecipes.forEach(r => {
      if(r.tags.includes(value)){
        filtrados.push(r)
      }
    })
    resultados.value = filtrados
}


const primeros4 = (array) => {
  return array.slice(0, 4).filter(recipe => recipe);
}

const eliminarFiltros = () => {
  resultados.value = allRecipes
}

onMounted(() => {
  setPrimerResultado()
})

</script>

<template>

  <div class="container-md">
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
        placeholder="Podes buscar por ingredientes, nombre o etiqueta">
      <button type="button" class="btn btn-outline-secondary">Buscar</button>
      <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Sin T.A.C.C.</a></li>
        <li><a class="dropdown-item" href="#">Vegetariano</a></li>
        <li><a class="dropdown-item" href="#">Vegano</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Desestimar Restricciones</a></li>
      </ul>
    </div>
    <div class="etiquetas">
      <span class="badge rounded-pill text-bg-dark px-4 etiqueta" v-for="tag in etiquetas" :value="tag"
        @click="buscarPorEtiquetas(tag)">{{tag}}</span>
      <span class="badge rounded-pill text-bg-danger px-4 etiqueta" @click="eliminarFiltros()">Eliminar filtros</span>
    </div>
  </div>

  <div class="resultados">
    <div>
      <div class="cards container-lg">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div v-for="r in resultados" class="col">
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
  </div>

</template>

<style scoped>
.etiqueta{
  margin: 15px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
}
</style>