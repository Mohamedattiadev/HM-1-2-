import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [] as any[],
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    totalPrice(state) {
      return state.cart.reduce((sum, item) => sum + item.price, 0);
    },
  },
});
