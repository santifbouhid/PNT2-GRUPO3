import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useRecetasStore = defineStore('recetasStore',() => {

    const allRecipes = ref([])

    const setAllRecipes = async () => {
        try {
            // const data = await axios.get('https://www.mockachino.com/770e676d-e81c-40/recetas')
            // allRecipes.value = data.data;
            // const data = await axios.get('https://cookit-api.up.railway.app/recipes/allRecipes')
            // .then(r => allRecipes.value = r.data)
            // console.log(`useRecetasStore ${allRecipes.value}`)
            // return data.data;
            const data = await axios.get('https://cookit-api.up.railway.app/recipes/allRecipes')         
          .then(r => allRecipes.value = r.data);
          console.log('SET ALL RECIPES STORE', data);
          return data;
          } catch (error) {
          console.error("Error en setAllRecipes - recetasModifStore:", error);
          }
    }

    const getAllRecipes =  async () => {
        // Si todavia no se trajeron las recetas, las trae.
        console.log('getAllRecipes STORE');
        if (allRecipes.value.length === 0){
          const res = await setAllRecipes()   
          return res
      }
      // Si ya estan seteadas, las devuelve directamente.
          return await allRecipes.value;
        
    };
    

    return {getAllRecipes};
  }
);


