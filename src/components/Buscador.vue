<script setup>

</script>

<template>

    <div class="input-group">
      <input type="text" class="form-control" aria-label="Text input with segmented dropdown button" placeholder="Ingresa una receta">
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


</template>

<style scoped>

</style>