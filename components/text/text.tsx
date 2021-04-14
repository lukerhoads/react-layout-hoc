import React from 'react'

type TextColors = "white" | "black"

type Props = {
    color: TextColors
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