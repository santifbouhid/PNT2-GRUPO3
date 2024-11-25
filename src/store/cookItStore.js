import { defineStore } from "pinia";
import { ref,computed } from "vue";



export const useCookItStore = defineStore('CookItStore',()=>{
    const isLoggedIn = ref(false)
    const allRecipes = ref([])
    const userLogged = ref([])
    const recipeById = ref([])

    const logInUser = (user, estaLogeado) =>{      
        userLogged.value = user;
        isLoggedIn.value = estaLogeado;
        console.log("login! ", isLoggedIn.value)
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

    const getRecipeById = async(id) => {
        const data = await fetch(`https://cookit-api.up.railway.app/recipes/recipes/${id}`)
        const r = await data.json()
        return recipeById.value = r;
    }

    const getUserLogged = () => userLogged.value;

    const getUserRestrictions = () => userLogged.value.restricciones

    const updateUserLoggedRestricciones = async (id, info) => {
        const data = await fetch(`https://cookit-api.up.railway.app/users/update/restrictions/${id}`, {
            method: 'PATCH',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                "restricciones": info
            },
        })
        console.log(data)
    }



    return { getUserLogged, logInUser, getLoggedStatus, isLogged, setAllRecipes, getAllRecipes, allRecipes, getRecipeById, recipeById, getUserRestrictions, userLogged, updateUserLoggedRestricciones}
})

