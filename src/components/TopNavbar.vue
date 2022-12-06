

<template>


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#" style="margin-left: 20px;">ZSAT</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/" class="nav-link px-2 active" aria-current="page">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/sign-up/" class="nav-link">Sign up</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" v-if="userStore.user">Welcome {{ userStore.user.userName }}</a>
      </li>
      
    </ul>

  </div>
</nav>


</template>

<script>
import { useUserStore } from '../lib/store';
export default {
  setup() {
    const userStore = useUserStore;
    return { userStore };
  },
};
</script>