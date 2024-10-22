<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCookItStore } from '../store/cookItStore';
import { useRouter } from 'vue-router'

const route = useRouter()

const username = ref("admin@admin.com");
const password = ref("admin");
const login = () => {
  if (username.value === "admin@admin.com" && password.value === "admin") {
    useCookItStore.logInUser(true)
    router.push("/home");
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