<template src="./attendances.html"></template>

<style scoped src="./attendances.css">

</style>

<script>
import axios from "axios";
import Navbar from "../../components/Navbar.vue";
import { useUserStore } from "../../lib/store";
import { useToast } from "vue-toastification";

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
      aId: null,
      cardId: "",
      color: "#0d6efd",
    };
  },

  methods: {
    async getAttendances() {
      const response = await axios.get("https://zsatservice.azurewebsites.net/api/attendances");
      this.attendances = await response.data;
    },

    async openModal(attId, sCardId) {
      this.cardId = sCardId;
      this.aId = attId;
    },

    async deleteAttendance() {
      try {
        this.isLoading = true;
        await axios.delete(`https://zsatservice.azurewebsites.net/api/Attendances/${this.aId}`);
        this.getAttendances();
        this.toast.success("You have successfully delete an attendance.");
        this.isLoading = false;
      } catch (error) {
        console.error(error);
        this.toast.error("Something went wrong. Try again.");
        this.isLoading = false;
      }
    },
  },

  async mounted() {
    await this.getAttendances();
    console.log(this.attendances)

    this.attendances.forEach(a => {
      a.checkIn = new Date(a.checkIn);

      if (a.checkOut != null) {
        a.checkOut = new Date(a.checkOut)
      }
    });
  },

  components: {
    Navbar,
  },
};
</script>
