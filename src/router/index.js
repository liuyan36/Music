import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Search from '../views/Search/Search.vue'

const Songlist = () => import('../views/Songlist/songlist.vue')
const Artists = () => import('../views/Artists/Artists.vue')
const Top = () => import('../views/Top/top.vue')
const Mine = () => import('../views/Mine/mine.vue')
const Player = () => import('../views/Player/player.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/songlist',
    name: 'Songlist',
    component: Songlist
  },
  {
    path: '/artists',
    name: 'Artists',
    component: Artists
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/player',
    name: 'Player',
    component: Player
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
