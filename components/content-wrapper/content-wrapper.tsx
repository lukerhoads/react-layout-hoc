import React from 'react'
import { Text } from '../'

export const ContentWrapper = () => {
    const theme = useTheme()
    return (
        <div className="content-wrapper">
            <Text color={theme.color}>Content Wrappers</Text>
            <styled jsx>{`
                .content-wrapper {
                    
                }
            `}</styled>
        </div>
    )
}
