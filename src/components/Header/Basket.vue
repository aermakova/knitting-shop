<template>
  <div class="header">
    <router-link to="/" class="logo"><strong>На крючке</strong></router-link>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/" class="nav-link">Главная</router-link></li>
        <li class="nav-item"><router-link to="/post" class="nav-link">Пост</router-link></li>
      </ul>
    </nav>


  </div>
</template>

<script>
    export default {
        props: {
        },
    };
</script>

<style>
  .header{
    display: flex;
  }
  .nav{
    margin-left: auto;
  }
  .nav-list{
    display: flex;
    padding: 0;
    list-style: none;
  }
  .nav-link{
    color: #342f2f;
    transition: all .3s ease;
    line-height: 48px;
    text-decoration: none;
    display: block;
    padding: 0 1.5625rem;
    position: relative;
  }
  .logo{
    font-size: 1.6875rem;
    line-height: 1.2963;
    color: #222;
    text-transform: uppercase;
    text-decoration: none;
  }
</style>
