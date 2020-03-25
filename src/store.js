import Vue from 'vue';
import Vuex from 'vuex';
import productsModule from './store/products'
import generalModule from './store/general'
import usersModule from './store/users'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: [
    generalModule,
    productsModule,
    usersModule,
  ],
})
