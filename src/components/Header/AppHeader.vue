<template>
  <header class="header">
    <div class="container">
      <div class="header-row">
        <router-link to="/" class="logo"><strong>На крючке</strong></router-link>
        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-item"><router-link to="/" class="nav-link">Главная</router-link></li>
            <li class="nav-item"><router-link to="/products" class="nav-link">Игрушки</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link">Обо мне</router-link></li>
            <li class="nav-item"><router-link to="/contacts" class="nav-link">Контакты</router-link></li>
          </ul>
          <div class="nav-buttons" v-if="!isUserAuthenticated">
            <b-button class="nav-btn" size="sm" variant="warning" v-b-modal.modal-sign-in>Войти</b-button>
            <b-button class="nav-btn" size="sm" variant="warning" v-b-modal.modal-sign-up>Регистрация</b-button>
          </div>
          <div class="nav-buttons" v-else>
            <router-link class="nav-btn nav-link" to="/admin">Админ</router-link>
            <b-button class="nav-btn" v-b-modal.modal-logout>Выйти</b-button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        props: {
        },
        computed: {
          isUserAuthenticated() {
            return false
            //return this.$store.getters.isUserAuthenticated
          },
        }
    };
</script>

<style>
  .header{
    position: relative;
  }
  .header-row{
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
  .nav-buttons{
    display: flex;
    align-items: center;
    margin: -5px 0;
    position: absolute;
    right: 0;
    top: 17px;
  }
  .nav-btn{
    margin: 5px;
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
