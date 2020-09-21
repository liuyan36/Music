import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeSoftware from '@/components/HomeList/HomeSoftware'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/homesoftware',
      name: 'HomeSoftware',
      component: HomeSoftware,
      // children: [
      //   {
      //     path: '/homesoftware/cent1',
      //     component: 'HomeSoftwareCent1'
      //   },
      //   {
      //     path: '/homesoftware/cent2',
      //     component: 'HomeSoftwareCent2'
      //   },
      //   {
      //     path: '/homesoftware/cent3',
      //     component: 'HomeSoftwareCent3'
      //   },
      //   {
      //     path: '/homesoftware/cent4',
      //     component: 'HomeSoftwareCent'
      //   },
      //   {
      //     path: '/homesoftware/cent5',
      //     component: 'HomeSoftwareCent5'
      //   }
      // ]
    }
  ]
})
