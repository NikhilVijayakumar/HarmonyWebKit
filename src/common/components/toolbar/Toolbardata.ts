//path src/components/toolbar/Toolbardata.ts

export type ThemeContextValue = {
  darkMode: boolean
  toggleDarkMode: () => void
}

export interface ToolbarProps {
  handleDrawerToggle: () => void
  title: string
  themeContext: ThemeContextValue
}
