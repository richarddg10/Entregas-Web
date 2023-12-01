import React from "react";
import '../Inputs/Inputs.css'

export function Inputs({ inputClass, inputType, inputRef, inputName, onChange }) {

    return (
        <>
            <input className={`inputs ${inputClass}`} type={inputType} ref={inputRef} placeholder={inputName} onChange={onChange} />
        </>
    )
}