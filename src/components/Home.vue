<script setup>
import Buscador from "./Buscador.vue";
import {onBeforeMount, computed, ref, onMounted } from "vue";
import { useCookItStore } from "../store/cookItStore.js";
import GroqIA from "./GroqIA.vue"
// const cookItStore = useCookItStore()
// const recipes = ref([])

// const getRecipes = async () => {
//   const allRecipes = await cookItStore.getAllRecipes()
//   console.log(allRecipes)
// }
// onMounted(() => {
//   getRecipes()
// })
onMounted(() => {
})

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