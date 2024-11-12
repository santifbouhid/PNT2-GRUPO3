import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useRecetasStore = defineStore('recetasStore',() => {

    const allRecipes = ref([])

    const setAllRecipes = async () => {
        try {
            const data = await axios.get('https://www.mockachino.com/770e676d-e81c-40/recetas')
            allRecipes.value = data.data;
            await console.log(`AAAAZAAZASDASFJKHGASFGJH ${data.data}`);
            
            

          } catch (error) {
          console.error("Error en setAllRecipes - recetasModifStore:", error);
          }
    }

    const getAllRecipes =  () => {
        
        return  allRecipes.value;
        
    };
    

    return {getAllRecipes};
  }
);


