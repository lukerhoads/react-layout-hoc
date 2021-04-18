import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Search = () => {
    const theme = useTheme()
    return (
        <div className="search">
            <Text color={theme.text}>Search</Text>
            <style jsx>{`
                .search {
                    height: 400px;
                    background-color: ${theme.background};
                    border: 1px solid ${theme.outline};
                }

                @media (max-width: 800px) {
                    .search {
                        height: 500px;
                    }
                }
            `}</style>
        </div>
    )
}

export default Search;