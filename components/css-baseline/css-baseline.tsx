import React from 'react'
import useTheme from '../use-theme'
import flush from 'styled-jsx/server'
import flushToReact from 'styled-jsx/server'

const CssBaseline: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const theme = useTheme()

  return (
    <>
      {children}
      <style global jsx>{`
        body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background-color: ${theme.background};
        }

        #root {
            width: 100%;
            height: 100%;
            position: absolute;
            box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

type MemoCssBaselineComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: typeof flushToReact
}

const MemoCssBaseline = React.memo(CssBaseline) as MemoCssBaselineComponent<
  React.PropsWithChildren<unknown>
>
MemoCssBaseline.flush = flush

export default MemoCssBaseline