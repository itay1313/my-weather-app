import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Favorites from '../views/Favorites.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/favorites', component: Favorites },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
