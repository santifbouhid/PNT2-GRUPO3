<script setup>

</script>

<template>

  <div class="text-center mb-4">
    <div class="rounded-circle bg-light d-inline-flex align-items-center justify-content-center" style="width: 100px; height: 100px; font-size: 2em;">
      AC
    </div>
    <p class="text-muted">@axelchaikh</p>
  </div>
  <h3>Editar perfil</h3>
  <form>
    <div class="mb-3">
      <label for="nombre" class="form-label">Nombre(s)</label>
      <input type="text" class="form-control" id="nombre" value="AC">
    </div>
    <div class="mb-3">
      <label for="apellidos" class="form-label">Apellidos</label>
      <input type="text" class="form-control" id="apellidos" placeholder="Apellidos">
    </div>
    <div class="mb-3">
      <label for="informacion" class="form-label">Información</label>
      <textarea class="form-control" id="informacion" rows="2" placeholder="Cuenta tu historia"></textarea>
    </div>
    <div class="mb-3">
      <label for="pronombres" class="form-label">Pronombres</label>
      <select class="form-select" id="pronombres">
        <option selected>Agrega tus pronombres</option>
        <option value="he/him">Él</option>
        <option value="she/her">Ella</option>
        <option value="they/them">Elle</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="usuario" class="form-label">Nombre de usuario</label>
      <input type="text" class="form-control" id="usuario" value="axelchaikh">
    </div>
    <button id="btnGuardar" type="submit" class="btn btn-primary">Guardar</button>
    <button id="btnRestab" type="reset" class="btn btn-secondary">Restablecer</button>
  </form>

</template>

<style scoped>

</style>