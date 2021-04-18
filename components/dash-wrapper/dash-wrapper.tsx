import React from 'react'
import useTheme from '../use-theme';

const DashWrapper = ({ children }: { children: React.ReactNode }) => {
    const theme = useTheme()
    
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
                    border: 1px solid ${theme.outline};
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