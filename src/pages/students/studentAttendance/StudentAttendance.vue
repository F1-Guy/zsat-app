<template src="./studentAttendance.html"></template>

<script>
import axios from "axios";
import Navbar from "../../../components/Navbar.vue";

export default {
  data() {
    return {
      studentCardId: this.$route.params.cardId,
      name: "",
      attendances: [],
    };
  },
  async created() {
    this.studentCardId = this.$route.params.cardId;
    await this.getStudentAttendances();
  },

  methods: {
    async getStudentAttendances() {
      const response = await axios.get("http://localhost:5246/api/Students/GetStudentAttendances?cardId=" + this.studentCardId);
      const found = await axios.get("http://localhost:5246/api/Students/" + this.studentCardId);
      this.attendances = await response.data;
      this.name = await found.data.name;
    },
  },

  components: {
    Navbar,
  },
};
</script>
