<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { usersCookITAPI } from '../store/usersStore.js';
import { useCookItStore } from '../store/cookItStore';

const usersStore = usersCookITAPI()
const cookItStore = useCookItStore()

const props = defineProps({
    favorita: Boolean,
    idReceta: String
});
const logged = computed(() => {
    return cookItStore.isLogged();
})

const favOn = ref();
let idRecetaFavorita;

const esFavorita = async () => {
    if (logged) {
        const res = await usersStore.esRecetaFavorita(props.idReceta);
        if (res !== undefined) {
            favOn.value = true
            idRecetaFavorita = res._id;
        }
    }


};

const fav = () => {
    if (favOn.value === true) {
        favOn.value = false;
        usersStore.removeRecetaFavorita(idRecetaFavorita);
    } 
    else{
        favOn.value = true;
        usersStore.addRecetaFavorita(props.idReceta);
    }

}

onBeforeMount(() => {
    esFavorita();
});


</script>

<template>

    <div class="contenedor_boton_fav" @click.stop.prevent="fav()" v-show="logged">
        <font-awesome-icon v-if="favOn" :icon="['fas', 'heart']" size="2x" />
        <font-awesome-icon v-else :icon="['far', 'heart']" size="2x" />
    </div>

</template>

<style scoped>
.contenedor_boton_fav {
    text-align: right;
    cursor: pointer;
}
</style>