<script setup>
import Header from './components/Header.vue'
import { ref } from 'vue';
import Footer from './components/Footer.vue';

let isLoggedIn = ref(true)
</script>

<template>
  <div class="cApp">

    <nav class="navbar navbar-expand-lg bg-body-tertiary" v-show="isLoggedIn"><Header></Header></nav>
    <div class="cuerpo">
      <router-view></router-view>
    </div>
    <Footer class="fixed-bottom footer"></Footer>
  </div>

</template>

<style scoped>
nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;
}

.cuerpo {
  margin-bottom: 200px;
}

</style>
