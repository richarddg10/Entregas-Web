import React from 'react'
import '../Buttons/Buttons.css'

export function Buttons({ onClick, btnType, imgBtn, imgBtnW, imgBtnH, btnTittle }) {

    const imgBtnStyle = {
        width: imgBtnW,
        height: imgBtnH
    }

    return (
            <button onClick={onClick} className={`btns ${btnType}`} type={btnType}>
                <img style={imgBtnStyle} src={imgBtn}/>
                {btnTittle}
            </button>
    )
}