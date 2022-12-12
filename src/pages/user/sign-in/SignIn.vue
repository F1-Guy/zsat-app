<template src="./sign-in.html">
</template>

<style>

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
        },
    },

    components: {
        Navbar
    },
};

</script> 