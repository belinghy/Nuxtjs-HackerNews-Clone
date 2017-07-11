import Vue from 'vue'
import titleMixin from '../util/title'
import * as filters from '../util/filters'

// mixin for handling title
Vue.mixin(titleMixin)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
