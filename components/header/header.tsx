import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Header = () => {
    const theme = useTheme()
    return (
        <div className="header">
            <Text color={theme.text}>Header</Text>
            <styled jsx>{`
                .header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: fixed;
                    height: 67px;
                    background-color: ${theme.background};
                }
            `}</styled>
        </div>
    )
}

export default Header