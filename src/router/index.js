import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Products from "@/views/Products";
import Product from "@/views/Product";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: "/"
});

export default router
