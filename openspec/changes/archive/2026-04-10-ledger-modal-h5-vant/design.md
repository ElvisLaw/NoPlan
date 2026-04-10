## Context

需要将现有的自定义弹窗替换为 Vant UI 的 Popup 组件，以获得更好的跨平台兼容性和移动端体验。

## Goals / Non-Goals

**Goals:**

- 安装 Vant UI 4.x 版本
- 使用 Vant Popup 替代自定义弹窗
- PC 端居中显示，H5 端底部弹出
- 支持 Vant 的主题定制
- 保留原有的表单功能（图标选择、名称输入、类型选择）

**Non-Goals:**

- 不使用 Vant 的其他组件（Field, Button 等）
- 不完全依赖 Vant 样式，保持原有设计风格

## Decisions

### Decision 1: 使用 Vant 4.x

选择 Vant 4.x 版本，与 Vue 3 兼容性好

### Decision 2: position 属性实现不同位置

- PC: `position: 'center'` 居中显示
- H5: `position: 'bottom'` 底部弹出

### Decision 3: 条件渲染 H5/PC 样式

使用 CSS media query 或 Vant 的 `close-on-click-overlay` 和 `round` 属性

### Decision 4: 保留图标 SVG

Vant 不提供图标，继续使用内联 SVG 图标
