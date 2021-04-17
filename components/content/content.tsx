import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const ContentWrapper = () => {
    const theme = useTheme()
    return (
        <div className="content-wrapper">
            <Text color={theme.text}>Content Wrappers</Text>
            <style jsx>{`
                .content-wrapper {
                    
                }
            `}</style>
        </div>
    )
}

export default ContentWrapper