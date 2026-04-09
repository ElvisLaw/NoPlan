## ADDED Requirements

### Requirement: Ledger card displays ledger information

Each ledger card SHALL display the ledger's name and current balance. The card SHALL have a white background, rounded corners (16px border-radius), and a subtle border.

#### Scenario: Ledger card displays correctly

- **WHEN** a ledger card is rendered
- **THEN** it SHALL display the ledger name (e.g., "个人账本", "家庭开支")
- **AND** it SHALL display "当前余额" label above the balance
- **AND** it SHALL display the balance amount with ¥ prefix (e.g., "¥ 12,840.00")
- **AND** it SHALL have a white background (#FFFFFF)
- **AND** it SHALL have rounded corners of 16px
- **AND** it SHALL have a subtle border with rgba(172, 178, 191, 0.15)

#### Scenario: Ledger card hover state

- **WHEN** user hovers over a ledger card
- **THEN** the card SHALL have a subtle shadow or elevation effect
- **AND** the cursor SHALL be pointer

#### Scenario: Ledger card is selected

- **WHEN** user clicks on a ledger card
- **THEN** the card SHALL be visually marked as selected (e.g., different border color or checkmark)
- **AND** navigation to ledger detail SHALL be triggered
