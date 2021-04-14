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
                    color: ${color}
                }
            `}</style>
        </p>
    )
}

export default Text