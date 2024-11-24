<script setup>
const fav = (_id) => {
    // MODIFICA EL BOTON
    const index = misRecetas.value.findIndex(re => re._id === _id)
    const r = misRecetas.value[index]
    r.fav === true ? r.fav = false : r.fav = true;
    misRecetas.value.splice(index, 1, r)

}

</script>

<template>

    <div class="contenedor_boton_fav" @click.stop.prevent="fav(r._id)">
        <font-awesome-icon v-if="r.fav === false" :icon="['far', 'heart']" size="xl" />
        <font-awesome-icon v-else="r.fav===true" :icon="['fas', 'heart']" size="xl" />
    </div>

</template>

<style scoped>
.contenedor_boton_fav {
    text-align: right;
}
</style>