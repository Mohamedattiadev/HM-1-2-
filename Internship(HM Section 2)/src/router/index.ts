import { createRouter, createWebHistory } from "vue-router";
import ProductList from "../pages/ProductList.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import CartPage from "../pages/CartPage.vue";

const routes = [
  { path: "/", name: "home", component: ProductList },
  {
    path: "/product/:id",
    name: "detail",
    component: ProductDetail,
    props: true,
  },
  { path: "/cart", name: "cart", component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
