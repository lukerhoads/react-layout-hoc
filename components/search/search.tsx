import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Sidebar = () => {
    const theme = useTheme()
    return (
        <div className="search">
            <Text color={theme.text}>Search</Text>
            <style jsx>{`
                .search {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: ${theme.background};
                    border: 1px solid ${theme.outline};
                    height: 800px;
                }

                @media (max-width: 1000px) {
                    .search {
                        height: 600px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Sidebar;