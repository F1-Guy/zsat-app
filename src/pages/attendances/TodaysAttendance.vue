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
    };
  },

  methods: {
    async getAttendances() {
      const response = await axios.get("https://zsatservice.azurewebsites.net/api/Attendances/GetTodaysAttendance");
      this.checkedIn = await response.data.item1;
      this.notCheckedIn = await response.data.item2;
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
