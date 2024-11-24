<script setup>
import EditPerfil from "./EditPerfil.vue";
import AdministrarPerfil from "./AdministrarPerfil.vue";

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