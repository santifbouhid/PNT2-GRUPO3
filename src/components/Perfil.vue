<script setup>
import { ref } from 'vue'

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
          <li class="nav-item row">
            <a class="nav-link" id="privacidad-tab" data-bs-toggle="pill" href="#privacidad" role="tab">Privacidad y datos</a>
          </li>
          <li class="nav-item row">
            <a class="nav-link" id="seguridad-tab" data-bs-toggle="pill" href="#seguridad" role="tab">Seguridad</a>
          </li>
        </ul>
      </div>


      <!-- CONTENIDO DE LAS TABS -->
      <div class="col-md-9">
        <div class="tab-content" id="profile-tabContent">

          <!-- EDITAR PERFIL -->
          <div class="tab-pane fade show active" id="editar-perfil" role="tabpanel" aria-labelledby="editar-perfil-tab">
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
          </div>

          <!-- ADMINISTRACION DE LA CUENTA -->
          <div class="tab-pane fade" id="administracion-cuenta" role="tabpanel" aria-labelledby="administracion-cuenta-tab">
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
              </div
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
          </div>


          <!-- PRIVACIDAD Y DATOS -->
          <div class="tab-pane fade" id="privacidad" role="tabpanel" aria-labelledby="privacidad-tab">
            <h3>Privacidad y datos</h3>
            <p>Contenido de privacidad y datos...</p>
          </div>

          <!-- SEGURIDAD -->
          <div class="tab-pane fade" id="seguridad" role="tabpanel" aria-labelledby="seguridad-tab">
            <h3>Seguridad</h3>
            <p>Contenido de seguridad...</p>
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