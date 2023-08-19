import React from 'react'
import { Button } from './Button'

export function Body({ text }) {
    const mainStyle = {
        display: 'flex',
        justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'yellow',
        borderColor: 'white',
        height: '80px'
    }

    const textStyle = {
        fontSize: '2em'
    }

    return (
        <>
            <main style={mainStyle}>
                <Button type='add' label='+'/>
                <h1 style={textStyle} className="body-text"> { text } </h1>
                <Button type='substract' label='-'/>
            </main>
        </>
    )
}