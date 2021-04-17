import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const DashHeader = () => {
    const theme = useTheme()
    return (
        <div className="dash-header">
            <Text color={theme.text}>DashHeader</Text>
            <style jsx>{`
                .dash-header {
                    width: 100%;
                    position: fixed;
                    height: 60px;
                    background-color: ${theme.background};
                }
            `}</style>
        </div>
    )
}

export default DashHeader