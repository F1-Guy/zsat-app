<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ZSAT</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" v-if="userStore.authenticated">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/attendances" class="nav-link" v-if="userStore.authenticated">Attendances</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/graph" class="nav-link" v-if="userStore.authenticated">Graph</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/todaysAttendance" class="nav-link" v-if="userStore.authenticated">TodaysAttendance</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/students" class="nav-link" v-if="userStore.authenticated">Students</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/lessons" class="nav-link" v-if="userStore.authenticated">Lessons</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signin" class="nav-link" v-if="!userStore.authenticated">Signin</router-link>
          </li>
        </ul>
      </div>
      <div class="navbar-collapse collapse w-100 order-1 dual-collapse2">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" v-if="userStore.user">Welcome {{ userStore.user.userName }}</a>
          </li>
          <li class="nav-item">
            <router-link to="/" class="btn btn-danger" v-if="userStore.user" v-on:click="logout">Logout</router-link>
          </li>
          x
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useUserStore } from "../lib/store";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const userStore = useUserStore();
    const toast = useToast();
    return { userStore, toast };
  },

  methods: {
    logout() {
      this.userStore.user = null;
      this.userStore.authenticated = false;
      this.toast.success("You are now logged out.")
      this.$router.push( {name: "SignIn"} );
    },
  },
};
</script>
