<script setup>
import { ref, computed, onMounted, onBeforeMount } from 'vue';
import { useCookItStore } from '../store/cookItStore.js';
import { usersCookITAPI } from '../store/usersStore.js'

const cookItStore = useCookItStore()
const usersStore = usersCookITAPI()
const totalRecetas = ref()
let recetas = ref([])
let users = ref([])

const allRecipes = async() => {
    recetas.value = await cookItStore.getAllRecipes()
    return recetas
}
const allUsers = async() => {
    users.value = await usersStore.getAllUsers()
    return users
}

allRecipes()
allUsers()

const cantidadRecetasTotal = computed(()=>{
    totalRecetas.value = recetas.value.length
    return totalRecetas.value
})

const cantidadRecetasIA = computed(() => {
    const recetasIA = recetas.value.filter(r => r.image === null)
    return recetasIA.length
})

const cantidadRecetasPorRest = (restriccion) => {
    const recetasPorRest = recetas.value.filter(r => r.apto.includes(restriccion))
    return recetasPorRest.length
}

const cantidadTotalDeUsuarios = computed(() => {
    const cantidadUsuarios = users.value.length
    return cantidadUsuarios
})

const cantTotalUsuariosConRest = computed(() => {
    const usuariosConRest = users.value.filter(u => u.restricciones.length > 0)
    return usuariosConRest.length
})

const cantidadUsuariosPorRest = (restriccion) => {
    const usuariosPorRest = users.value.filter(u => u.restricciones.includes(restriccion))
    return usuariosPorRest.length
}

onBeforeMount(() =>{

})
</script>


<template>
    <h1>Reporte de usuarios y recetas</h1>
    <div class="contenedor">
        <div class="recetas reporte">
            <h2>Recetas</h2>
            <ul>
                <li><p>Total recetas guardadas: {{ cantidadRecetasTotal }}</p></li>
                <li><p>Total recetas generadas por IA: {{ cantidadRecetasIA }}</p></li>
                <li><p>Total recetas por restriccion:</p></li>
                <ul>
                    <li><p>Gluten free: {{ cantidadRecetasPorRest('gf') }}</p></li>
                    <li><p>Vegetarianas: {{ cantidadRecetasPorRest('veggie') }}</p></li>
                    <li><p>Veganas: {{ cantidadRecetasPorRest('vegan') }}</p></li>
                </ul>
            </ul>
        </div>
        <div class="usuarios reporte">
            <h2>Usuarios</h2>
            <ul>
                <li><p>Total de usuarios registrados: {{ cantidadTotalDeUsuarios }}</p></li>
                <li><p>Total de usuarios con una restriccion como minimo: {{ cantTotalUsuariosConRest }}</p></li>
                <li><p>Total usuarios por tipo de restriccion:</p></li>
                <ul>
                    <li><p>Gluten free: {{ cantidadUsuariosPorRest('gluten') }}</p></li>
                    <li><p>Vegetarianas: {{ cantidadUsuariosPorRest('veggie') }}</p></li>
                    <li><p>Veganas: {{ cantidadUsuariosPorRest('vegan') }}</p></li>
                </ul>
            </ul>
            
        </div>
    </div>
</template>

<style scoped>
h1{
    text-align: center;
    padding-top: 3%
}
.contenedor {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 5%;

    .reporte {
        border: 1px solid grey;
        border-radius: 10%;
        padding: 3%
    }
}
</style>