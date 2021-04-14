import React from 'react'
import { Text } from '../'


export const Sidebar = () => {
    const theme = useTheme()
    return (
        <div className="search">
            <Text color={theme.color}>Search</Text>
            <styled jsx>{`
                .search {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: ${theme.background};
                    border: 1px solid ${theme.border};
                    height: 800px;
                }

                @media (max-width: 1000px) {
                    .search {
                        height: 600px;
                    }
                }
            `}</styled>
        </div>
    )
}