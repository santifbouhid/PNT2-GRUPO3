<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKitchenSet, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faKitchenSet)
library.add(faUser)

</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><font-awesome-icon icon="fa-solid fa-kitchen-set" /></a>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Buscar</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mis Recetas</a>
        </li>
      </ul>
    </div>
    <div>
      <font-awesome-icon icon="fa-solid fa-user" />
    </div>
  </div>
</nav>
</template>

<style scoped>
</style>