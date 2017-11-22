import Vue from 'vue'

// Vue router
import Router from 'vue-router'
Vue.use(Router)

// Vue pages
import home from '../pages/home.vue'
import declarativeRendering from '../pages/declarative-rendering.vue'
import loops from '../pages/loops.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/declarative-rendering',
      name: 'declarativeRendering',
      component: declarativeRendering
    },
    {
      path: '/loops',
      name: 'loops',
      component: loops
    }
  ]
})
