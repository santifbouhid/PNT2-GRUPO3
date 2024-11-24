import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useCookItStore } from "./cookItStore.js";

export const usersCookITAPI = defineStore('usersStore',() => {

    const users = ref([])
    const cookitStore = useCookItStore()

    const traerUsersCookIT = async () => {
        // const data = await axios.get('https://cookit-api.up.railway.app/users/users')
        //.then(r => users.value = r.data);
        const data = await axios.get('https://cookit-api.up.railway.app/users/users', {
            params: {
              role: 'admin'
            }
          })
        .then(r => users.value = r.data);
        return data;
    }

    const getUserActualizado = async () =>{
        const userLogged = cookitStore.getUserLogged();
        console.log('userLogged', userLogged);
        
        const id = userLogged._id;
        const user = await axios.get(`https://cookit-api.up.railway.app/users/id/${id}`)
        return user.data;
    }

   

    const getAllUsers = async () => {
        // if (users.value.length === 0){
        //     const res = await traerUsersCookIT()         
        //     return res
        // }
        //     return await users.value;

            const res = await traerUsersCookIT()         
            return res
    };

    return {getAllUsers, getUserActualizado}
});

