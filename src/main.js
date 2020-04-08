import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
import firebase from "firebase"
import 'firebase/firestore'
import firebaseConfig from './config/firebase'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false;

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
Vue.prototype.$db = db;
db.settings({});
firebase.analytics();

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    let vm = this;
    this.$store.dispatch('LOAD_PRODUCTS');
    firebase.auth().onAuthStateChanged(function(user) {
      vm.$store.dispatch('STATE_CHANGED', user);
    });
  }
}).$mount('#app');
