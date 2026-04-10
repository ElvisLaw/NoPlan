<template>
  <nav class="bottom-navigation">
    <template v-for="item in menuItems" :key="item.key">
      <button v-if="item.isAdd" class="add-button" @click="$emit('add')">
        <i class="icon icon-plus"></i>
      </button>
      <div v-else class="nav-item" :class="{ active: activeItem === item.key }">
        <i :class="['icon', activeItem === item.key ? item.activeIconClass : item.iconClass]"></i>
        <span class="nav-label">{{ item.label }}</span>
      </div>
    </template>
  </nav>
</template>

<script setup>
defineOptions({
  name: 'BottomNavigation',
})

defineProps({
  activeItem: {
    type: String,
    default: 'dashboard',
  },
})

defineEmits(['add'])

const menuItems = [
  { key: 'dashboard', label: '仪表盘', iconClass: 'icon-nav-dashboard', activeIconClass: 'icon-nav-dashboard-active' },
  // { key: 'history', label: '历史', iconClass: 'icon-nav-history' },
  { key: 'add', isAdd: true },
  // { key: 'statistics', label: '统计', iconClass: 'icon-nav-statistics' },
  { key: 'settings', label: '设置', iconClass: 'icon-nav-settings' },
]
</script>

<style src="./index.less"></style>
