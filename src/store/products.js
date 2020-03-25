import Vue from 'vue';

export default {
  plugins: [
  ],
  state: {
    products: [],
    error: null,
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
          products.push(product);
        });
        ctx.commit('SET_PRODUCTS', products)
      });
    }
  },
  getters: {
    GET_PRODUCTS: (state) => state.products,
  }
}
