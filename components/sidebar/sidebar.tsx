import React, { useState } from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Sidebar = () => {
    const theme = useTheme()
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="sidebar" onClick={() => setExpanded(!expanded)}>
            <Text color={theme.text}>Sidebar</Text>
            <style jsx>{`
                .sidebar {
                    width: 20%;
                    height: 100%;
                    position: fixed;
                    left: 0;
                    z-index: 1000;
                    border: 1px solid black;
                }

                @media (max-width: 800px) {
                    .sidebar {
                        width: 100%;
                        height: ${expanded ? "10%" : "0px"};
                        display: ${expanded ? "block" : "none"};
                    }
                }
            `}</style>
        </div>
    )
}

export default Sidebar