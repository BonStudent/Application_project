import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/home.vue'
import Home from './views/home.vue'
import newappcontent from './components/newappcontent.vue'
import application from './components/application.vue'
// import newappcontent from '../components/newappcontent.vue'



const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/newappcontent',
    component: newappcontent,
  },
  {
    path: '/application ',
    component: application,
  },
 
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
