import { createRouter, createWebHistory } from 'vue-router'
import index_home from '../views/IndexHome.vue'
import text_to_morse from '../views/TextToMorse.vue'
import visit_car from '../views/VisitCar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: index_home
  },
  {
    path: '/texto-a-morse',
    name: 'TextToMorse',
    component: text_to_morse
  },
  {
    path: '/visita-de-carros',
    name: 'VisitCar',
    component: visit_car
  }
  
  // Puedes agregar más rutas aquí
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('@/views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router 