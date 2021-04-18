import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'
import { useAtom } from 'jotai'
import { appAtom } from '../../store/store'

const Header = () => {
    const theme = useTheme()
    const [app, setApp] = useAtom(appAtom)

    return (
        <div className="header">
            <Text color={theme.text}>{app.name}</Text>
            <button>Switch Theme</button>
            <style jsx>{`
                .header {
                    width: 100%;
                    height: 80px;
                    box-sizing: border-box;
                    background-color: ${theme.background};
                    border: 1px solid ${theme.outline};
                }
            `}</style>
        </div>
    )
}

export default Header