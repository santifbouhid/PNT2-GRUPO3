<script setup>
import {onBeforeMount, onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const recipeId = ref(route.params.id);
const recetaAMostrar = ref()
const recetaJSONGif = ref()

// console.log(recipeId.value);



const traerPorID = async(id) => {
  try{
    let recetaBuscada = await fetch(`https://cookit-api.up.railway.app/recipes/recipes/${id}`)
    let recetaJSON = await recetaBuscada.json()
    recetaAMostrar.value = recetaJSON.recipe;
    recetaJSONGif.value = recetaJSON.gif
    // await console.log(recetaAMostrar.value.name)
  }catch {
    console.error("Error al mostrar la receta:", error);
  }

}


onBeforeMount(() => {
   traerPorID(recipeId.value);
});

</script>

<template>

    <div class="container-lg text-center contenedor" >
        <h1>{{ recetaAMostrar.name }}</h1>
        <!----- IMAGEN / INGREDIENTES / FICHA TÉCNICA ----->
        <div class="row my-5 px-5 align-items-center" id="objetos">
            <!-- IMAGEN -->
            <div class="col-lg-6 col-md-12 col-sm-12 pb-3" >
                <img v-if="recetaAMostrar.image == null" src='../assets/foto-stock.jpg' class="card-img-top" :alt="recetaAMostrar.name">
                <img v-else :src="`${recetaAMostrar.image}`" class="img-fluid" :alt="`${recetaAMostrar.name}`"  >
            </div>
            <!----- INGREDIENTES / FICHA TÉCNICA ----->
            <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="row">
                    <!-- INGREDIENTES -->
                    <div class="col" id="ing">
                        <div class="card card-ing-ft">
                            <div class="card-body">
                                <h5 class="card-title">INGREDIENTES</h5>
                                <p class="card-text" v-for="i in recetaAMostrar.ingredients">
                                  - {{ i }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- FICHA TÉCNICA -->
                    <div class="col" id="ficha">
                        <div class="card card-ing-ft">
                        <div class="card-body">
                            <h5 class="card-title">FICHA TECNICA</h5>
                            <p class="card-text" >
                                <br>
                                Minutos de preparación: {{ recetaAMostrar.prepTimeMinutes }}
                                <br>
                                Tiempo de cocción: {{ recetaAMostrar.cookTimeMinutes }}
                                <br>
                                Cantidad de porciones: {{ recetaAMostrar.servings}}
                                <br>
                                Dificultad: {{ recetaAMostrar.difficulty }}
                                <br>
                                Cocina: {{ recetaAMostrar.cuisine }}
                                <br>
                                Calorias por porción: {{ recetaAMostrar.caloriesPerServing }}
                            </p>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </div>
        <div class="row g-2">
            <div class="col" id="instrucciones">
                <h2>INSTRUCCIONES</h2>
                <p v-for="inst in recetaAMostrar.instructions">
                    {{ inst }}
                </p>
            </div>
          <div class="col" id="gif">

            <img :src="`${recetaJSONGif}`" class="gif">

          </div>
        </div>
    </div>

</template>

<style scoped>

.card-ing-ft{
    width: auto;
    
}

#instrucciones{
  margin-bottom: 80px;
}

.img-fluid {
  height: 450px;
  border-radius: 10%;
}

#ficha {
  padding: 40px;

}

#ing {
  padding: 40px;
}

.gif {
  border-radius: 5%;
}

</style>