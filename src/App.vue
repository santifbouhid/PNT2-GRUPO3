<script setup>
import Header from './components/Header.vue'
import { ref } from 'vue';
import Footer from './components/Footer.vue';

let isLoggedIn = ref(true)
</script>

<template>
  <div class=" container-fluid cApp m-0 p-0 ">
    <div class="row header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary" v-show="isLoggedIn">
        <Header></Header>
      </nav>
    </div>
    <div class="row cuerpo">
      <router-view></router-view>
    </div>
    <div class="row mt-5 mx-0 footer">
      <Footer></Footer>
    </div>
    
  </div>

</template>

<style scoped>
.cApp{
  min-height: 100vh;

}

.header{
  margin-right: 0;
    margin-left: 0;

}

nav {
    /* margin-bottom: 1rem; */
    min-height: 8vh;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0;

}

.cuerpo{
  width: 100%;
  margin-top: 1rem;
  margin-left: 0;
  margin-right: 0;
  min-height: 75vh;
  align-items: center;

}

.footer{
  width: 100%;
  bottom: 0;
  
}



</style>
