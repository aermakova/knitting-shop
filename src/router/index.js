import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ProductPage from "@/views/ProductPage";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'product-page',
    component: ProductPage,
    props: true
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: "/"
});

export default router
