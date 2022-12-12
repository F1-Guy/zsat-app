<template src="./lessons.html"></template>

<style scoped src="./lessons.css"></style>

<script>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import { useUserStore } from "../../lib/store";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  data() {
    return {
      lessons: [],
      id: null,
      subject: null,
      lessonAttendance: [],
      id: null,
      checkIn: null,
      lessonId: null,
      studentCardId: null,
      checkOut: null,
      show: true,
    };
  },

  methods: {
    async getLessons() {
      const response = await axios.get("https://zsatservice.azurewebsites.net/api/Lessons");
      this.lessons = await response.data;
    },

    async getLessonAttendanceById(lessonId) {
      const url = "https://zsatservice.azurewebsites.net/api/Attendances/Filter?lessonId=" + lessonId;
      try {
        const response = await axios.get(url);
        this.lessonAttendance = await response.data;
      } catch (ex) {
        alert(ex.message);
      }
    },
  },

  mounted() {
    this.getLessons();
  },

  components: {
    Navbar,
  },
};
</script>
