import Vue from 'vue'
import App from './App.vue'

// Router
import router from './router/router.js';
Vue.use(router);


// Vue Material design
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import '../node_modules/vuetify/dist/vuetify.min.css';


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
