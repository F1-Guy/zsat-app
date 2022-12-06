
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
      userName: "",
      password: "",
    };
  },

  methods: {
    async register() {
      await this.userStore.signUp(this.userName, this.password);
      console.log(this.userStore.user.userName);
    },
  },

  components: {
    Navbar
  },
};
</script> 