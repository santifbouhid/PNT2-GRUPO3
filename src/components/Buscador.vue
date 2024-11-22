<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCookItStore } from '../store/cookItStore.js';
import GroqIA from './GroqIA.vue'

let recetas = []
const cookItStore = useCookItStore()
const sinBusqueda = ref(true)
const etiquetas = ref(["Italiana", "Asiática", "Postre", "Ensalada", "Cóctel"])
const resultados = ref([])
const busqueda = ref('')
const restriccion = ref('')
const allRecipes = async() => {
  recetas = await cookItStore.getAllRecipes()
}

allRecipes()

const setPrimerResultado = async () => {
  if (sinBusqueda.value == true){
    resultados.value = primeros4(recetas)
  }
}

const buscarPorEtiquetas = (etiqueta) => {
  sinBusqueda.value = false;
  const filtrados = []
  recetas.forEach(r => {
  if(r.tags.includes(etiqueta)){
    filtrados.push(r)
  }
  })
  if(restriccion.value != ''){
    let rest = filtrarPorRestriccion(filtrados)
    return rest
  }
  return filtrados
}

const mostrarResEtiquetas = (etiqueta) => {
  resultados.value = buscarPorEtiquetas(etiqueta)
}

const primeros4 = (array) => {
  return array.slice(0, 4).filter(recipe => recipe);
}

const eliminarFiltros = () => {
  resultados.value = recetas
}

const buscar = async () => {
   if (busqueda.value == '' && restriccion.value == ''){
    resultados.value = recetas
  } else if (busqueda.value === '' && restriccion.value != ''){
    resultados.value = await buscarPorRestriccion(restriccion.value)
  } else {
    let busqPorIng = await fetch(`https://cookit-api.up.railway.app/recipes/byIngredient/${busqueda.value}`)
    let resPorIng = await busqPorIng.json()
    let resPorNombre = recetas.filter(r => r.name.toLowerCase().includes(busqueda.value.toLowerCase()))
    let resPorTag = buscarPorEtiquetas(busqueda.value)
    let res = new Set([...resPorIng, ...resPorNombre, ...resPorTag])
    if(restriccion.value != ''){
      resultados.value = filtrarPorRestriccion(res)
    } else {
      resultados.value = res
    }
  }

}

const buscarPorRestriccion = async(restriccion) => {
  let busqPorRest = await fetch(`https://cookit-api.up.railway.app/recipes/byRestrictions/${restriccion}`)
  let resultados = await busqPorRest.json()
  return resultados;
}

const setRestriccion = (rest) =>{
  restriccion.value = rest;
}

const filtrarPorRestriccion = (array) =>{
  let filtradoRest = []
  array.forEach(r => {
    if (r.apto.includes(restriccion.value)) {
      filtradoRest.push(r)
    }
  })
  return filtradoRest;
}

const getRestriccion = computed(() => {
  return restriccion.value
})

const contador = computed(() => {
  return resultados.value.length
})

const convertir = async() => {
  GroqIA.getGroqChatCompletion('gluten free', recetas[0])
}

onMounted(() => {
  setPrimerResultado()
  convertir()
})

</script>

<template>

  <div class="container-md">
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
        placeholder="Podes buscar por ingredientes, nombre o etiqueta" v-model="busqueda">
        <span class="badge rounded-pill text-bg-success px-4 etiqueta" v-if="getRestriccion!=''">{{getRestriccion}}</span>
      <button type="button" class="btn btn-outline-secondary" @click="buscar()">Buscar</button>
      <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#" @click="setRestriccion('gf')">Sin T.A.C.C.</a></li>
        <li><a class="dropdown-item" href="#" @click="setRestriccion('veggie')">Vegetariano</a></li>
        <li><a class="dropdown-item" href="#" @click="setRestriccion('vegan')">Vegano</a></li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#" @click="setRestriccion('')">Desestimar Restricciones</a></li>
      </ul>
    </div>
    <div class="etiquetas">
      <span class="badge rounded-pill text-bg-dark px-4 etiqueta" v-for="tag in etiquetas" :value="tag"
        @click="mostrarResEtiquetas(tag)">{{tag}}</span>
      <span class="badge rounded-pill text-bg-danger px-4 etiqueta" @click="eliminarFiltros()">Eliminar filtros</span>
    </div>
  </div>

  <div class="resultados">
    <div>
      <div class="counter" v-if="contador > 0">{{ contador }} recetas encontradas</div>
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