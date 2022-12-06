
<template>
  <TopNavbar />
<div class="container" >
    

<div style="width: 85%; margin:auto;">

    <!-- Section: Design Block -->
<section class="">
    <!-- Jumbotron -->
    <div class="px-4 py-5 px-md-5 text-center text-lg-start" >
      <div class="container">
        <div class="row gx-lg-5 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h1 class="my-5 display-3 fw-bold ls-tight">
              Welcome to <br />
              <span class="text-primary">ZSAT</span>
            </h1>
            <p style="color: hsl(217, 10%, 50.8%)">
              ZSAT (Zealand Student Attendance Tracker) is a platform for tracking students attendances.
            </p>
          </div>
  
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card">
              <div class="card-body py-5 px-md-5">
                <form @submit.prevent="register">
                    <h4>Create an account at ZSAT</h4> <br>
                  <!-- 2 column grid layout with text inputs for the first and last names -->
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline mb-4">
                        <input type="text" id="form3Example1" class="form-control" v-model="userName"/>
                        <label class="form-label" for="form3Example1">First name</label>
                      </div>
                    </div>
                  </div>
  
                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input type="password" id="form3Example4" class="form-control" v-model="password"/>
                    <label class="form-label" for="form3Example4">Password</label>
                  </div>
  
                
  
                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Sign up
                  </button>
  
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
  <!-- Section: Design Block -->
</div>
</div>
</template>

<style scoped src="./sign-up.css"></style>

<script>
import { useUserStore } from '../../../lib/store';
import TopNavbar from '../../../components/TopNavbar.vue';

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  data() {
    return {
      userName: "",
      password: "",
    };
  },

  methods: {
    async register() {
      await this.userStore.signUp(this.userName, this.password);
      console.log(this.userStore.user.userName);
    },
  },

  components: {
    TopNavbar
  },
};
</script> 