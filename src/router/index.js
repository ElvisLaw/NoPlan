import { createRouter, createWebHistory } from 'vue-router'
import LedgerSelectionView from '../views/LedgerSelectionView/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ledger-selection',
      component: LedgerSelectionView,
    },
  ],
})

export default router
