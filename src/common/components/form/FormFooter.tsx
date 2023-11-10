//path src/common/components/form/FormFooter.tsx
import React from 'react'
import Grid from '@mui/material/Grid'
import { ThemeProvider } from '@mui/material/styles'
//import { Theme } from '@mui/material/styles/createTheme'

export type ThemeContextValue = {
  darkMode: boolean
  toggleDarkMode: () => void
}

type FormFooterProps = {
  lightTheme: any
  darkTheme: any
  themeContext: ThemeContextValue
}

const FormFooter: React.FC<FormFooterProps> = ({
  lightTheme,
  darkTheme,
  themeContext,
}) => {
  return (
    <ThemeProvider theme={themeContext.darkMode ? darkTheme : lightTheme}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          background: themeContext.darkMode ? 'black' : 'white',
          borderTop: '1px solid #ccc',
          padding: '10px 0',
          color: themeContext.darkMode ? 'white' : 'black',
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Skill Sage. All rights reserved.
        </p>
      </Grid>
    </ThemeProvider>
  )
}

export default FormFooter
