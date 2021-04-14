import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Sidebar = () => {
    const theme = useTheme()
    return (
        <div className="sidebar">
            <Text color={theme.text}>Sidebar</Text>
            <styled jsx>{`
                .sidebar {
                    
                }
            `}</styled>
        </div>
    )
}

export default Sidebar