<template>
  <header class="header">
    <div class="header-top" v-if="isUserAuthenticated">
      <div class="container">
        <div class="nav-buttons">
          <b-button class="nav-btn" size="sm" v-b-modal.modal-logout>Выйти</b-button>
          <router-link class="nav-btn nav-link" to="/admin">Добавить товар</router-link>
          <router-link class="nav-btn nav-link" to="/">Удалить товар</router-link>
          <router-link class="nav-btn nav-link" to="/admin">Редактировать товар</router-link>
        </div>
        <small>{{ user }}</small>
      </div>
    </div>
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
        </nav>
        <Basket></Basket>
      </div>
    </div>
  </header>
</template>

<script>
  import Basket from './Basket';
    export default {
      props: {
      },
      computed: {
        isUserAuthenticated() {
          return this.$store.getters.isUserAuthenticated
        },
        user() {
          /* let $$ = 7; */
          return this.$store.getters.GET_USER
        }
      },
      components: {
        Basket
      },
    };
</script>

<style lang="scss">
  .header{
    position: relative;
  }
  .header-top{
    background: #2c3e50;
    color: #fff;
    padding: 10px 0;
    text-align: right;
    .nav-link{
      color: #fff;
      line-height: 1;
    }
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
    margin-left: auto;
    width: 300px;
    text-align: right;
    flex-direction: row-reverse;
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
