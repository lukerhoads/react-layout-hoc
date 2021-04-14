import React from 'react'
import { DashHeader, Sidebar, ContentWrapper } from '../../components'

export const Dash = () => {
    // Need store provider
    return (
        <> 
            <DashHeader />
            <>
                <Sidebar />
                <ContentWrapper />
            </>
        </>
    )
}
