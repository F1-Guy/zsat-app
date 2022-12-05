import { createRouter } from "vue-router";
import Homepage from './home/Home.vue';
import { SignUpComponent } from './user';
import { SignInComponent } from './user';

const routes = [
    {
        path: '/',
        component: Homepage
    },

    {
        path: '/sign-up/',
        component: SignUpComponent
    },

    {
        path: '/sign-in/',
        component: SignInComponent
    },
]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}