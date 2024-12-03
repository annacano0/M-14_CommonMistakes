import { createRouter, createWebHistory } from 'vue-router'
//import AboutView from '../views/AboutView.vue'
//import OtherExamplesView from '@/views/OtherExamplesView.vue'
import HomeView from '@/views/HomeView.vue'
/*
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
        path: '/examples',
        name: 'examples',
        component: OtherExamplesView,
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
    },
  ],
})

export default router*/

const routes=[
  {path:'/', name: 'Home', component:HomeView},
  {path:'/desti/:id', name:'desti', component:()=>import('../components/exemplesRouter/Desti.vue')},
]

const router=createRouter({
  history: createWebHistory(),
  routes
})

export default router