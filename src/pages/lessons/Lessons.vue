<template src='./lessons.html'>
</template>

<style scoped src='./lessons.css'>
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
            lessons:[],
            id: null,
            subject: null
        };
    },

    methods: {
        async getLessons() {
            const response = await axios.get('http://localhost:5246/api/lessons');
            this.lessons = await response.data;
        },

        
    },

    mounted() {
        this.getLessons();
    },

    components: {
        Navbar
    },
};
</script>