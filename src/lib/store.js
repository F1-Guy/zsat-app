import axios, { AxiosError } from 'axios';
import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
        authenticated: false,
    }),

    // Change later to use a body with the request
    actions: {
        async signUp(userName, password, name) {
            try {
                const response = await axios.post(`https://zsatservice.azurewebsites.net/api/AuthUsers/SignUp?userName=${userName}&password=${password}&fullName=${name}`);
                const user = await response.data;
                this.user = user;
                this.authenticated = true;
            } catch (error) {
                console.error(error);
            }
        },

        async signIn(userName, password) {
            try {
                const response = await axios.post(`https://zsatservice.azurewebsites.net/api/AuthUsers/SignIn?userName=${userName}&password=${password}`)
                const user = await response.data;
                this.user = user;
                this.authenticated = true;
            } catch (error) {
                console.error(error);
            }
            

        }
    }
})