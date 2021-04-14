import React from 'react'
import { DashHeader, Sidebar, ContentWrapper } from '../../components'

const Dash = () => {
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

export default Dash