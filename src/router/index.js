import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Product from '../views/Product.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/products/:id', component: Product },
  ],
})

export default router
