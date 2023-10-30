import React from 'react'
import '../Buttons/Buttons.css'

export function Buttons({ bgColor, btnRadio, btnBorder, btnW, btnH, fSize, mTop, mLeft, mRight, mBottom, tDeco, tdColor, btnPosition, z_index, btnTop, gapBtn, btnType, btnTittle, imgBtn, imgBtnW, imgBtnH }) {
    const btnStyle = {
        backgroundColor: bgColor,
        borderRadius: btnRadio,
        border: btnBorder,
        width: btnW,
        height: btnH,
        fontSize: fSize,
        marginTop: mTop,
        marginLeft: mLeft,
        marginRight: mRight,
        marginBottom: mBottom,
        textDecoration: tDeco,
        textDecorationColor: tdColor,
        position: btnPosition,
        zIndez: z_index,
        top: btnTop,
        gap: gapBtn
    }

    const imgBtnStyle = {
        width: imgBtnW,
        height: imgBtnH
    }

    return (
        <>
            <button style={btnStyle} className='btns' type={btnType}><img style={imgBtnStyle} src={imgBtn}/>{btnTittle}</button>
        </>
    )
}