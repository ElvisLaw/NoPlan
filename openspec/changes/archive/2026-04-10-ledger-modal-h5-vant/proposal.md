## Why

现有的新建账本弹窗在 H5 移动端体验不佳，需要使用 Vant UI 的 Popup 组件来获得更好的移动端适配和交互体验。

## What Changes

- 安装 Vant UI 库
- 将自定义弹窗替换为 Vant Popup 组件
- 优化 H5 端的底部弹出样式
- 保持 PC 端的正常显示

## Capabilities

### New Capabilities

- **Vant Popup 集成**: 使用 Vant 的 Popup 组件实现跨平台兼容
- **H5 底部弹出**: 在移动端从底部弹出，与移动端交互习惯一致

### Modified Capabilities

- **新建账本弹窗**: 改用 Vant Popup 实现，支持 H5 和 PC 自适应

## Impact

- `package.json`: 添加 vant 依赖
- `src/components/CreateLedgerModal/index.vue`: 重构使用 Vant Popup
- `src/components/CreateLedgerModal/index.less`: 简化样式，依赖 Vant 主题
- `src/main.js` 或 `src/main.ts`: 可能需要引入 Vant 样式
