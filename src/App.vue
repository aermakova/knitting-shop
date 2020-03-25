<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view/>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
</template>

<script>

import AppHeader from "@/components/Header/AppHeader";
import SignIn from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
export default {
  name: 'App',
  components: {
    AppHeader,
    SignIn,
    SignUp
  }
}
</script>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body{
    font-family: Noto Sans,Arial,sans-serif;
    color: #2e2e2e;
  }
  .container{

  }
</style>
