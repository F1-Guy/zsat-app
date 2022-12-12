<template src='./students.html'>
</template>

<style scoped src='./students.css'>
</style>

<script>
import axios from 'axios';
import Navbar from '../../components/Navbar.vue';
import { useUserStore } from '../../lib/store';

export default {
    setup() {
        const userStore = useUserStore();
        return { userStore };
    },

    data() {
        return {
            students: [],
            cardId: null,
            name: null,
            email: null,
            isLoading: false,
            color: "#0d6efd",
        };
    },

    methods: {
        async getStudents() {
            try {
                this.isLoading = true;
                const response = await axios.get('https://zsatservice.azurewebsites.net/api/Students');
                this.students = await response.data;
                this.isLoading = false;
            } catch (error) {
                console.error(error);
            }
        },

        async addStudent() {
            try {
                this.isLoading = true;
                await axios.post(`https://zsatservice.azurewebsites.net/api/Students?cardId=${this.cardId}&name=${this.name}&email=${this.email}`)
                this.getStudents();
                this.isLoading = false;
            } catch (error) {
                console.error(error);
            }
            this.cardId = null;
            this.name = null;
            this.email = null;
        },
    },

    mounted() {
        this.getStudents();
    },

    components: {
        Navbar
    },
};
</script>