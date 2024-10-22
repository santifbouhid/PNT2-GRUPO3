<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router'
import { useCookItStore } from '../store/cookItStore';

const router = useRouter()
const cookItStore = useCookItStore()

const username = ref("admin@admin.com");
const password = ref("admin");
const login = () => {
    try {
        
        if (username.value === "admin@admin.com" && password.value === "admin") {
        cookItStore.logInUser(true)
          router.push("/home");
        
    }
    } catch (error) {

        console.log(error)
  }
};


</script>

<template>

    <div class="loginContainer">
        <h2>Inicia sesion</h2>
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mail@mail.com">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="********">
            </div>
            
            <button type="submit" class="btn btn-primary" @click="login()">Iniciar Sesion</button>
        </form>
    </div>

</template>

<style scoped></style>