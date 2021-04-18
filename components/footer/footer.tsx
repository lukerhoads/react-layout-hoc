import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Footer = () => {
    const theme = useTheme()
    return (
        <div className="footer">
            <Text color={theme.text}>Footer</Text>
            <style jsx>{`
                .footer {
                    width: 100%;
                    height: 80px;  
                    bottom: 0;  
                    background-color: ${theme.background};
                }
            `}</style>
        </div>
    )
}

export default Footer