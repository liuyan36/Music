import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home/Home.vue'
import Login from '../view/login/Login.vue'
import Ucenten from '../view/ucenten/Ucenten.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/ucenten',
      name: 'Ucenten',
      component: Ucenten,
      meta: {
        isLogin: true
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){
    const token = localStorage.getItem("token");
    if(token){
      next();
    }else{
      next({
        path:"/login"
      })
    }
  }
  next();
})

export default router
