import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useRecetasModificadasStore = defineStore('recetasModificadasStore',() => {

    const allRecipes = ref([])

    const setAllRecipes = async () => {
        try {
            const data = await axios.get("https://67311e517aaf2a9aff0fe0e9.mockapi.io/misrecetas", {
              headers: { "Content-Type": "application/json" },
            })
             allRecipes.value = data.data;

          } catch (error) {
          console.error("Error en setAllRecipes - recetasModifStore:", error);
          }
    }

    const getAllRecipes = async () => {
        
        if (allRecipes.value.length === 0){
            await setAllRecipes();
        }
        return await allRecipes.value;
        
    };
    
    const getIdUltimaRecetaModificada = async() => {
      if(allRecipes.value.length === 0){
        setAllRecipes()
      } 
    }

    const saveRecetaModificada = async(receta) => {
      try {
        const response = await fetch("https://67311e517aaf2a9aff0fe0e9.mockapi.io/misRecetas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(receta),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        console.log(response)
      } catch (error) {
        console.error("Error al enviar datos:", error);
      }
    };
    

    return {getAllRecipes, saveRecetaModificada};
  }
);


