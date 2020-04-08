import Vue from 'vue';

export default {
  plugins: [
  ],
  state: {
    products: [],
    error: null,
    newProduct: {}
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    ADD_NEW_PRODUCT(state, payload) {
      state.newProduct = payload;
    },
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
    },
    ADD_NEW_PRODUCT(state, payload) {
      let productPath = payload.title;
      Vue.prototype.$db.collection("products")
          .doc(productPath)
          .set(Object.assign({}, payload))
          .then(function() {
            state.commit('ADD_NEW_PRODUCT', payload);
            console.log('Новый товар добавлен');
          })
          .catch(function(error) {
            console.error("Ошибка: ", error);
          });
    }
  },
  getters: {
    GET_PRODUCTS: (state) => state.products,
  },
}
