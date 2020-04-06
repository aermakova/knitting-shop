<template>
  <div id="app">
    <AppHeader></AppHeader>
    <transition name="slide-fade">
      <router-view/>
    </transition>
    <LogOut></LogOut>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </div>
</template>

<script>

import AppHeader from "@/components/Header/AppHeader";
import SignIn from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import LogOut from "@/components/Auth/LogOut";
export default {
  name: 'App',
  components: {
    LogOut,
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
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  /*.slide-fade-leave-active {*/
  /*  transition: all .1s ease;*/
  /*}*/
  .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateY(100px);
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .slide-fade-enter {
    transform: translateY(-100px);
    opacity: 0;
    position: relative;
    left: 0;
    top: 0;
  }
</style>
