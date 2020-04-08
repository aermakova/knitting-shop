import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Products from "@/views/Products";
import Product from "@/views/Product";
import About from "@/views/About";
import Admin from "@/views/admin/Admin";
import store from '@/store.js'

Vue.use(VueRouter);

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isUserAuthenticated) {
    next();
    return
  }
  next('/');
};
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
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter: ifAuthenticated
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  base: "/"
});


export default router
