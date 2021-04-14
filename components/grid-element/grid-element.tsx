import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const GridElement = () => {
    const theme = useTheme()
    return (
        <div className="grid-element">
            <Text color={theme.text}>GridElement</Text>
            <styled jsx>{`
                .grid-element {
                    
                }
            `}</styled>
        </div>
    )
}

export default GridElement