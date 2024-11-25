import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useCookItStore } from "./cookItStore.js";

export const usersCookITAPI = defineStore("usersStore", () => {
  const users = ref([]);
  const cookitStore = useCookItStore();

  const traerUsersCookIT = async () => {
    // const data = await axios.get('https://cookit-api.up.railway.app/users/users')
    //.then(r => users.value = r.data);
    const data = await axios
      .get("https://cookit-api.up.railway.app/users/users", {
        params: {
          role: "admin",
        },
      })
      .then((r) => (users.value = r.data));
    return data;
  };

  const getUserActualizado = async () => {
    const userLogged = cookitStore.getUserLogged();
    
    const id = userLogged._id;
    // `https://cookit-api.up.railway.app/users/id/${id}`
    // `http://localhost:8080/users/id/${id}`
    const user = await axios.get(
      `https://cookit-api.up.railway.app/users/id/${id}`
    );
    return user.data;
  };

  const removeRecetaFavorita = async (idRecetaFavorita) => {
    const userLogged = await getUserActualizado();
    const idUser = userLogged._id

    console.log('idRecetaFavorita', idRecetaFavorita);
    console.log('idUser', idUser);
    

    if(idUser !== undefined) {
        // `https://cookit-api.up.railway.app/users/update/removeRecetaFavorita/${idUser}`
        // `http://localhost:8080/users/update/removeRecetaFavorita/${idUser}`        
        axios
        .patch(
        `http://localhost:8080/users/update/removeRecetaFavorita/${idUser}`,
        {
            idRecetaFavorita: idRecetaFavorita,
        },
        {
            headers: {
            "Content-Type": "application/json",
            },
        }
        )
        .then((response) => {
        console.log("Receta eliminada de favoritos", response);
        })
        .catch((error) => {
        console.error("Error en la eliminación de receta de favoritos", error);
        });
    }else{
        console.error('Id de usuario undefined');
        
    }
    
  };

  const addRecetaFavorita = async (idReceta) => {
    const userLogged = await getUserActualizado();
    const idUser = userLogged._id
    console.log('idReceta', idReceta);
    console.log('idUser', idUser);

    if(idUser !== undefined) {
        // `https://cookit-api.up.railway.app/users/update/removeRecetaFavorita/${idUser}`
        // `http://localhost:8080/users/update/addRecetaFavorita/${idUser}`        
        axios
        .patch(
        `http://localhost:8080/users/update/addRecetaFavorita/${idUser}`,
        {
            idRecetaOriginal: idReceta,
            original: true
        },
        {
            headers: {
            "Content-Type": "application/json",
            },
        }
        )
        .then((response) => {
        console.log("Receta agregada a favoritos", response);
        })
        .catch((error) => {
        console.error("Error al agregar la receta a favoritos", error);
        });
    }else{
        console.error('Id de usuario undefined');
        
    }
  }

  const esRecetaFavorita = async (idReceta) => {
    const user = await getUserActualizado();
    const res = user.recetasFavoritas.find((r) => r.idRecetaOriginal === idReceta )
    return res;
  }

  const getAllUsers = async () => {
 
    const res = await traerUsersCookIT();
    return res;
  };

  return { getAllUsers, getUserActualizado, removeRecetaFavorita, esRecetaFavorita, addRecetaFavorita };
});
