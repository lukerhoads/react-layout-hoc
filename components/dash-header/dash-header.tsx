import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const DashHeader = () => {
    const theme = useTheme()
    return (
        <div className="dash-header">
            <Text color={theme.text}>DashHeader</Text>
            <styled jsx>{`
                .dash-header {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: fixed;
                    height: 60px;
                    background-color: ${theme.background};
                }
            `}</styled>
        </div>
    )
}

export default DashHeader