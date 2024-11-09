<script setup>
import Buscador from "./Buscador.vue";
import {onBeforeMount, computed, ref } from "vue";
import { useCookItStore } from "../store/cookItStore.js";

const cookItStore = useCookItStore()
const recipes = ref([])

const getRecipes = async () => {
  const data = await fetch('https://www.mockachino.com/770e676d-e81c-40/recetas')

  const r = await data.json()

  recipes.value = await r.recipes;
  cookItStore.setAllRecipes(recipes.value)
}

onBeforeMount(() => {
  getRecipes();
});

</script>

<template>

  <div class="search">
    <Buscador></Buscador>
  </div>

  

</template>

<style scoped>
.router-link {
  all: unset;
  cursor: pointer;
}
</style>