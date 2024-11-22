<script setup>
import { ref } from 'vue'
import EditPerfil from "./EditPerfil.vue";
import AdministrarPerfil from "./AdministrarPerfil.vue";

const paisSeleccionado = ref(null);
const mostrando = ref("");

function mostrarSeleccion() {
  mostrando.value = paisSeleccionado.value
      ? `${paisSeleccionado.value.name} (${paisSeleccionado.value.prefix})`
      : "";
}

const countries = ref([{ name: "Afghanistan", prefix: "+93" },
  { name: "Albania", prefix: "+355" },
  { name: "Algeria", prefix: "+213" },
  { name: "Andorra", prefix: "+376" },
  { name: "Angola", prefix: "+244" },
  { name: "Argentina", prefix: "+54" },
  { name: "Armenia", prefix: "+374" },
  { name: "Australia", prefix: "+61" },
  { name: "Austria", prefix: "+43" },
  { name: "Azerbaijan", prefix: "+994" },
  { name: "Bahamas", prefix: "+1-242" },
  { name: "Bahrain", prefix: "+973" },
  { name: "Bangladesh", prefix: "+880" },
  { name: "Belarus", prefix: "+375" },
  { name: "Belgium", prefix: "+32" },
  { name: "Belize", prefix: "+501" },
  { name: "Benin", prefix: "+229" },
  { name: "Bhutan", prefix: "+975" },
  { name: "Bolivia", prefix: "+591" },
  { name: "Bosnia and Herzegovina", prefix: "+387" },
  { name: "Botswana", prefix: "+267" },
  { name: "Brazil", prefix: "+55" },
  { name: "Brunei", prefix: "+673" },
  { name: "Bulgaria", prefix: "+359" },
  { name: "Burkina Faso", prefix: "+226" },
  { name: "Burundi", prefix: "+257" },
  { name: "Cambodia", prefix: "+855" },
  { name: "Cameroon", prefix: "+237" },
  { name: "Canada", prefix: "+1" },
  { name: "Cape Verde", prefix: "+238" },
  { name: "Central African Republic", prefix: "+236" },
  { name: "Chad", prefix: "+235" },
  { name: "Chile", prefix: "+56" },
  { name: "China", prefix: "+86" },
  { name: "Colombia", prefix: "+57" },
  { name: "Comoros", prefix: "+269" },
  { name: "Congo (DRC)", prefix: "+243" },
  { name: "Congo (Republic)", prefix: "+242" },
  { name: "Costa Rica", prefix: "+506" },
  { name: "Croatia", prefix: "+385" },
  { name: "Cuba", prefix: "+53" },
  { name: "Cyprus", prefix: "+357" },
  { name: "Czech Republic", prefix: "+420" },
  { name: "Denmark", prefix: "+45" },
  { name: "Djibouti", prefix: "+253" },
  { name: "Dominican Republic", prefix: "+1-809" },
  { name: "Ecuador", prefix: "+593" },
  { name: "Egypt", prefix: "+20" },
  { name: "El Salvador", prefix: "+503" },
  { name: "Estonia", prefix: "+372" },
  { name: "Eswatini", prefix: "+268" },
  { name: "Ethiopia", prefix: "+251" },
  { name: "Fiji", prefix: "+679" },])


</script>

<template>

  <body>

  <div class="container my-5">
    <div class="row">
      <!-- Panel de Navegación Izquierda -->
      <div class="col-md-3 flex-column">
        <ul class="nav flex-column nav-pills nav-justified" id="profile-tab" role="tablist">
          <li class="nav-item row">
            <a class="nav-link active" id="editar-perfil-tab" data-bs-toggle="pill" href="#editar-perfil" role="tab">Editar perfil</a>
          </li>
          <li class="nav-item row">
            <a class="nav-link" id="administracion-cuenta-tab " data-bs-toggle="pill" href="#administracion-cuenta" role="tab">Administración de la cuenta</a>
          </li>
        </ul>
      </div>


      <!-- CONTENIDO DE LAS TABS -->
      <div class="col-md-9">
        <div class="tab-content" id="profile-tabContent">

          <!-- EDITAR PERFIL -->
          <div class="tab-pane fade show active" id="editar-perfil" role="tabpanel" aria-labelledby="editar-perfil-tab">
            <EditPerfil></EditPerfil>
          </div>

          <!-- ADMINISTRACION DE LA CUENTA -->
          <div class="tab-pane fade" id="administracion-cuenta" role="tabpanel" aria-labelledby="administracion-cuenta-tab">
            <AdministrarPerfil></AdministrarPerfil>
          </div>


        </div>
      </div>
    </div>
  </div>


</body>
</template>

<style scoped>


#cod {
  width: 10%;
}

#num {
  width: 80%;
  text-align: right;
}

.dropdown-container {
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}



#btnRestab {
  background-color: #707070;
}

#btnGuardar {
  background-color: #333333;
  border: #333333;
  margin-right: 10px;
}


.nav-pills .nav-link.active {
  background-color: #333333;
  color: #fff;
  padding: 10px 15px;
}

.nav-pills .nav-link:hover {
  background-color: #e0e0e0;
  color: #333;
}


/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 500px) {
  .nav-pills .nav-link {
    background-color: #f0f0f0;
    color: #333;
    margin-bottom: 5px;
    display: flex;
    text-align: left;
    max-height: 60px;
  }

  .col-md-3 {
    margin-bottom: -900px;
    width: 100%;
    display: flex;
    top: 20px;
    height: 100vh;
    float: left;
  }

  .col-md-9 {
    margin-top: -200px;
    width: 100%;
    float: left;
    height: 100vh;
  }


}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 500px) {
  .nav-pills .nav-link {
    background-color: #f0f0f0;
    color: #333;
    margin-bottom: 5px;
    margin-right: 30px;
    margin-left: 0px;
    display: flex;
    text-align: left;
    max-height: 40px;
  }

  .col-md-3 {
    margin-bottom: -600px;
    width: 100%;
    display: flex;
    top: 20px;
    height: 100vh;
    float: left;
  }

  .col-md-9 {
    width: 100%;
    float: left;
    height: 100vh;
  }

}


/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1000px) {
  .nav-pills .nav-link {
    background-color: #f0f0f0;
    color: #333;
    margin-bottom: 5px;
    margin-right: 70px;
    margin-left: -80px;
    display: flex;
    text-align: left;
    max-height: 40px;
  }

  .col-md-3 {
    width: 25%;
    display: flex;
    top: 20px;
    height: 100vh;
    float: left;
  }

  .col-md-9 {
    width: 75%;
    float: left;
    height: 100vh;
  }

}


</style>