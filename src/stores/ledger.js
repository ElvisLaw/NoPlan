import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLedgerStore = defineStore('ledger', () => {
  const ledgers = ref([
    {
      id: 1,
      name: '个人账本',
      balance: 12840.0,
      icon: 'personal',
    },
    {
      id: 2,
      name: '家庭开支',
      balance: 45200.5,
      icon: 'family',
    },
    {
      id: 3,
      name: '旅行基金',
      balance: 8400.0,
      icon: 'travel',
    },
  ])

  const searchQuery = ref('')

  const filteredLedgers = computed(() => {
    if (!searchQuery.value) {
      return ledgers.value
    }
    const query = searchQuery.value.toLowerCase()
    return ledgers.value.filter((ledger) =>
      ledger.name.toLowerCase().includes(query)
    )
  })

  function setSearchQuery(query) {
    searchQuery.value = query
  }

  function selectLedger(id) {
    // Navigate to ledger detail - implementation depends on routing
    console.log('Selected ledger:', id)
  }

  function addLedger(ledger) {
    const newId = Math.max(...ledgers.value.map(l => l.id), 0) + 1
    ledgers.value.push({
      id: newId,
      name: ledger.name,
      balance: 0,
      icon: ledger.icon,
      type: ledger.type,
    })
    console.log('Added ledger:', ledger)
  }

  return {
    ledgers,
    searchQuery,
    filteredLedgers,
    setSearchQuery,
    selectLedger,
    addLedger,
  }
})
