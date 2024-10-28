<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKitchenSet, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

library.add([faKitchenSet, faUser, faArrowRightFromBracket])

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
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <font-awesome-icon icon="fa-solid fa-user" /> </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Mi Perfil</a></li>
            <li><a class="dropdown-item" href="#">Mis recetas</a></li>
            <li><a class="dropdown-item" href="#">Salir <font-awesome-icon
                  icon="fa-solid fa-arrow-right-from-bracket" /></a></li>
          </ul>
        </div>


      </div>
    </div>
  </nav>
</template>

<style scoped>
.dropdown-menu{
  left: -100px !important;
}
</style>