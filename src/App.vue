<script setup>
import Header from './components/Header.vue'
import { ref } from 'vue';

let isLoggedIn = ref(false)
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" v-show="isLoggedIn"><Header></Header></nav>
    <router-view></router-view>
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
