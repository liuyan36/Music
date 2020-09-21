import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../view/Home/Home.vue')
const Category = () => import('../view/Category/Category.vue')
const Profile = () =>  import('../view/Profile/profile.vue')
const CategoryScenery = () => import('../view/Category/CategoryScenery/CategoryScenery.vue')
const CategoryAnime = () => import('../view/Category/CategoryAnime/CategoryAnime.vue')
const CategoryReality = () => import('../view/Category/CategoryReality/CategoryReality.vue')


Vue.use(VueRouter)

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      component: Category,
      children: [
        {
          path: '/category/scenery',
          component: CategoryScenery
        },
        {
          path: '/category/anime',
          component: CategoryAnime
        },
        {
          path: '/category/reality',
          component: CategoryReality
        },
        {
          path: '',
          redirect: '/category/scenery'
        }
      ]
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
