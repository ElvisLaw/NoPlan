<template>
  <van-popup
    v-model:show="showPopup"
    :position="isH5 ? 'bottom' : 'center'"
    round
    :close-on-click-overlay="true"
    :style="{ width: isH5 ? '100%' : '380px', maxWidth: '100%' }"
    teleport="body"
    @close="onClose"
  >
    <div class="modal-container">
      <h2 class="modal-title">新建账本</h2>

      <div class="form-section">
        <label class="form-label">选择图标</label>
        <div class="icon-grid">
          <button
            v-for="icon in iconOptions"
            :key="icon.id"
            class="icon-option"
            :class="{ selected: selectedIcon === icon.id }"
            @click="selectedIcon = icon.id"
          >
            <span class="icon-inner" :style="{ background: icon.bgColor }">
              <svg class="icon-svg" viewBox="0 0 24 24" fill="none" :stroke="selectedIcon === icon.id ? '#005bc1' : '#595f6a'" stroke-width="1.5">
                <path :d="icon.path" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div class="form-section">
        <label class="form-label">账本名称</label>
        <input
          v-model="ledgerName"
          type="text"
          class="form-input"
          placeholder="请输入账本名称"
        />
      </div>

      <div class="form-section">
        <label class="form-label">账本类型</label>
        <div class="select-wrapper" @click="showTypeDropdown = !showTypeDropdown">
          <span class="select-value" :class="{ placeholder: !selectedType }">{{ selectedType || '请选择账本类型' }}</span>
          <svg class="select-arrow" :class="{ rotated: showTypeDropdown }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m6 9 6 6 6-6" />
          </svg>
          <Transition name="dropdown">
            <div v-if="showTypeDropdown" class="dropdown-menu">
              <div
                v-for="type in typeOptions"
                :key="type"
                class="dropdown-item"
                :class="{ active: selectedType === type }"
                @click.stop="selectType(type)"
              >
                {{ type }}
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="modal-actions">
        <button class="btn-cancel" @click="onCancel">取消</button>
        <button class="btn-create" :disabled="!canCreate" @click="onCreate">创建</button>
      </div>
    </div>
  </van-popup>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { Popup as vanPopup } from 'vant'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:visible', 'create'])

// Detect H5/mobile
const isH5 = ref(false)

// Icon options with SVG paths
const iconOptions = [
  { id: 'wallet', bgColor: '#f0f4ff', path: 'M3 10h18v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10Z' },
  { id: 'home', bgColor: '#fff4e5', path: 'm3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z' },
  { id: 'plane', bgColor: '#e5f7ff', path: 'M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19.5 2.5c-1.5-1.5-3.5-1.5-5 0L12 6l-1.8-1.8C9 2.8 7 2.8 5.5 4.5c-1.5 1.5-1.5 3.5 0 5L12 17l3.5-3.5 2 2Z' },
  { id: 'food', bgColor: '#fff0f0', path: 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8ZM6 1v3M10 1v3M14 1v3' },
  { id: 'car', bgColor: '#f0fff0', path: 'M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2M7 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' },
  { id: 'shopping', bgColor: '#fff5f5', path: 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4ZM3 6h18M16 10a4 4 0 0 1-8 0' },
  { id: 'medical', bgColor: '#f5f0ff', path: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' },
  { id: 'education', bgColor: '#fffff0', path: 'M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5' },
]

const typeOptions = ['个人', '家庭', '公司', '旅行', '其他']

const ledgerName = ref('')
const selectedIcon = ref('wallet')
const selectedType = ref('')
const showTypeDropdown = ref(false)

const showPopup = computed({
  get: () => props.visible,
  set: (val) => emit('update:visible', val),
})

const canCreate = computed(() => {
  return ledgerName.value.trim() && selectedType.value
})

function selectType(type) {
  selectedType.value = type
  showTypeDropdown.value = false
}

function onCancel() {
  showPopup.value = false
  resetForm()
}

function onClose() {
  resetForm()
}

function onCreate() {
  if (!canCreate.value) return
  emit('create', {
    name: ledgerName.value.trim(),
    icon: selectedIcon.value,
    type: selectedType.value,
  })
  showPopup.value = false
  resetForm()
}

function resetForm() {
  ledgerName.value = ''
  selectedIcon.value = 'wallet'
  selectedType.value = ''
  showTypeDropdown.value = false
}

watch(() => props.visible, (val) => {
  if (!val) {
    resetForm()
  }
})

// Detect mobile on mount
if (typeof window !== 'undefined') {
  isH5.value = window.innerWidth <= 768
  window.addEventListener('resize', () => {
    isH5.value = window.innerWidth <= 768
  })
}
</script>

<style src="./index.less"></style>
