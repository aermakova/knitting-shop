import Vue from 'vue';
import Vuex from 'vuex';
import productsModule from './store/products'
import generalModule from './store/general'
import usersModule from './store/users'
import authModule from './store/auth'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: [
    generalModule,
    productsModule,
    usersModule,
    authModule,
  ],
})
