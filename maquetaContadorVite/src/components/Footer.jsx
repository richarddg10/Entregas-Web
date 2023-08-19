import React from "react";
 
export function Footer() {
    const footerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        borderColor: 'white',
        height: '100px'
    }

    return(
        <footer style={footerStyle}>
            <h3>Richard Delgado Garzon</h3>
        </footer>
    )
}