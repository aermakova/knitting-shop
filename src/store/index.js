import Vue from 'vue';
import Vuex from 'vuex';
//import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
  ],
  state: {
    products: [],
    error: null,
    config: null
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    }
  },
  actions: {
    LOAD_PRODUCTS(ctx) {
      Vue.prototype.$db.collection("products").get().then((querySnapshot) =>{
        let products = [];
        querySnapshot.forEach((doc) =>{
          let product = doc.data();
          product.id = doc.id;
          products.push(product);
        });
        ctx.commit('SET_PRODUCTS', products)
      });
    }
  },
  getters: {
    GET_PRODUCTS: (state) => state.products,
  }
})
