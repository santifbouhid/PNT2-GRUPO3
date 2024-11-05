<script setup>
import { ref } from 'vue';

const etiquetas = ref(["Pizza", "Asiática", "Postre", "Ensalada", "Cocktail"])

const buscarPorEtiquetas = (value) => {
  console.log("buscar por etiqueta: ", value)
}

</script>

<template>

    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Podes buscar por ingredientes, nombre o etiqueta">
      <button type="button" class="btn btn-outline-secondary">Buscar</button>
      <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Sin T.A.C.C.</a></li>
        <li><a class="dropdown-item" href="#">Vegetariano</a></li>
        <li><a class="dropdown-item" href="#">Vegano</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Desestimar Restricciones</a></li>
      </ul>
    </div>
    <div class="etiquetas">
      <span class="badge rounded-pill text-bg-dark px-4 etiqueta" v-for="tag in etiquetas" :value="tag" @click="buscarPorEtiquetas(tag)">{{tag}}</span>
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