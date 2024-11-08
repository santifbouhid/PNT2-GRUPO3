<script setup>
import Buscador from "./Buscador.vue";
import {onBeforeMount, computed, ref } from "vue";

const recipes = ref([])


const getRecipes = async () => {
  const data = await fetch('https://www.mockachino.com/770e676d-e81c-40/recetas')

  const r = await data.json()

  recipes.value = await r.recipes;

}


const primeros4 = computed(() => {
  
  return recipes.value.slice(0, 4).filter(recipe => recipe);

})

onBeforeMount(() => {
  getRecipes();
});

</script>

<template>

  <div class="search">
    <Buscador></Buscador>
  </div>

  <div>
    <div class="cards container-lg">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="r in primeros4"  class="col">
          <RouterLink class=" router-link" to="/recipe/detail">
            <div class="card">
              <img :src="r.image" class="card-img-top" :alt="r.name">
              <div class="card-body">
                <h5 class="card-title">{{r.name}}</h5>
                <p class="card-text">{{ `${r.difficulty}, ${r.prepTimeMinutes} minutos, ${r.servings} porciones`}}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.router-link {
  all: unset;
  cursor: pointer;
}
</style>