import React from 'react'
import { Text } from '../'

export const DashHeader = () => {
    const theme = useTheme()
    return (
        <div className="dash-header">
            <Text color={theme.color}>DashHeader</Text>
            <styled jsx>{`
                .dash-header {
                    
                }
            `}</styled>
        </div>
    )
}
