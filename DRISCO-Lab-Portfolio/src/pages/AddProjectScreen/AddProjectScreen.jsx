import React, { useRef } from "react";
import dropIcon from '../../assets/dropIcon.png'
import plusIcon2 from '../../assets/plusIcon2.png'
import '../AddProjectScreen/AddProjectScreen.css'

import { Header, Buttons, Inputs } from '../../components'

export function AddProjectScreen() {
    const nowMe = useRef(null)
    const projects = useRef(null)

    const scrollToSection = (data) => {
        if (data === 'nowMe') {
        nowMe.current.scrollIntoView()
        } else if (data === 'project') {
        projects.current.scrollIntoView()
        } else {
        props.onSendMessage(data)
        }
    }

    return (
        <>
            <Header onSendMessage={scrollToSection} />
            <div className='add-screen-div'>
                <h1 className='addScreenTittle'>Upload Proyect</h1>
                <div className='upload-div'>
                    <img className='dropIcon' src={dropIcon} />
                    <Buttons bgColor='#FF350F' btnRadio='10px' btnW='141.67px' btnH='50.74px' fSize='13.18px' imgBtn={plusIcon2} btnPosition='absolute' z_index='0' btnTop='83%' gapBtn='10px' imgBtnW='20.43px' imgBtnH='20.43px' btnTittle='Add files' />
                </div>
                <div className='addProjectForm'>
                    <h2 className='descriptionTittle'>Description</h2>
                    <Inputs inputW='351.93px' inputH='10.9px' inputBgColor='#222222' inputBorder='1px solid #6C6262' inputRadio='6.33px' inputType='text' inputName='Project Title' />
                    <Inputs inputW='351.93px' inputH='22.57px' inputBgColor='#222222' inputBorder='1px solid #6C6262' inputRadio='6.33px' inputType='text' inputName='Project Description' />
                    <Buttons bgColor='#FF350F' btnRadio='7.43px' btnW='157.54px' btnH='38.15px' fSize='13.44px' btnTittle='Upload Files'/>
                </div>
            </div>
        </>
    )
}