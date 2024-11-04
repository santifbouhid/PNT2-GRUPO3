<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKitchenSet, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useCookItStore } from '../store/cookItStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router'


const router = useRouter()
library.add([faKitchenSet, faUser, faArrowRightFromBracket])

const cookItStore = useCookItStore()
const logged = computed( ()=>{
  return  cookItStore.isLogged();  
})

// const toLogin = () => {
//   router.push("/login");
// }

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
          <li class="nav-item" v-show="logged">
            <a class="nav-link" href="#">Mis Recetas</a>
          </li>

        </ul>
      </div>
      <div>
        <!---- DROPDOWN USER ---->
        <div class="dropdown" v-show="logged">
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
        <!---- INGRESAR ---->
        <div v-show="!logged">
          <ul class="navbar-nav">
            <!-- INGRESAR -->
          <li class="nav-item">
            <RouterLink class="nav-link router-link" to="/login">
              Ingresar
            </RouterLink>
          </li>
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
.router-link{
  all: unset;
  cursor: pointer;
}


</style>