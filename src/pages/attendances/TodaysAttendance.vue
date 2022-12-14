<template src="./todaysAttendance.html"></template>

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
      checkedIn: [],
      notCheckedIn: [],
      isLoading: false,
      student: {
        name: "default",
        cardId: "123456789",
      },
      modalOpen: false,
      color: "#0d6efd",
    };
  },

  methods: {
    async getAttendances() {
      const response = await axios.get("https://zsatservice.azurewebsites.net/api/Attendances/GetTodaysAttendance");
      this.checkedIn = await response.data.item1;
      this.notCheckedIn = await response.data.item2;
    },

    async addAttendance() {
      try {
        this.isLoading = true;
        const result = await axios.post(`https://zsatservice.azurewebsites.net/api/Attendances?cardId=${this.student.cardId}&lessonId=1`);

        this.getAttendances();
        this.toast.success("You have successfully added an attendance.");
        this.isLoading = false;
      } catch (error) {
        console.error(error);
        this.toast.error("Something went wrong. Try again.");
        this.isLoading = false;
      }
      this.cardId = null;
      this.lessonId = null;
    },

    async openModal(sCardId, sName) {
      this.isLoading = true;
      this.student.name = sName;
      this.student.cardId = sCardId;
      console.log(this.student.name);
      this.isLoading = false;
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
