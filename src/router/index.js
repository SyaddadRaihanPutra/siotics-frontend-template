import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HeroView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/nextc',
      name: 'nextc',
      beforeEnter() {location.href = 'https://next.siotics.org/'}
    },
    {
      path: '/signin',
      name: 'signin',
      component: LoginView,
      meta: { hideNavbar: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: RegisterView,
      meta: { hideNavbar: true }
    }
  ]
})

export default router
