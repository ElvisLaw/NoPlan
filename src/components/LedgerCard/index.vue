<template>
  <div class="ledger-card" :class="{ selected }" @click="$emit('click')">
    <div class="ledger-icon" v-if="icon">
      <img :src="iconSrc" :alt="name" />
    </div>

    <div class="ledger-header">
      <h3 class="ledger-name">{{ name }}</h3>
    </div>

    <div class="ledger-footer">
      <div class="balance-label">当前余额</div>
      <div class="balance-amount">¥ {{ formattedBalance }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import './index.less'

import personalIcon from '@/assets/icons/ledger-personal.svg'
import familyIcon from '@/assets/icons/ledger-family.svg'
import travelIcon from '@/assets/icons/ledger-travel.svg'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
  selected: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])

const iconSrc = computed(() => {
  const iconMap = {
    personal: personalIcon,
    family: familyIcon,
    travel: travelIcon,
  }
  return iconMap[props.icon] || null
})

const formattedBalance = computed(() => {
  return props.balance.toLocaleString('zh-CN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
})
</script>
