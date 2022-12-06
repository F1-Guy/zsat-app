import { createRouter } from "vue-router";
import Homepage from './home/Home.vue';
import SingIn from './user/sign-in/SignIn.vue';
import SignUp from './user/sign-up/SignUp.vue';

const routes = [
    {
        path: '/',
        component: SingIn
    },

    {
        path: '/signup/',
        component: SignUp
    },

    {
        path: '/home/',
        component: Homepage
    },
]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}