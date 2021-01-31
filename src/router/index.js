import Vue from 'vue'
import VueRouter from 'vue-router'
import MusicIndex from '../components/MusicIndex.vue'
import Playlist from '../components/Playlist.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MusicIndex',
    component: MusicIndex
  },
  {
    path: '/playlist/:slug',
    component: Playlist
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
