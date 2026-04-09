## ADDED Requirements

### Requirement: Page displays ledger selection interface

The ledger selection page SHALL display a header with title "选取账本", a search bar for filtering ledgers, a grid of ledger cards showing available ledgers, and a bottom navigation bar for app-wide navigation.

#### Scenario: Page loads successfully

- **WHEN** user navigates to the ledger selection page
- **THEN** the page SHALL display the header "选取账本"
- **AND** the search bar SHALL be visible
- **AND** all ledger cards SHALL be displayed in a Bento Grid layout
- **AND** the bottom navigation bar SHALL be visible at the bottom of the viewport

#### Scenario: User searches for a ledger

- **WHEN** user enters text in the search bar
- **THEN** the ledger cards SHALL be filtered to show only ledgers whose names match the search query
- **AND** if no ledgers match, an empty state message SHALL be displayed

#### Scenario: User selects a ledger card

- **WHEN** user clicks on a ledger card
- **THEN** the system SHALL navigate to the selected ledger's detail view
- **AND** the selected ledger SHALL be highlighted or marked as active
