import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsP from '../views/ProductsProducts.vue'
import PastOrders from '../views/PastOrders'

const routes = [
  {
    path: '/',
    name: 'HomeHome',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Products-Pa',
    component: ProductsP
  },
  {
    path: '/past-orders',
    name: 'PastOrders',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
