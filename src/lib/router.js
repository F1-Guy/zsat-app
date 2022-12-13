import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../pages/home/Home.vue";
import SignIn from "../pages/user/sign-in/SignIn.vue";
import SignUp from "../pages/user/sign-up/SignUp.vue";
import StudentsPage from "../pages/students/Students.vue";
import StudentAttendance from "../pages/students/studentAttendance/StudentAttendance.vue";
import AttendancesPage from "../pages/attendances/Attendances.vue";
import TodaysAttendance from "../pages/attendances/TodaysAttendance.vue";
import GraphPage from '../pages/graph/Graph.vue';
import LessonsPage from "../pages/lessons/Lessons.vue";
import { useUserStore } from "./store";

const routes = [
  {
    path: "/signin/",
    component: SignIn,
  },

  {
    path: "/signup/",
    component: SignUp,
  },

  {
    path: "/",
    component: Homepage,
  },

  {
    path: "/students/",
    component: StudentsPage,
  },

  {
    path: "/attendances/",
    component: AttendancesPage,
  },

  {
    path: "/studentAttendance/:cardId",
    name: "StudentAttendance",
    component: StudentAttendance,
  },

  {
    path: "/lessons/",
    component: LessonsPage,
  },

  {
    path: "/todaysAttendance/",
    component: TodaysAttendance,
  },
  
  {
    path: '/graph/',
    component: GraphPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const store = useUserStore();

  if (store.$state.authenticated) {
    next();
  } else {
    if (to.path !== "/signin/") {
      next({ path: "/signin/" });
    } else {
      next();
    }
  }
});

export default router;
