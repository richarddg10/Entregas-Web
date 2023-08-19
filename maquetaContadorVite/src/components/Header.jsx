import React from 'react'

export function Header ({ title }) {

    const componentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        borderColor: 'white',
        color: 'black',
        width: '500px',
        height: '100px'
    }

    return (
        <>
            <header>
                <h1 style={componentStyle} className="main-title"> { title } </h1>
            </header>
        </>
    )
}