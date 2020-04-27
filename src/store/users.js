export default {
  state: {
    basketCount: 0,
    basketProducts: []
  },
  mutations: {
    SET_BASKET_PRODUCTS(state, payload) {
      state.basketProducts = payload;
    },
    SET_BASKET_COUNT(state) {
      state.basketCount = state.basketProducts.length;
    },
  },
  getters: {
    GET_BASKET_PRODUCTS: (state) => state.basketProducts,
    GET_BASKET_COUNT: (state) => state.basketCount,
  }
}
