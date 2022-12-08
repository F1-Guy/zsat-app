import { createRouter } from "vue-router";
import Homepage from './home/Home.vue';
import SignIn from './user/sign-in/SignIn.vue';
import SignUp from './user/sign-up/SignUp.vue';
import StudentsPage from './students/Students.vue';
import AttendancesPage from './attendances/Attendances.vue';

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
        path: '/attendances/',
        component: AttendancesPage
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
