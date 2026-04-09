<template>
  <nav class="bottom-navigation">
    <div class="nav-item" :class="{ active: activeItem === 'dashboard' }">
      <span class="icon icon-dashboard"></span>
      <span class="nav-label">仪表盘</span>
    </div>
    <div class="nav-item" :class="{ active: activeItem === 'history' }">
      <span class="icon icon-history"></span>
      <span class="nav-label">历史</span>
    </div>
    <button class="add-button" @click="$emit('add')">
      <span class="icon icon-nav-add"></span>
    </button>
    <div class="nav-item" :class="{ active: activeItem === 'statistics' }">
      <span class="icon icon-statistics"></span>
      <span class="nav-label">统计</span>
    </div>
    <div class="nav-item" :class="{ active: activeItem === 'settings' }">
      <span class="icon icon-settings"></span>
      <span class="nav-label">设置</span>
    </div>
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
</script>

<style src="./index.less"></style>
