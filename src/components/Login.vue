<script setup>
import {ref, onBeforeMount} from 'vue';
import { useRouter } from 'vue-router'
import { useCookItStore } from '../store/cookItStore';
import { usersCookITAPI } from "../store/usersStore.js";

const router = useRouter()
const cookItStore = useCookItStore()
const usersStore = usersCookITAPI()
let allUsers = []

// allUsers = [
//     {username: "admin", pass: "admin", restricciones:[], recetasFavoritas: [{id: "6733b5239bee9ca353f3cd4f", "original": true}, {id: 1, "original": false}, {id: "6733b5239bee9ca353f3cd4c", "original": true}]},
//     {user: "vegan", password: "vegan", restricciones:["vegan"]},
//     {user: "user", password: "user", restricciones:[]},
//     {user: "gluten", password: "gluten", restricciones:["gluten"]},
// ]

const users = async () => {
  allUsers = await usersStore.getAllUsers()
}

// EL USERNAME QUE ESCRIBE EL USUARIO
const username = ref();
// LA PASSWORD QUE ESCRIBE EL USUARIO
const password = ref();
// ERROR LOGIN SE HABILITA SI EL USUARIO PONE MAL EL USERNAME Y/O LA PASSWORD
const errorLogin = ref(false);

const login = () => {
    try {       
        const user = allUsers.find(u => u.username == username.value && u.pass == password.value);
        if (user !== undefined) {
        cookItStore.logInUser(user, true)
        errorLogin.value = false;
        router.push("/");
        } else{
            errorLogin.value = true;
            console.error("login failed");
            
        }
    } catch (error) {

        console.error(error)
    }
};

onBeforeMount(() => {
    users()
})

</script>

<template>

    <div class=" container-md loginContainer " >
        <h2 class="titulo">Inicia sesion</h2>
        <form @submit.prevent="login" >
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Usuario</label>
                <input v-model="username" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mail@mail.com">
            </div>
            <div class="mb-3">
                <label  for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="********">
            </div>
            <div v-show="errorLogin" class="mb-3">
                <p >El usuario y/o contraseña son incorrectos</p>
            </div>
            <button  type="submit" class="btn btn-primary" >Iniciar Sesion</button>
        </form>
    </div>

</template>

<style scoped>
p{
    max-width: 300px;
    font-size: 14px;
    color: red;
    margin: auto;
}
.loginContainer{
    min-width: 25%;
    max-width: 25%;
}
.form-label{
    font-size: 1.5rem;
}
.titulo{
    font-size: 2.5rem;
}

button{
    font-size: 1rem;
}
</style>