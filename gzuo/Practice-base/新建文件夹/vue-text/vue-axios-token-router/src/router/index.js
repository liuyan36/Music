import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Music from "@/pages/Music"
import News from "@/pages/News"
import UCenter from "@/pages/UCenter"
import NotFound from "@/pages/NotFound"
import Layout from "@/pages/layout"

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: "/",
      component:Layout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/music',
          name: 'Music',
          component: Music
        },
        {
          path: '/news',
          name: 'News',
          component: News
        },
        {
          path: '/ucenter',
          name: 'UCenter',
          component: UCenter,
          meta:{
            isLogin:true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router