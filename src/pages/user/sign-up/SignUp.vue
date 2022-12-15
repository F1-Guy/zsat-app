
<template src="./sign-up.html">
</template>

<style scoped src="./sign-up.css">

</style>

<script>
import { useUserStore } from '../../../lib/store';
import Navbar from '../../../components/Navbar.vue';

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  data() {
    return {
      fullName: null,
      username: null,
      password: null,
      isLoading: false,
      color: "#0d6efd",
    };
  },

  methods: {
    async register() {
      this.isLoading = true;
      await this.userStore.signUp(this.username, this.password, this.fullName);
      this.isLoading = false;
    },
  },

  components: {
    Navbar
  },
};
</script> 