<script setup>
import {ref, onMounted, onBeforeMount, computed} from 'vue';
import { useCookItStore } from '../store/cookItStore.js';

const cookItStore = useCookItStore()
const usuario = ref()

console.log(usuario.name)

onBeforeMount(() => {
  usuario.value = cookItStore.getUserLogged()
})
</script>

<template>

  <div class="text-center mb-4">
    <div class="rounded-circle bg-light d-inline-flex align-items-center justify-content-center" style="width: 100px; height: 100px; font-size: 2em;">
      {{ usuario.nombre.charAt(0).toUpperCase() }}{{ usuario.apellido.charAt(0).toUpperCase() }}
    </div>
    <p class="text-muted">@{{usuario.username}}</p>
  </div>
  <h3>Editar perfil</h3>
  <form>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre(s)</label>
      <input type="text" class="form-control" id="nombre" :value="`${usuario.nombre}`">
    </div>
    <div class="mb-3">
      <label for="apellidos" class="form-label">Apellidos</label>
      <input type="text" class="form-control" id="apellidos" placeholder="Apellidos" :value="`${usuario.apellido}`">
    </div>
    <div class="mb-3">
      <label for="informacion" class="form-label">Información</label>
      <textarea class="form-control" id="informacion" rows="2" placeholder="Cuenta tu historia" :value="`${usuario.informacion}`"></textarea>
    </div>
    <div class="mb-3">
      <label for="pronombres" class="form-label">Pronombres</label>
      <select class="form-select" id="pronombres" :value="`${usuario.pronombre}`">
        <option selected>Agrega tus pronombres</option>
        <option value="he/him">Él</option>
        <option value="she/her">Ella</option>
        <option value="they/them">Elle</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="usuario" class="form-label">Nombre de usuario</label>
      <input type="text" class="form-control" id="usuario" :value="`${usuario.username}`">
    </div>
    <!--<button id="btnGuardar" type="submit" class="btn btn-primary">Guardar</button>
    <button id="btnRestab" type="reset" class="btn btn-secondary">Restablecer</button>-->
  </form>

</template>

<style scoped>

</style>