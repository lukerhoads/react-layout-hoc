import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, ThemeProvider } from '../components'
import { Dash, ElementSearch } from '../layouts'

ReactDOM.render(
    <ThemeProvider themeType="light">
        <CssBaseline />
        <ElementSearch />
    </ThemeProvider>, 
    document.getElementById("root")
)
