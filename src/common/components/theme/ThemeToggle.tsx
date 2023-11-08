import React from 'react'
import IconButton from '@mui/material/IconButton'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'

export type ThemeContextValue = {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeToggle: React.FC<{ themeContext: ThemeContextValue }> = ({
  themeContext,
}) => {
  const { darkMode, toggleDarkMode } = themeContext

  return (
    <IconButton onClick={toggleDarkMode}>
      {darkMode ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  )
}

export default ThemeToggle
