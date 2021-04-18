import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'

const Content = () => {
    const theme = useTheme()
    return (
        <div className="content-wrapper">
            <Text color={theme.text}>Content Wrappers</Text>
            <style jsx>{`
                .content-wrapper {
                    width: 80%;
                    height: 100%;
                    position: fixed;
                    right: 0;
                    z-index: 1000;
                    border: 1px solid ${theme.outline};
                }

                @media (max-width: 800px) {
                    .content-wrapper {
                        width: 100%;
                        height: 90%;
                    }
                }
            `}</style>
        </div>
    )
}

export default Content