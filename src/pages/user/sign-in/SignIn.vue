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
        };
    },

    methods: {
        async signin() {
            await this.userStore.signIn(this.username, this.password);
            console.log(this.userStore.user.username, this.userStore.user.password);
        },
    },

    components: {
        Navbar
    },
};

</script> 