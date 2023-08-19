import React from 'react'

export function Button ({ type,label }) {
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        // width: '150px'
    }

    const buttonStyle = {
        backgroundColor: 'red'
    }

    return (
        <>
            <div style={divStyle}>
                <button style={buttonStyle} type={type}> { label } </button>
            </div>
        </>
    )
}