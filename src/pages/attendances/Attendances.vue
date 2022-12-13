<template src='./attendances.html'>
</template>

<style scoped src='./attendances.css'>
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
            attendances:[],
            id: null,
            checkIn: null,
            lessonId: null,
            studentCardId: null,
            checkOut:null,
            addMessage:"",
            addData:{cardId:null, lessonId:null}
            
            
        };
    },

    methods: {
        async getAttendances() {
            const response = await axios.get('http://localhost:5246/api/attendances');
            this.attendances = await response.data;
        },

        async addAttendance() {
      try {
        this.isLoading = true;
        await axios.post(`http://localhost:5246/api/attendances?cardId=${this.cardId}&lessonId=${this.lessonId}`);
        this.getAttendances();
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
      this.cardId = null;
      this.lessonId = null;
    },
  
    },

    mounted() {
        this.getAttendances();
    },

    components: {
        Navbar
    },
};
</script>