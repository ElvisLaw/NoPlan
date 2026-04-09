## ADDED Requirements

### Requirement: Floating bottom navigation bar

The bottom navigation bar SHALL be a floating iOS-style navigation with a frosted glass effect, rounded pill shape (border-radius: 9999px), and contain navigation links and a prominent add button.

#### Scenario: Bottom navigation displays correctly

- **WHEN** the bottom navigation is rendered
- **THEN** it SHALL display 4 navigation items: 仪表盘, 历史, 统计, 设置
- **AND** it SHALL display a prominent "+" add button between 历史 and 统计
- **AND** it SHALL have a frosted glass effect (backdrop-filter: blur 40px)
- **AND** it SHALL have a rounded pill shape with border-radius of 9999px
- **AND** it SHALL have a semi-transparent white background

#### Scenario: Navigation item is active

- **WHEN** user is on a specific page (e.g., 仪表盘 page)
- **THEN** the corresponding navigation item SHALL have active styling (e.g., blue icon #005BC1)
- **AND** other navigation items SHALL have inactive styling (gray icon)

#### Scenario: User clicks add button

- **WHEN** user clicks the "+" add button
- **THEN** a modal or page for adding a new ledger or transaction SHALL be displayed

#### Scenario: Bottom navigation position

- **WHEN** the page is viewed on H5 (mobile)
- **THEN** the bottom navigation SHALL be fixed at the bottom of the viewport
- **AND** it SHALL be centered horizontally with appropriate padding from edges
