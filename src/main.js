import Vue from 'vue'
import App from './App.vue'

// Router
import router from './router/router.js';
Vue.use(router);


// Components
import headermain from './components/header.vue'
Vue.component('headermain', headermain);


// Vue Material design
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import '../node_modules/vuetify/dist/vuetify.min.css';


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
