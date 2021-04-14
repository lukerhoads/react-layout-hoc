import React from 'react'
import { Text } from '../'

export const GridElement = () => {
    const theme = useTheme()
    return (
        <div className="grid-element">
            <Text color={theme.color}>GridElement</Text>
            <styled jsx>{`
                .grid-element {
                    
                }
            `}</styled>
        </div>
    )
}
