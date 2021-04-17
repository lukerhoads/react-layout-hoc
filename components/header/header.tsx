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
            <style jsx>{`
                .header {
                    width: 100%;
                    height: 80px;
                    position: fixed;
                    box-sizing: border-box;
                    z-index: 1001;
                    background-color: ${theme.background};
                }
            `}</style>
        </div>
    )
}

export default Header