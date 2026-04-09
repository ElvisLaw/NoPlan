## Why

用户需要一个账本选择页面来开始记账流程。页面需要展示多个账本选项，让用户快速选择或搜索目标账本，同时提供底部导航方便切换其他功能模块。

## What Changes

- 创建"选取账本"首页视图
- 实现 iOS 风格的搜索栏
- 实现 Bento Grid 布局的账本卡片展示
- 实现悬浮式底部导航栏（毛玻璃效果）
- 适配 PC 和 H5 响应式布局

## Capabilities

### New Capabilities

- `ledger-selection-page`: 账本选择页面，用户可浏览、搜索、选择账本
- `search-bar`: iOS 风格搜索组件，支持按名称筛选账本
- `ledger-card`: 账本卡片组件，展示账本名称和余额
- `bottom-navigation`: 悬浮底部导航栏，包含仪表盘、历史、统计、设置和添加按钮
- `responsive-layout`: 响应式布局，适配 PC 和 H5

### Modified Capabilities

- <!-- 暂无 -->

## Impact

- `src/views/LedgerSelectionView.vue`: 新建账本选择页面
- `src/components/SearchBar.vue`: 新建搜索栏组件
- `src/components/LedgerCard.vue`: 新建账本卡片组件
- `src/components/BottomNavigation.vue`: 新建底部导航组件
- `src/router/index.js`: 添加路由配置
- `src/stores/ledger.js`: 新建账本状态管理
