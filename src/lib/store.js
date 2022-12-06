import axios from 'axios';
import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),

    // Change later to use a body with the request
    actions: {
        async signUp(userName, password, name) {
            const response = await axios.post(`http://localhost:5246/api/AuthUsers/SignUp?userName=${userName}&password=${password}&fullName=${name}`);
            const user = await response.data;
            this.user = user;
        },

        async signIn(userName, password) {
            const response = await axios.post(`http://localhost:5246/api/AuthUsers/SignIn?userName=${userName}&password=${password}`);
            const user = await response.data;
            this.user = user;
        }
    }
})