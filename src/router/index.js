import { createRouter, createWebHistory } from 'vue-router'
import index_home from '../views/IndexHome.vue'
import text_to_morse from '../views/TextToMorse.vue'
import visit_car from '../views/VisitCar.vue'
import fizz_buzz from '../views/FizzBuzz.vue'
import anagram from '../views/AnagraM.vue'
import prime_numbers from '../views/PrimeNumbers.vue'
import area_of_polygon from '../views/AreaOfPolygon.vue'
import memory_game from '../views/MemoryGame.vue'

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
  },
  {
    path: '/fizz-buzz',
    name: 'FizzBuzz',
    component: fizz_buzz
  },
  {
    path: '/anagrama',
    name: 'Anagram',
    component: anagram
  },
  {
    path: '/numeros-primos',
    name: 'PrimeNumbers',
    component: prime_numbers
  },
  {
    path: '/area-de-un-poligono',
    name: 'AreaOfPolygon',
    component: area_of_polygon
  },
  {
    path: '/juego-de-memoria',
    name: 'MemoryGame',
    component: memory_game
  }
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