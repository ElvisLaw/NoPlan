# NoPlan

A Vue 3 ledger management application for tracking personal, family, and travel expenses.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next-generation frontend build tool
- **Pinia** - Intuitive store for Vue.js state management
- **Vue Router** - Official router for Vue.js
- **LESS** - CSS preprocessor for styling

## Project Structure

```
src/
├── assets/                 # Static assets
│   ├── icons/              # SVG icon components
│   ├── icon.less           # Icon styles and utilities
│   └── main.less          # Global styles
├── components/             # Reusable Vue components
│   ├── BottomNavigation/   # Bottom tab navigation
│   ├── LedgerCard/        # Ledger card display
│   └── SearchBar/         # Search input component
├── router/                 # Vue Router configuration
├── stores/                 # Pinia stores
│   ├── counter.js
│   └── ledger.js           # Ledger data store
├── styles/                 # Global style definitions
│   └── variables.less      # Design tokens and variables
├── views/                  # Page-level components
│   └── LedgerSelectionView/
├── App.vue                 # Root component
└── main.js                 # Application entry point
```

## Components

### BottomNavigation
Bottom tab navigation with dashboard, history, add, statistics, and settings.

### LedgerCard
Card component for displaying ledger information with type indicators (personal, family, travel).

### SearchBar
Search input component with icon support.

## Available Scripts

```sh
# Install dependencies
npm install

# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code with Prettier
npm run format
```

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue Official Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Recommended Browser Extensions

**Chromium-based browsers:**
- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

**Firefox:**
- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
