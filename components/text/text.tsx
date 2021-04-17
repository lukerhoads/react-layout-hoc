import React from 'react'

type Props = {
    color: string
    children: React.ReactNode
}

const Text = ({ color, children }: Props) => {
    return (
        <p>
            {children}
            <style jsx>{`
                p {
                    margin: 0;
                    color: ${color}
                }
            `}</style>
        </p>
    )
}

export default Text