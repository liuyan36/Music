import Vue from 'vue'
import Router from 'vue-router'
import Home from '../viwe/Home/home.vue'
import Search from '../viwe/Search/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
