<template src="./students.html"></template>

<style scoped src="./students.css"></style>

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
      students: [],
      attendances: [],
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
        const response = await axios.get("https://zsatservice.azurewebsites.net/api/Students");
        this.students = await response.data;
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },

    async getStudentAttendances(id) {
      try {
        this.isLoading = true;

        this.$router.push({ name: "StudentAttendance", params: { cardId: id } });
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },

    async addStudent() {
      try {
        this.isLoading = true;
        await axios.post(`https://zsatservice.azurewebsites.net/api/Students?cardId=${this.cardId}&name=${this.name}&email=${this.email}`);
        this.getStudents();
        this.isLoading = false;
        this.toast.success("You have successfully added a student.");
      } catch (error) {
        console.error(error);
        this.toast.error("Something went wrong. Try again.");
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
    Navbar,
  },
};
</script>
