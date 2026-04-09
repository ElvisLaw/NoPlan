## Context

当前项目是一个新建的 Vue 3 记账应用，使用 Vite + Vue 3 + Vue Router + Pinia 构建。设计稿要求实现"选取账本"首页，需要 iOS 风格的 UI 设计和响应式布局支持。

主要约束：
- 目标平台：PC 和 H5（移动端）
- 技术栈：Vue 3 Composition API
- 设计风格：iOS 风格，圆角16px，毛玻璃效果，简洁现代

## Goals / Non-Goals

**Goals:**
- 实现完整的"选取账本"首页，包含标题、搜索栏、账本卡片网格、底部导航
- iOS 风格 UI 还原设计稿
- 响应式布局适配 PC 和 H5
- 使用 Pinia 管理账本数据状态

**Non-Goals:**
- 实现完整的账本 CRUD 功能（仅展示和选择）
- 实现用户认证系统
- 实现深色模式
- 实现国际化

## Decisions

### Decision 1: 使用 CSS Grid 实现 Bento Grid 布局

采用 CSS Grid 而非 Flexbox 实现账本卡片的 Bento Grid 布局。

**Rationale:**
- CSS Grid 可以更方便地创建等宽列和响应式布局
- 可以通过 `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` 实现自动响应式列数
- 卡片之间的间距控制更精确

**Alternatives considered:**
- Flexbox 布局：需要计算每个卡片的宽度和换行逻辑，响应式处理更复杂

### Decision 2: 底部导航使用 fixed 定位 + backdrop-filter

底部导航使用 `position: fixed` 固定在视口底部，配合 `backdrop-filter: blur()` 实现毛玻璃效果。

**Rationale:**
- iOS 设计规范中的典型做法
- 毛玻璃效果增加视觉层次感
- 固定定位确保导航始终可见

**Alternatives considered:**
- Sticky 定位：在长内容时可能遮挡内容，且毛玻璃效果在滚动时可能闪烁

### Decision 3: 搜索使用客户端实时过滤

搜索功能采用客户端实时过滤，无需请求后端 API。

**Rationale:**
- 首页账本数量有限（设计稿显示3个），客户端过滤足够高效
- 即时反馈，用户体验更好
- 降低后端复杂度

**Alternatives considered:**
- 节流搜索（debounce）：对于小数据集不必要的复杂度

### Decision 4: 使用 CSS Media Query 实现响应式

使用 CSS Media Query 实现响应式布局，而非 Vue 的响应式工具类。

**Rationale:**
- CSS 原生支持，更简洁
- 减少 JavaScript 和 Vue 组件的复杂性
- 媒体查询可以更细粒度地控制布局变化

**Alternatives considered:**
- Vue 响应式类（如 `class` 绑定）：增加组件复杂性，且 CSS 本身已足够强大

## Risks / Trade-offs

[Risk] 设计稿中的毛玻璃效果在旧版浏览器可能不支持
→ Mitigation：使用 `@supports` 媒体查询检测，不支持时使用纯色半透明背景

[Risk] H5 设备上 fixed 定位的底部导航可能遮挡内容
→ Mitigation：在页面底部添加适当的 padding-bottom 为导航栏留出空间

[Risk] 中文字体在跨平台显示可能不一致
→ Mitigation：使用系统黑体字体栈（font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif）

## Migration Plan

1. 创建 `LedgerSelectionView.vue` 作为页面容器
2. 创建 `SearchBar.vue` 组件
3. 创建 `LedgerCard.vue` 组件
4. 创建 `BottomNavigation.vue` 组件
5. 创建 `useLedgerStore` Pinia store 管理账本数据
6. 更新路由配置
7. 验证响应式布局

**Rollback:** 如有问题，可直接删除创建的组件文件，恢复原有 `HomeView.vue`
