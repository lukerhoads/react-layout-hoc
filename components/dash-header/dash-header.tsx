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
                    height: 64px;
                    min-width: 320px;W
                    position: fixed;
                    box-sizing: border-box;
                    z-index: 1001;
                    background-color: ${theme.background};
                    border: 1px solid ${theme.outline};
                }
            `}</style>
        </div>
    )
}

export default DashHeader