import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const GridElement = () => {
    const theme = useTheme()
    return (
        <div className="grid-element">
            <Text color={theme.text}>GridElement</Text>
            <style jsx>{`
                .grid-element {
                    
                }
            `}</style>
        </div>
    )
}

export default GridElement