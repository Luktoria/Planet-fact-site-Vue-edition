import { createRouter, createWebHistory } from 'vue-router';
import PlanetDetails from '../components/PlanetDetails.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/planets/mercury'
    },
    {
      path: '/planets/:name',
      name: 'name',
      component: PlanetDetails
    }
  ]
})

export default router
