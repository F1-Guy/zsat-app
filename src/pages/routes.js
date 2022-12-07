import { createRouter } from "vue-router";
import Homepage from './home/Home.vue';
import SignIn from './user/sign-in/SignIn.vue';
import SignUp from './user/sign-up/SignUp.vue';
import StudentsPage from './students/Students.vue';

const routes = [
    {
        path: '/',
        component: SignIn
    },

    {
        path: '/signup/',
        component: SignUp
    },

    {
        path: '/home/',
        component: Homepage
    },

    {
        path: '/students/',
        component: StudentsPage
    }
]

export default function (history) {
    return createRouter({
        history,
        routes
    })
}