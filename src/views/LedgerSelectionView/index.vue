<template>
  <div class="ledger-selection-page">
    <header class="header">
      <h1 class="title">选取账本</h1>
    </header>

    <main class="main-content">
      <SearchBar v-model="searchQuery" />

      <div class="ledger-grid">
        <LedgerCard
          v-for="ledger in filteredLedgers"
          :key="ledger.id"
          :name="ledger.name"
          :balance="ledger.balance"
          :icon="ledger.icon"
          :selected="selectedLedgerId === ledger.id"
          @click="selectLedger(ledger.id)"
        />
      </div>

      <div v-if="filteredLedgers.length === 0" class="empty-state">
        <p>没有找到匹配的账本</p>
      </div>
    </main>

    <BottomNavigation :active-item="activeNav" @add="onAddClick" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLedgerStore } from '../../stores/ledger'
import SearchBar from '../../components/SearchBar/index.vue'
import LedgerCard from '../../components/LedgerCard/index.vue'
import BottomNavigation from '../../components/BottomNavigation/index.vue'
import './index.less'

const ledgerStore = useLedgerStore()

const searchQuery = ref('')
const selectedLedgerId = ref(null)
const activeNav = ref('dashboard')

const filteredLedgers = computed(() => {
  if (!searchQuery.value) {
    return ledgerStore.ledgers
  }
  const query = searchQuery.value.toLowerCase()
  return ledgerStore.ledgers.filter((ledger) =>
    ledger.name.toLowerCase().includes(query)
  )
})

function selectLedger(id) {
  selectedLedgerId.value = id
  ledgerStore.selectLedger(id)
  console.log('Navigate to ledger:', id)
}

function onAddClick() {
  console.log('Add new ledger/transaction')
}
</script>
