import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Recipes from '../views/Recipes.vue'
import HealthAnalysis from '../views/HealthAnalysis.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  /*{
    path: '/recipes',
    name: 'recipes',
    component: Recipes
  },*/
  {
    path: '/healthAnalysis',
    name: 'healthAnalysis',
    component: HealthAnalysis
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router // Exports router from scripts; then imported from src/main.js
