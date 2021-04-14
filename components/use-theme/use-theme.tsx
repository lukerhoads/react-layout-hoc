import React from 'react'
import Themes from './theme'
import Theme from './type'

const defaultTheme = Themes.getPresetStaticTheme()

export const ThemeContext: React.Context<Theme> = React.createContext<Theme>(
  defaultTheme,
)

export const useTheme = (): Theme => React.useContext<Theme>(ThemeContext)