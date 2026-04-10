## Why

用户需要创建一个新的账本，但当前应用中缺少新建账本的交互入口。需要添加一个新建账本弹窗，让用户能够选择图标、输入名称和选择类型来创建新账本。

## What Changes

- 新增 CreateLedgerModal 组件
- 在 LedgerSelectionView 集成弹窗
- 在 ledger store 添加 addLedger 方法

## Capabilities

### New Capabilities

- **新建账本弹窗**: 用户可以创建新账本，选择图标、输入名称、选择类型

### Modified Capabilities

- BottomNavigation 的添加按钮现在可以打开新建账本弹窗

## Impact

- `src/components/CreateLedgerModal/index.vue`: 新建组件
- `src/components/CreateLedgerModal/index.less`: 新建样式
- `src/views/LedgerSelectionView/index.vue`: 集成弹窗
- `src/stores/ledger.js`: 添加 addLedger 方法
