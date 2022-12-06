import axios from 'axios';
import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", {
    state: () => ({
        user: null,
    }),

    actions: {
        async signUp(userName, password) {
            const response = await axios.post('http://localhost:5246/api/AuthUsers?userName=' + userName + '&password=' + password);
            const user = await response.data;
            this.user = user;
        }
    }
})