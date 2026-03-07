export const REPOSITORIES = [
  // UI Libraries
  { name: 'facebook/react', category: 'UI Libraries' },
  { name: 'vuejs/core', category: 'UI Libraries' },
  { name: 'sveltejs/svelte', category: 'UI Libraries' },
  { name: 'solidjs/solid', category: 'UI Libraries' },

  // Styling
  { name: 'tailwindlabs/tailwindcss', category: 'Styling' },
  { name: 'chakra-ui/chakra-ui', category: 'Styling' },
  { name: 'radix-ui/primitives', category: 'Styling' },
  { name: 'shadcn-ui/ui', category: 'Styling' },

  // State & Data
  { name: 'TanStack/query', category: 'State & Data' },
  { name: 'pmndrs/zustand', category: 'State & Data' },
  { name: 'vuejs/pinia', category: 'State & Data' },
  { name: 'reduxjs/redux-toolkit', category: 'State & Data' },

  // Tools
  { name: 'vitejs/vite', category: 'Tools' },
  { name: 'eslint/eslint', category: 'Tools' },
  { name: 'prettier/prettier', category: 'Tools' },
  { name: 'storybookjs/storybook', category: 'Tools' },
]

export const CATEGORIES = [...new Set(REPOSITORIES.map((r) => r.category))]
