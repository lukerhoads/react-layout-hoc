import React from 'react'

const DashWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="dash-wrapper">
            {children}
            <style jsx>{`
                .dash-wrapper {
                    width: 100%;
                    height: 100%:
                    margin: 0;
                    padding: 0;
                    display: flex;
                    border: 1px solid black;
                }

                @media (max-width: 800px) {
                    .dash-wrapper {
                        flex-direction: column;
                    }
                }
            `}</style>
        </div>
    )
}

export default DashWrapper;