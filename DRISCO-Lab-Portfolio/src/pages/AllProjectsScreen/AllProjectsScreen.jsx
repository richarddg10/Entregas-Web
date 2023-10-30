import React, { useRef } from "react";
import HospitalPadrinoProject from '../../assets/HospitalPadrinoProject.png'
import './AllProjectsScreen.css'

import { Header, Projects } from '../../components'

export function AllProjectsScreen() {
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
            <div className='projects-screen-div'>
                <h1 className='projectsScreenTittle'>All our projects</h1>
                <div className='projects-div'>
                    <Projects imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' caption='Padrino Hospital' />
                    <Projects imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' caption='Spotify OOH' />
                    <Projects imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' caption='OnChek App' />
                    <Projects imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' caption='Discover Me App' />
                    <Projects imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' caption='InJob App' />
                    <Projects imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' caption='Chipre Country Brand' />
                </div>
            </div>
        </>
    )
}