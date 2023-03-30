import React from 'react'

interface Props {
    children: JSX.Element
}

function AppLayout({ children }: Props) {
    return (
        <div>
            {children}
        </div>
    )
}

export default AppLayout