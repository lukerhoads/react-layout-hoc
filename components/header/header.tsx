import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Header = () => {
    const theme = useTheme()
    return (
        <div className="header">
            <Text color={theme.text}>Header</Text>
            <style jsx>{`
                .header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: fixed;
                    height: 67px;
                    background-color: ${theme.background};
                }
            `}</style>
        </div>
    )
}

export default Header