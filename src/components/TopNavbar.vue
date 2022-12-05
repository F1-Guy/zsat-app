<script>
</script>

<template>
    <nav class="py-2 fixed-top">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><router-link to="/" class="nav-link px-2 active" aria-current="page">Home</router-link></li>
        <li class="nav-item"><router-link to="/sign-up/" class="nav-link px-2">Sign up</router-link></li>
      </ul>
      <div class="flex-shrink-0 dropdown">
        <a href="#" class="d-block text-decoration-none" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false" style="margin-top:5px">
          <img src="/images-cloud/user_account_profile_icon.svg" alt="profile" width="24" height="24" class="rounded-circle">
        </a>
        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" style="">
          <li><router-link class="dropdown-item" to="/sign-in/">Sign-in</router-link></li>
          <li><hr class="dropdown-divider"></li>
        </ul>
      </div>
    </div>
  </nav>
</template>