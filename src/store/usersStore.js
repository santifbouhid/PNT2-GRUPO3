import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const usersCookITAPI = defineStore('usersStore',() => {

    const users = ref([])

    const traerUsersCookIT = async () => {
        const data = await axios.get('https://cookit-api.up.railway.app/users/users', {
            params: {
              role: 'admin'
            }
          })
        .then(r => users.value = r.data);
        return data;
    }


    const getAllUsers = async () => {
        if (users.value.length === 0){
            const res = await traerUsersCookIT()
            return res
        }
            return await users.value;
    };

    return {getAllUsers}
});

