import React from 'react'
import { Text } from '../'

export const Header = () => {
    const theme = useTheme()
    return (
        <div className="header">
            <Text color={theme.color}>Header</Text>
            <styled jsx>{`
                .header {
                    
                }
            `}</styled>
        </div>
    )
}