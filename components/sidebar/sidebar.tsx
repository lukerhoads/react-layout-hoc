import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Sidebar = () => {
    const theme = useTheme()
    return (
        <div className="sidebar">
            <Text color={theme.text}>Sidebar</Text>
            <style jsx>{`
                .sidebar {
                    width: 
                }
            `}</style>
        </div>
    )
}

export default Sidebar