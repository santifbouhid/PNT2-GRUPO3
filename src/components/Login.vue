<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router'
import { useCookItStore } from '../store/cookItStore';

const router = useRouter()
const cookItStore = useCookItStore()

const users = [
    {user: "admin", password: "admin", restricciones:[]},
    {user: "vegan", password: "vegan", restricciones:["vegan"]},
    {user: "user", password: "user", restricciones:[]},
    {user: "gluten", password: "gluten", restricciones:["gluten"]},
]

const username = ref();
const password = ref();
const errorLogin = ref(false);
const login = () => {
    try {
        const user = users.find(u => u.user == username.value && u.password == password.value);
        if (user !== undefined) {
        cookItStore.logInUser(true)
        errorLogin.value = false;
        router.push("/");
        } else{
            errorLogin.value = true;
            console.log("login failed");
            
        }
    } catch (error) {

        console.log(error)
    }
};

</script>

<template>

    <div class="loginContainer container-md" >
        <h2>Inicia sesion</h2>
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
    min-width: 300px;
}
</style>