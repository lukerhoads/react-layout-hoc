import React, { useEffect, useMemo, useState } from 'react'
import { Themes } from '../use-theme/themes'
import { ThemeContext, getPresetStaticTheme } from '../use-theme/use-theme'
import ThemeType from '../use-theme/themes/type'

export interface Props {
    themeType: string
    activeTheme?: ThemeType
    children: React.ReactNode
}

const ThemeProvider = ({
  children,
  themeType,
  activeTheme
}: Props) => {
  const currentTheme = useMemo<ThemeType>(() => {
    if (themeType === 'light') {
        activeTheme = Themes.Light
    } else {
        activeTheme = Themes.Dark
    }
    if (activeTheme) return activeTheme
    return getPresetStaticTheme()
  }, [])

  return (
    <ThemeContext.Provider value={currentTheme}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider