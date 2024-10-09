import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Overview from '@/components/Biz/Overview.vue'
import Information from '@/components/Biz/Information.vue'
import Project from '@/components/Biz/Project.vue'
import Venue from '@/components/Biz/Venue.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/#overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/#information',
    name: 'Information',
    component: Information
  },
  {
    path: '/#project',
    name: 'Project',
    component: Project
  },
  {
    path: '/#venue',
    name: 'Venue',
    component: Venue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router
