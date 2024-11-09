import { defineStore } from "pinia";
import { ref,computed } from "vue";



export const useCookItStore = defineStore('CookItStore',()=>{
    const isLoggedIn = ref(false)
    const allRecipes = ref([])

    const logInUser = (estaLogeado) =>{
               
        isLoggedIn.value = estaLogeado
        console.log("login! ", isLoggedIn.value)
    }
    const getLoggedStatus = computed(() => isLoggedIn.value)

    const isLogged = () => {return isLoggedIn.value}

    const setAllRecipes = (recipes) => {
        allRecipes.value = recipes
    }

    const getAllRecipes = () => { 
        return allRecipes.value 
    }


    return { logInUser, getLoggedStatus, isLogged, setAllRecipes, getAllRecipes, allRecipes}
})

