<script setup>
import Buscador from "./Buscador.vue";
</script>

<template>

  <div class="search"><Buscador></Buscador></div>

  <div class="cards">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
          <img src="/fotosRecetas/nioquis.png" class="card-img-top" alt="foto Ñoquis de papa">
          <div class="card-body">
            <h5 class="card-title">Ñoquis de papa</h5>
            <p class="card-text">Deliciosos ñoquis de papa suaves y esponjosos, perfectos para acompañar con salsas frescas o un toque de parmesano.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="/fotosRecetas/chauFanP.png" class="card-img-top" alt="foto Chau fan con pollo">
          <div class="card-body">
            <h5 class="card-title">Chau fan con pollo</h5>
            <p class="card-text">Arroz frito al estilo oriental con trozos de pollo jugoso y vegetales crujientes, ideal para disfrutar un sabor exótico.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="/fotosRecetas/painAu.png" class="card-img-top" alt="foto pain au chocolat">
          <div class="card-body">
            <h5 class="card-title">pain au chocolat</h5>
            <p class="card-text">Clásico francés con capas crujientes de hojaldre y un delicioso centro de chocolate, perfecto para el desayuno o la merienda.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="/fotosRecetas/bondio.png" class="card-img-top" alt="foto Bondiola a la cerveza">
          <div class="card-body">
            <h5 class="card-title">Bondiola a la cerveza</h5>
            <p class="card-text">Tierna bondiola cocinada lentamente en cerveza, que realza su sabor con un toque caramelizado y especias.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
</script>