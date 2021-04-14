import React from 'react'
import { Text } from '../'

export const Footer = () => {
    const theme = useTheme()
    return (
        <div className="footer">
            <Text color={theme.color}>Footer</Text>
            <styled jsx>{`
                .footer {
                    
                }
            `}</styled>
        </div>
    )
}