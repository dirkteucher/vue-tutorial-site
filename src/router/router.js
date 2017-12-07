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
import vModel from '../pages/v-model-2-way-binding.vue'
import watch from '../pages/watch.vue'
import dynamicClasses from '../pages/dynamic-classes.vue'
import progressBar from '../pages/progress-bar.vue'
import ifExample from '../pages/if.vue'
import lists from '../pages/lists.vue'
import refs from '../pages/refs.vue'
import componentsExample from '../pages/components.vue'
import importScripts from '../pages/import-scripts.vue'
import props from '../pages/props.vue'
import propsValidation from '../pages/props-validation.vue'
import emit from '../pages/emit.vue'
import dynamicComponents from '../pages/dynamic-components.vue'

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
    },
    {
      path: '/watch',
      name: 'watch',
      component: watch
    },
    {
      path: '/dynamicClasses',
      name: 'dynamicClasses',
      component: dynamicClasses
    },
    {
      path: '/progressBar',
      name: 'progressBar',
      component: progressBar
    },
    {
      path: '/ifExample',
      name: 'ifExample',
      component: ifExample
    },
    {
      path: '/lists',
      name: 'lists',
      component: lists
    },
    {
      path: '/refs',
      name: 'refs',
      component: refs
    },
    {
      path: '/componentsExample',
      name: 'componentsExample',
      component: componentsExample
    },
    {
      path: '/importScripts',
      name: 'importScripts',
      component: importScripts
    },
    {
      path: '/props',
      name: 'props',
      component: props
    },
    {
      path: '/propsValidation',
      name: 'propsValidation',
      component: propsValidation
    },
    {
      path: '/emit',
      name: 'emit',
      component: emit
    },
    {
      path: '/dynamicComponents',
      name: 'dynamicComponents',
      component: dynamicComponents
    }
    
  ]
})
