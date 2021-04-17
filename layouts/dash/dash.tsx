import React from 'react'
import { DashHeader, Sidebar, Content, DashWrapper } from '../../components'

const Dash = () => {
    // Need store provider
    return (
        <> 
            <DashHeader />
            <DashWrapper>
                <Sidebar />
                <Content />
            </DashWrapper>
        </>
    )
}

export default Dash