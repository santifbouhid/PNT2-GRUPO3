<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue';
import { useCookItStore } from '../store/cookItStore.js';
import { pedirReceta } from '../services/cohereIA.service.js';
import { useRecetasStore } from '../store/recetasStore.js'

let recetas = []
const cookItStore = useCookItStore()
const recetasStore = useRecetasStore()
const sinBusqueda = ref(true)
const etiquetas = ref(["Italiana", "Asiática", "Postre", "Ensalada", "Cóctel"])
const resultados = ref([])
const busqueda = ref('')
const restriccion = ref([])
const checked = ref(false)
const user = ref(cookItStore.getUserLogged())

const allRecipes = async() => {
  recetas = await cookItStore.getAllRecipes()
}

allRecipes()

const logged = computed( ()=>{
  return  cookItStore.isLogged();  
})

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

const eliminarFiltros = () => {
  resultados.value = recetas
}

const buscar = async () => {
  if (busqueda.value == '' && restriccion.value.length === 0){
    resultados.value = recetas
  } else if (busqueda.value === '' && restriccion.value.length > 0){
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
  if (resultados.value.size === 0){
    console.log("hola")
    resultados.value = await buscarRecetaIA()
  }
}

const buscarRecetaIA = async() => {
  const prompt = restriccion.value.length === 0 ? `Necesito una receta de ${busqueda.value}` : `Necesito una receta de ${busqueda.value} que sea apto ${restriccion.value.join(' ')}`
  const respuesta = await pedirReceta(prompt)
  const respJson = JSON.parse(respuesta)
  respJson.image = null
  // console.log(respJson)
  const array = []
  const nuevaReceta = await recetasStore.guardarNuevaReceta(respJson)
  if(nuevaReceta.acknowledged === true){
    //actualizo la lista de todas las recetas
    await allRecipes()
    const traerReceta = await cookItStore.getRecipeById(nuevaReceta.insertedId)
    array.push(traerReceta.recipe)
  }
  return array
 }

const buscarPorRestriccion = async(rest) => {
  let resultados = []
  recetas.forEach(receta =>{
    if(rest.every(r => receta.apto.includes(r)) == true){
      resultados.push(receta)
    }
  })
  return resultados;
}

const setRestriccionMultiple = (rest) =>{
  rest.forEach(item => {
    restriccion.value.push(item);
  })
}

const setRestriccion = (rest) =>{
    restriccion.value.push(rest);
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

const getRestricciones = computed(() => {
  return restriccion.value.length
})

const contador = computed(() => {
  return resultados.value.length
})
const respetarRestriccion = async() => {
  if(checked.value == false){
    checked.value = true
    setRestriccionMultiple(cookItStore.getUserRestrictions())
  } else {
    checked.value = false
    restriccion.value.splice(0, restriccion.value.length)
  }
}



</script>

<template>

  <div class="container-md">
    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"
        placeholder="Podes buscar por ingredientes, nombre o etiqueta" v-model="busqueda" @keyup.enter="buscar()">
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
    <div class="respetarRest" v-if="logged">
      <input type="checkbox" name="respetarRestriccion" id="respetarRestriccion" v-model="checked" @click="respetarRestriccion()">Respetar las restricciones de mi perfil
    </div>
    <div class="etiquetas">
      <div class="pillEtiquetas">
        <span class="badge rounded-pill text-bg-dark px-4 etiqueta" v-for="tag in etiquetas" :value="tag"
          @click="mostrarResEtiquetas(tag)">{{tag}}</span>
        <span class="badge rounded-pill text-bg-danger px-4 etiqueta" @click="eliminarFiltros()">Eliminar filtros</span>
      </div>
      <div class="restriccion" v-if="getRestricciones > 0">
        <span v-for="rest in restriccion" class="badge rounded-pill text-bg-success px-4 etiqueta">{{ rest }}</span>
      </div>
    </div>
  </div>

  <div class="resultados">
    <div>
      <div class="counter" v-if="contador > 0">{{ contador }} recetas encontradas</div>
      <div class="cards container-lg">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div v-for="r in resultados" class="col">
            <RouterLink class=" router-link" :to="`/recipe/detail/${r._id}`">
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
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  

</template>

<style scoped>
.etiquetas{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  .etiqueta {
    margin: 15px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
  }
}

.respetarRest{
  padding: 2vh 1vw 0.5vh;
  #respetarRestriccion{
    margin-right: 0.5vw;
  }
}

.resultados {
  .counter {
    text-align: center;
    font-weight: 600;
    padding-top: 15px;
  }

  .cards{
    padding-top: 25px !important;
    .card-body{
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
}

</style>