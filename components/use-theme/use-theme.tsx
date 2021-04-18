import React from 'react'
import ThemeType from './themes/type'
import lightTheme from './themes/light'

export const getPresetStaticTheme = (): ThemeType => {
  return lightTheme
}

const defaultTheme = getPresetStaticTheme()

export const ThemeContext: React.Context<ThemeType> = React.createContext<ThemeType>(
  defaultTheme,
)

export const useTheme = (): ThemeType => React.useContext<ThemeType>(ThemeContext)