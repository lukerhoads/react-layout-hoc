import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const SearchContent = () => {
    const theme = useTheme()
    return (
        <div className="content-wrapper">
            <Text color={theme.text}>Search Content</Text>
            <style jsx>{`
                .content-wrapper {
                    width: 80%;
                    border: 1px solid ${theme.outline};
                }

                @media (max-width: 800px) {
                    .content-wrapper {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    )
}

export default SearchContent