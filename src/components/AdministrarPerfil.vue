<script setup>
import {ref, onMounted, onBeforeMount, computed} from 'vue';
import { useCookItStore } from '../store/cookItStore.js';

const cookItStore = useCookItStore()
const usuario = ref()
const gfchecked = ref(false)
const veggieChecked = ref(false)
const veganChecked = ref(false)
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
const paisSeleccionado = ref(null);
const mostrando = ref("");

function mostrarSeleccion() {
  mostrando.value = paisSeleccionado.value ? `${paisSeleccionado.value.name} (${paisSeleccionado.value.prefix})` : "";
}

console.log(usuario.name)

const onCheckBoxChange = async (restriccion, evento) => {
  let restriccionesUser = usuario.value.restricciones
  if (!evento.target.checked) {
    restriccionesUser = restriccionesUser.filter(r => r !== restriccion);
    console.log(restriccionesUser)
    await cookItStore.updateUserLoggedRestricciones(usuario.value._id, restriccionesUser)
  }else if (evento.target.checked) {
    restriccionesUser = restriccionesUser.push(restriccion);
    console.log(restriccionesUser)
    await cookItStore.updateUserLoggedRestricciones(usuario.value._id, restriccionesUser)
  }
}





onBeforeMount(() => {
  usuario.value = cookItStore.getUserLogged()

})
</script>

<template>
  <h3>Administración de la cuenta</h3>
  <form>

    <div class="mb-3">
      <!-- RESTRICCIONES -->
      <div class="mb-3">
        <label for="restricciones" class="form-label">Restricciones {{usuario.restricciones}}</label>
      </div>


      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" :checked="usuario.restricciones.includes('gf' && 'gluten')" @click="onCheckBoxChange('gf', $event)">
        <label class="btn btn-outline-secondary" for="btncheck1" >Sin Gluten</label>


        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" :checked="usuario.restricciones.includes('veggie')" @click="onCheckBoxChange('veggie', $event)">
        <label class="btn btn-outline-secondary" for="btncheck2">Vegetariano</label>


        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" :checked="usuario.restricciones.includes('vegan')" @click="onCheckBoxChange('vegan', $event)">
        <label class="btn btn-outline-secondary" for="btncheck3">Vegano</label>
      </div>
    </div>

    <div class="mb-3">
      <label for="nombre" class="form-label">Mail</label>
      <input type="text" class="form-control" id="mail" :value="`${usuario.nombre}${usuario.apellido}@gmail.com`">
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

    <!--<button id="btnGuardar" type="submit" class="btn btn-primary">Guardar</button>-->
  </form>
</template>

<style scoped>

</style>