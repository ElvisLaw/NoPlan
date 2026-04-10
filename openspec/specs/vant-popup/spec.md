# vant-popup Specification

## Purpose
TBD - created by archiving change ledger-modal-h5-vant. Update Purpose after archive.
## Requirements
### Requirement: Vant Popup 集成

系统 SHALL use Vant Popup 组件替代自定义弹窗实现

#### Scenario: PC 端显示

- **WHEN** 在 PC 端打开新建账本弹窗
- **THEN** Popup 居中显示
- **AND** 背景显示遮罩层

#### Scenario: H5 端显示

- **WHEN** 在 H5 端打开新建账本弹窗
- **THEN** Popup 从底部滑入
- **AND** 高度自适应内容
- **AND** 圆角显示在顶部

### Requirement: 移动端交互优化

弹窗 SHALL 提供良好的移动端触摸交互

#### Scenario: 滑动关闭

- **WHEN** 用户在 H5 端从弹窗顶部向下拖动
- **THEN** 弹窗可以关闭

#### Scenario: 点击遮罩关闭

- **WHEN** 用户点击遮罩层
- **THEN** 弹窗关闭
- **AND** 表单重置

