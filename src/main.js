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

// Directives
Vue.directive('highlight', {
  bind(el, binding, vnode){
    // This is to hard code a value that will not need to be changed 
    // EG: <p v-highlight></p>
    //el.style.backgroundColor = 'green';

    // This is to allow custom content to be included inside the HTML tag and v-highlight attribute 
    // EG: <p v-highlight="aVueDataVariable"></p>
    el.style.backgroundColor = binding.value;
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
