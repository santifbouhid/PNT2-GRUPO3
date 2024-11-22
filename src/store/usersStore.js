import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const usersCookITAPI = defineStore('usersStore',() => {

    const users = ref([])

    const traerUsersCookIT = async () => {

        const data = await fetch('https://cookit-api.up.railway.app/users/users')
        const r = await data.json()
        users.value = r;
        console.log(users.value)
    }


    const getAllUsers = async () => {
        console.log(users.value);
        if (users.value.length === 0){
            return await traerUsersCookIT().value
        }
            return await users.value;
    };

    return {getAllUsers}
});

