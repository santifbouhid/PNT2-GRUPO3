<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useCookItStore } from '../store/cookItStore';
import { computed } from 'vue';
import { useRouter } from 'vue-router'


const router = useRouter()

const cookItStore = useCookItStore()
const logged = computed( ()=>{
  return  cookItStore.isLogged();  
})

const isAdmin = computed(() => {
  console.log('admin logged', cookItStore.isAdmin())
  return cookItStore.isAdmin()
})

const logout = () => {
  cookItStore.logInUser(false);
  router.push("/");
}

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid px-5">
      <a class="navbar-brand" href="#">
        <RouterLink class="router-link" to="/">
          <font-awesome-icon icon="fa-solid fa-kitchen-set" class="icon" />
        </RouterLink>
      </a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="router-link" to="/">
              <a class="nav-link" href="#">Buscar</a>
            </RouterLink>
          </li>
          <li class="nav-item" v-show="logged">
            <RouterLink class="router-link nav-link " to="/misrecetas">
              Mis Recetas
            </RouterLink>
          </li>

        </ul>
      </div>
      <div>
        <!---- DROPDOWN USER ---->
        <div class="dropdown" v-show="logged">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <font-awesome-icon icon="fa-solid fa-user dropdown-icon" /> </a>
          <ul class="dropdown-menu">
            <RouterLink to="/perfil">
              <li><a class="dropdown-item" href="#">Mi Perfil</a></li>
            </RouterLink>
            <RouterLink class="router-link nav-link " to="/misrecetas">
              <li><a class="dropdown-item" href="#">Mis recetas</a></li>
            </RouterLink>
            <RouterLink class="router-link nav-link " to="/reporte">
              <li v-if="logged && isAdmin"><a class="dropdown-item" href="#">Reporte</a></li>
            </RouterLink>
            <li><a class="dropdown-item" href="#" @click="logout()">Salir <font-awesome-icon
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
.nav-item{
  display: flex;
  font-size: 1.5rem;
  
}
.icon{
  height: 2.5rem;
}
.dropdown-menu{
  left: -100px !important;
  
}
.router-link{
  all: unset;
  cursor: pointer;
}
.dropdown-icon{
  height: 5rem;

}
.nav-link{
  align-content: center;
}


</style>