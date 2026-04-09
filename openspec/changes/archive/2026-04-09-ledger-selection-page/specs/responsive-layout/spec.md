## ADDED Requirements

### Requirement: Responsive layout for PC and H5

The ledger selection page SHALL implement responsive design to provide optimal viewing experience on both PC (desktop) and H5 (mobile) devices.

#### Scenario: H5 layout (mobile)

- **WHEN** the viewport width is less than or equal to 768px (tablet portrait or mobile)
- **THEN** the layout SHALL adapt to mobile-friendly design
- **AND** the search bar SHALL span full width with proper padding
- **AND** the ledger cards SHALL be displayed in a single column or appropriate grid for mobile
- **AND** the bottom navigation SHALL be visible and fixed at bottom

#### Scenario: PC layout (desktop)

- **WHEN** the viewport width is greater than 768px
- **THEN** the content SHALL be centered with maximum width constraint
- **AND** the ledger cards SHALL be displayed in Bento Grid layout (multiple columns as space allows)
- **AND** the search bar SHALL have appropriate max-width for comfortable typing
- **AND** the bottom navigation SHALL be visible at bottom, centered

#### Scenario: Responsive breakpoints

- **WHEN** viewport transitions between H5 and PC sizes
- **THEN** the layout SHALL smoothly adapt without page reload
- **AND** components SHALL reflow appropriately based on available space

#### Scenario: Touch and click targets

- **WHEN** on H5 (touch device)
- **THEN** all interactive elements SHALL have minimum touch target size of 44x44px
- **AND** on PC (mouse device)
- **THEN** hover states SHALL be visible for interactive elements
