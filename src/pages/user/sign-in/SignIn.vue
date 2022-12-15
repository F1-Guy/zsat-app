<template src="./sign-in.html">
</template>

<style>

</style>

<script>
import { useUserStore } from '../../../lib/store';
import Navbar from '../../../components/Navbar.vue';
import { useToast } from 'vue-toastification';

export default {
    setup() {
        const userStore = useUserStore();
        const toast = useToast();
        return { userStore, toast };
    },

    data() {
        return {
            username: null,
            password: null,
            isLoading: false,
            color: "#0d6efd",
        };
    },

    methods: {
        async signin() {
            this.isLoading = true;
            await this.userStore.signIn(this.username, this.password);
            this.isLoading = false;
            this.toast.success("You have successfully logged in to ZSAT.")
            this.$router.push( {name: "Home"} );

        },
    },

    components: {
        Navbar
    },
};

</script> 