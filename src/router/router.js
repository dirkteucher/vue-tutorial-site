import Vue from 'vue'

// Vue router
import Router from 'vue-router'
Vue.use(Router)

// Vue pages
import home from '../pages/home.vue'
import declarativeRendering from '../pages/declarative-rendering.vue'
import loops from '../pages/loops.vue'
import bindingAttributesClassnames from '../pages/binding-attributes-classnames.vue'
import computedProperties from '../pages/computed-properties.vue'
import slots from '../pages/slots.vue'
import axios from '../pages/axios.vue'
import filters from '../pages/filters.vue'
import vModel from '../pages/v-model-2-way-binding.vue';

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
    },
    {
      path: '/bindingAttributesClassnames',
      name: 'bindingAttributesClassnames',
      component: bindingAttributesClassnames
    },
    {
      path: '/computedProperties',
      name: 'computedProperties',
      component: computedProperties
    },
    {
      path: '/slots',
      name: 'slots',
      component: slots
    },
    {
      path: '/axios',
      name: 'axios',
      component: axios
    },
    {
      path: '/filters',
      name: 'filters',
      component: filters
    },
    {
      path: '/vModel',
      name: 'vModel',
      component: vModel
    }
  ]
})
