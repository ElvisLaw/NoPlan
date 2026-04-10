## Context

应用需要一个新建账本的弹窗组件，参考图片中的设计风格：现代、简洁、移动端友好。

## Goals / Non-Goals

**Goals:**

- 创建独立的 CreateLedgerModal 组件
- 实现图标选择、名称输入、类型选择功能
- 表单验证确保数据完整性
- 弹窗动画和过渡效果
- 与现有 LedgerSelectionView 集成

**Non-Goals:**

- 不实现编辑账本功能
- 不实现删除账本功能
- 不实现账本详情页

## Decisions

### Decision 1: 使用 Teleport 渲染到 body

弹窗使用 Vue Teleport 组件渲染到 body，避免层叠上下文问题

### Decision 2: SVG 图标内联实现

图标使用内联 SVG paths，避免外部图标字体依赖

### Decision 3: 响应式设计

弹窗最大宽度 380px，适配移动端和桌面端

### Decision 4: 使用 CSS 变量

样式中使用项目的 variables.less 中的 CSS 变量，保持一致性

### Decision 5: v-model 实现可见性控制

使用 v-model:visible 双向绑定控制弹窗显示/隐藏
