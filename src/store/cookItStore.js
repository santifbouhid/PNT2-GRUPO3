import { defineStore } from "pinia";
import { ref,computed } from "vue";



export const useCookItStore = defineStore('CookItStore',()=>{
    const isLoggedIn = ref(false)
    const allRecipes = ref([])
    const etiqueta = ref('')

    const logInUser = (estaLogeado) =>{
        isLoggedIn.value = estaLogeado
    }
    const getLoggedStatus = computed(() => isLoggedIn.value)

    const isLogged = () => {return isLoggedIn.value}

    const setAllRecipes = (recipes) => {
        allRecipes.value = recipes
    }

    const getAllRecipes = async () => { 
        const data = await fetch('https://cookit-api.up.railway.app/recipes/allRecipes')
        const r = await data.json()
        return allRecipes.value = r;
        //console.log(allRecipes.value)
    }

    const setEtiqueta = (tag) => {
        etiqueta.value = tag
    }

    const getEtiqueta = () => {
        return etiqueta.value
    }

    return { logInUser, getLoggedStatus, isLogged, setAllRecipes, getAllRecipes, allRecipes, setEtiqueta, getEtiqueta, etiqueta}
})

