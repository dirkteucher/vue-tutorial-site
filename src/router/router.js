import Vue from 'vue'

// Vue router
import Router from 'vue-router'
Vue.use(Router)

// Vue pages
import home from '../pages/home.vue'
import secondPage from '../pages/secondPage.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/secondPage',
      name: 'secondPage',
      component: secondPage
    }
  ]
})
