import React from 'react'
import { Text } from '../'
import useTheme from '../use-theme'
import { useAtom } from 'jotai'
import { appAtom } from '../../store/store'

const DashHeader = () => {
    const theme = useTheme()
    const [app, setApp] = useAtom(appAtom)

    return (
        <div className="dash-header">
            <Text color={theme.text}>{app.name}</Text>
            <button>Switch Theme</button>
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