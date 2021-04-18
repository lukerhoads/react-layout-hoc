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
                    height: 100px;  
                    background-color: ${theme.background};
                    border: 1px solid ${theme.outline};
                }
            `}</style>
        </div>
    )
}

export default Footer