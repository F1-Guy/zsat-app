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
        };
    },

    methods: {
        async getStudents() {
            const response = await axios.get('http://localhost:5246/api/Students');
            this.students = await response.data;
        },

        async addStudent() {
            await axios.post(`http://localhost:5246/api/Students?cardId=${this.cardId}&name=${this.name}&email=${this.email}`)
            this.getStudents();
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