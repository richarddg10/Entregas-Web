import React from "react";
import '../MembersImgs/MembersImgs.css'

export function MembersImgs({ imgRut }) {
    return (
        <>
            <img className="memberImg" src={imgRut} />
        </>
    )
}