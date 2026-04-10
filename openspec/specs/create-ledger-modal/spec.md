# create-ledger-modal Specification

## Purpose
TBD - created by archiving change create-ledger-modal. Update Purpose after archive.
## Requirements
### Requirement: 图标选择

用户 SHALL be able to 从预设的8个图标中选择一个作为账本图标

#### Scenario: 选择钱包图标

- **WHEN** 用户点击图标网格中的钱包图标
- **THEN** 钱包图标被高亮显示（蓝色边框）
- **AND** 其他图标保持默认状态

#### Scenario: 选择其他图标

- **WHEN** 用户点击其他图标（如房屋、飞机等）
- **THEN** 新点击的图标被高亮
- **AND** 之前选中的图标取消高亮

### Requirement: 账本名称输入

用户 SHALL be able to 输入账本名称

#### Scenario: 输入有效名称

- **WHEN** 用户在名称输入框中输入 "我的账本"
- **THEN** 输入框显示 "我的账本"
- **AND** 占位符文字消失

### Requirement: 账本类型选择

用户 SHALL be able to 从下拉列表中选择账本类型

#### Scenario: 展开下拉菜单

- **WHEN** 用户点击账本类型选择器
- **THEN** 下拉菜单展开显示选项列表
- **AND** 箭头图标旋转

#### Scenario: 选择账本类型

- **WHEN** 用户点击 "个人" 选项
- **THEN** 下拉菜单关闭
- **AND** 选择器显示 "个人"

### Requirement: 创建按钮状态

创建按钮 SHALL 根据表单完整性启用/禁用

#### Scenario: 表单不完整时

- **WHEN** 用户未填写名称或未选择类型
- **THEN** 创建按钮显示为禁用状态（灰色）

#### Scenario: 表单完整时

- **WHEN** 用户填写了名称且选择了类型
- **THEN** 创建按钮可用（蓝色）

### Requirement: 创建账本

用户 SHALL be able to 提交表单创建新账本

#### Scenario: 提交有效表单

- **WHEN** 用户填写名称、选择图标和类型后点击创建
- **THEN** 弹窗关闭
- **AND** 新账本被添加到列表
- **AND** 表单重置

#### Scenario: 取消创建

- **WHEN** 用户点击取消按钮
- **THEN** 弹窗关闭
- **AND** 表单重置
- **AND** 不创建新账本

