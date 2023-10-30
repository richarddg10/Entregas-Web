import React from "react";
import '../ServiceContainer/ServiceContainer.css'

export function ServiceContainer({ bgIconColor, textColor, serviceIcon, serviceName, serviceDescription }) {
    const serviceIcon_div_style = {
        backgroundColor: bgIconColor
    }
    
    const serviceContainerStyle = {
        color: textColor
    }

    return (
        <>
        <div className='service-div'>
            <div style={serviceIcon_div_style} className='serviceIcon-div'>
                <img className='serviceIcon' src={serviceIcon} />
            </div>
            <h2 style={serviceContainerStyle} className='serviceText'>{serviceName}<span className="serviceTextSpan">{serviceDescription}</span></h2>
        </div>
        </>
    )
}