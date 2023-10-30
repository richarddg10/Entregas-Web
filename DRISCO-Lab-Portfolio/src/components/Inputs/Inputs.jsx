import React from "react";
import '../Inputs/Inputs.css'

export function Inputs({ inputW, inputH, inputBgColor, inputBorder, inputRadio, inputType, inputName }) {
    const inputsStyle = {
        width: inputW,
        height: inputH,
        backgroundColor: inputBgColor,
        border: inputBorder,
        borderRadius: inputRadio
    }

    return (
        <>
            <input style={inputsStyle} className="inputs" type={inputType} placeholder={inputName} />
        </>
    )
}