<template>
  <div class="header">
    <router-link to="/" class="logo"><strong>На крючке</strong></router-link>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/" class="nav-link">Главная</router-link></li>
        <li class="nav-item"><router-link to="/products" class="nav-link">Игрушки</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link">Обо мне</router-link></li>
        <li class="nav-item"><router-link to="/contacts" class="nav-link">Контакты</router-link></li>
        <li class="nav-item"><router-link to="/post" class="nav-link">Пост</router-link></li>
        <li class="nav-item"><router-link to="/registration" class="nav-link">Регистрация</router-link></li>
        <li class="nav-item"><router-link to="/login" class="nav-link">Войти</router-link></li>
        <li class="nav-item"><router-link to="/profile" class="nav-link">Мой профиль</router-link></li>
        <li class="nav-item"><router-link to="/admin" class="nav-link">Админ</router-link></li>
        <li class="nav-item"><router-link to="/logout" class="nav-link">Выйти</router-link></li>
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
    align-items: center;
    justify-content: center;
    margin: 0;
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
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
