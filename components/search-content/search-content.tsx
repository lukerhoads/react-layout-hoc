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
                    width: 100%;
                    border: 1px solid ${theme.outline};
                }
            `}</style>
        </div>
    )
}

export default SearchContent