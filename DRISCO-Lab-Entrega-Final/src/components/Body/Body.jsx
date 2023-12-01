import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { appFireBase } from "../../config/firebase";
import { useAuth } from '../../context/authUserContext'

import mainBackground from '../../assets/mainBackground.png'
import Logo from '../../assets/driscoLogo.png'
import swapIcon from '../../assets/swapIcon.png'
import andresImg from '../../assets/andresImg.png'
import santiagoImg from '../../assets/santiagoImg.png'
import richardImg from '../../assets/richardImg.png'
import linkedinLogo from '../../assets/linkedinLogo.png'
import behanceLogo from '../../assets/behanceLogo.png'
import instagramLogo from '../../assets/instagramLogo.png'
import arrowIcon from '../../assets/arrowIcon.png'
import plusIcon from '../../assets/plusIcon.png'
import websitesIcon from '../../assets/websitesIcon.png'
import mobileIcon from '../../assets/mobileIcon.png'
import UXIcon from '../../assets/UXIcon.png'
import VR_ARIcon from '../../assets/VR_ARIcon.png'
import multimediaIcon from '../../assets/multimediaIcon.png'
import UIcontrolIcon from '../../assets/UIcontrolIcon.png'
import '../Body/Body.css'

import { Header, Buttons, Members, Projects, ServiceContainer } from '../../components'

export function Body (props) {
  const nowMe = useRef(null)
  const projects = useRef(null)
  const services = useRef(null)

  const navigate = useNavigate()
  const { isLogged } = useAuth()

  const scrollToSection = (data) => {
    if (data === 'nowMe') {
      nowMe.current.scrollIntoView({ behavior: 'smooth' })
    } else if (data === 'projects') {
      projects.current.scrollIntoView({ behavior: 'smooth' })
    } else if (data === 'services') {
      services.current.scrollIntoView({ behavior: 'smooth' })
    } else {
      props.onSendMessage(data)
    }
  }

  const [projectsUploads, setProjectsUploads] = useState([])

    useEffect(() => {
        async function fetchData() {
            const projectsList = await appFireBase.firestore().collection("projectsFiles").get()
            setProjectsUploads(projectsList.docs.map((doc) => doc.data()))
        }
        fetchData()
  }, [])

  return (
    <>
      <Header
        onSendMessage={scrollToSection}
        nowMe={nowMe}
        projects={projects}
        services={services}
      />
      <main className='mainBackground'>
        <img className='mainBackgroundImg' src={mainBackground} />
        <div>
          <h1 className='introH1'>We're <span><img className='logo' src={Logo} /></span><span className='spanIntroH1'>Designing the future, creating connections and experiences</span></h1>
          <Buttons onClick={() => scrollToSection('nowMe')} path='' btnType='btn-about-us' btnTittle='About us' />
          <img className='swapImg' src={swapIcon} />
        </div>
      </main>
      <div className='about-us-div' ref={nowMe}>
        <h1 className='aboutUsTittle'>About us<span className='aboutUsSpan'>About us</span></h1>
        <div className='members-div'>
          <Members />
        </div>
      </div>
      <div className='our-projects-div' ref={projects}>
        <h1 className='projectsTittle'>Projects<span className='projectsTittleSpan'>Our projects</span></h1>
        <div className='someProjects'>
          {
            projectsUploads.slice(0, 3).map((doc, id) => 
              <div key={id}>
                <Projects imgRut={doc.url} projectRut={doc.behance} caption={doc.name} />
              </div>
            ) 
          }
        </div>
        {isLogged && (
          <Buttons onClick={() => navigate('/add-project-screen')} btnType='btn-add-project' imgBtn={plusIcon} imgBtnW='16.64px' imgBtnH='15.8px' />
        )}
        <Buttons onClick={() => navigate('/all-projects-screen')} btnType='btn-all-projects' imgBtn={arrowIcon} btnTittle='Explore more works' imgBtnW='9.45px' imgBtnH='9.45px' />
      </div>
      <div className='services-div' ref={services}>
        <h1 className='servicesTittle'>Services<span className='servicesTittleSpan'>Our services</span></h1>
        <div className='someServices'>
          <ServiceContainer bgIconColor='#FF350F' textColor='#FF350F' serviceIcon={websitesIcon} serviceName='Web Sites' serviceDescription='Custom web development services to create attractive and functional websites that stand out online and meet your business goals.' />
          <ServiceContainer bgIconColor='#485BFF' textColor='#485BFF' serviceIcon={mobileIcon} serviceName='Mobile Apps' serviceDescription='Design and development of intuitive and appealing user interfaces for iOS and Android apps.' />
          <ServiceContainer bgIconColor='#9969FF' textColor='#9969FF' serviceIcon={UXIcon} serviceName='UX Experience' serviceDescription='Experience optimization through research, prototyping, and testing to ensure smoothness and satisfaction.' />
          <ServiceContainer bgIconColor='#33D3D4' textColor='#33D3D4' serviceIcon={VR_ARIcon} serviceName='VR/AR' serviceDescription='Design of immersive VR and AR experiences for all kinds of apps.' />
          <ServiceContainer bgIconColor='#FEC0B5' textColor='#FEC0B5' serviceIcon={multimediaIcon} serviceName='Multimedia' serviceDescription='Creation of interactive content, such as videos, presentations, and animations.' />
          <ServiceContainer bgIconColor='#FFFFFF' textColor='#FFFFFF' serviceIcon={UIcontrolIcon} serviceName='UI Control Panel' serviceDescription='Design and development of touchscreen interfaces for interactive kiosks and other devices.' />
        </div>
      </div>
    </>
  )
}
