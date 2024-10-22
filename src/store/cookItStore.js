import { defineStore } from "pinia";
import { ref,computed } from "vue";

export const useCookItStore = defineStore('ShoppingCartStore',()=>{
    const isLoggedIn = ref(false)

    const logInUser = (estaLogeado) =>{
        isLoggedIn.value = estaLogeado
        console.log("login! ")
    }
    const getLoggedStatus = computed(() => isLoggedIn.value)

    return {isLoggedIn, logInUser, getLoggedStatus}
})