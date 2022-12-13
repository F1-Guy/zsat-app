<template src="./attendances.html"></template>


<style scoped src='./attendances.css'>

</style>

<script>

import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import { useUserStore } from "../../lib/store";
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const userStore = useUserStore();
    const toast = useToast();
    return { userStore, toast };
  },

  data() {
    return {
      attendances: [],
      isLoading: false,
      id: null,
      checkIn: null,
      lessonId: null,
      studentCardId: "",
      checkOut: null,
      addMessage: "",
      addData: { cardId: null, lessonId: null },
      color: "#0d6efd",
    };
  },

  methods: {
    async getAttendances() {
      const response = await axios.get("https://zsatservice.azurewebsites.net/api/attendances");
      this.attendances = await response.data;
    },
    
    async addAttendance() {
      try {
        this.isLoading = true;
        result = await axios.post(`https://zsatservice.azurewebsites.net/api/Attendances?cardId=${this.studentCardId}&lessonId=${this.lessonId}`);
        
        this.getAttendances();
        this.toast.success("You have successfully added an attendance.");
        this.isLoading = false;
      } catch (error) {
        console.error(error);
        this.toast.error("Something went wrong. Try again.");
      }
      this.cardId = null;
      this.lessonId = null;
    },
  },

  mounted() {
    this.getAttendances();
  },

  components: {
    Navbar,
  },
};
</script>
