import React from 'react'
import { Text } from '../'

export const Sidebar = () => {
    const theme = useTheme()
    return (
        <div className="sidebar">
            <Text color={theme.color}>Sidebar</Text>
            <styled jsx>{`
                .sidebar {
                    
                }
            `}</styled>
        </div>
    )
}
