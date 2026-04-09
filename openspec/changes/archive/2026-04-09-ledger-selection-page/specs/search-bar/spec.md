## ADDED Requirements

### Requirement: iOS-style search bar

The search bar SHALL have an iOS-style design with rounded corners (16px border-radius), a light gray background (#F2F3FA), placeholder text "搜索账本...", and a search icon on the left side.

#### Scenario: Search bar displays correctly

- **WHEN** the search bar component is rendered
- **THEN** it SHALL have a background color of #F2F3FA
- **AND** it SHALL have rounded corners of 16px
- **AND** it SHALL display placeholder text "搜索账本..." in gray color
- **AND** it SHALL display a search icon on the left

#### Scenario: User types in search bar

- **WHEN** user focuses on the search bar and types text
- **THEN** the entered text SHALL be displayed in the input field
- **AND** a clear button SHALL appear when there is text
- **AND** ledger filtering SHALL trigger as user types

#### Scenario: Search bar placeholder state

- **WHEN** the search bar has no user input
- **THEN** it SHALL display "搜索账本..." as placeholder text
- **AND** the placeholder text SHALL have 40% opacity
