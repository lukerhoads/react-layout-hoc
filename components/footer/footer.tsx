import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Footer = () => {
    const theme = useTheme()
    return (
        <div className="footer">
            <Text color={theme.text}>Footer</Text>
            <style jsx>{`
                .footer {
                    
                }
            `}</style>
        </div>
    )
}

export default Footer