<script setup>
import Buscador from "./Buscador.vue";
import {onMounted } from "vue";
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

  <!-- <div>
    <div class="cards container-lg">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="r in primeros4"  class="col">
          <RouterLink class=" router-link" :to="`/recipe/detail/${r.id}`">
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
  </div> -->

</template>

<style scoped>
</style>