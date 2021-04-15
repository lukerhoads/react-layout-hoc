import React from 'react'
import { Text } from '../'

const ContentWrapper = () => {
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

export default ContentWrapper