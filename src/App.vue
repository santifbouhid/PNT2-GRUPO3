<script setup>
import Header from './components/Header.vue'
import { ref } from 'vue';
import Footer from './components/footer.vue';

let isLoggedIn = ref(true)
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" v-show="isLoggedIn"><Header></Header></nav>
    <router-view></router-view>
    <Footer />
</template>

<style scoped>
nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
}
</style>
