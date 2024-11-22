<script setup>

</script>

<template>
  <h3>Administración de la cuenta</h3>
  <form>

    <div class="mb-3">
      <!-- RESTRICCIONES -->
      <div class="mb-3">
        <label for="restricciones" class="form-label">Restricciones</label>
      </div>


      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
        <label class="btn btn-outline-secondary" for="btncheck1">SIN TACC</label>

        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
        <label class="btn btn-outline-secondary" for="btncheck2">Vegetariano</label>

        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
        <label class="btn btn-outline-secondary" for="btncheck3">Vegano</label>

        <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off">
        <label class="btn btn-outline-secondary" for="btncheck4">Sin Lactosa</label>

        <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off">
        <label class="btn btn-outline-secondary" for="btncheck5">Sibo</label>
      </div>
    </div>

    <div class="mb-3">
      <label for="nombre" class="form-label">Mail</label>
      <input type="text" class="form-control" id="mail" value="example@cookit.com">
    </div>

    <div class="mb-3">
      <label for="nombre" class="form-label">Contraseña</label>
    </div>
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="***********" aria-label="Recipient's username" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Mostrar</button>
    </div>

    <div class="mb-3">
      <label for="nombre" class="form-label">Celular</label>
    </div>
    <div class="row">
      <div class="input-group mb-3">

        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Pais</button>
        <select class="dropdown-menu" v-model="paisSeleccionado" size="10">
          <option v-for="(cod, index) in countries" :key="index" :value="cod.prefix">
            {{ cod.name }} ({{ cod.prefix }})
          </option>
        </select>

        <input type="text" class="form-control" placeholder="COD" aria-label="Text input with dropdown button " id="cod" @change="mostrarSeleccion" v-model="paisSeleccionado">
        <input type="text" class="form-control" id="num" placeholder="1122335873">
      </div>
    </div>

    <button id="btnGuardar" type="submit" class="btn btn-primary">Guardar</button>
  </form>
</template>

<style scoped>

</style>