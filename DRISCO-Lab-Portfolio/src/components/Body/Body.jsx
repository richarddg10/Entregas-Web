import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import globalBackground from '../../assets/globalBackground.png'
import Logo from '../../assets/driscoLogo.png'
import swapIcon from '../../assets/swapIcon.png'
import andresImg from '../../assets/andresImg.png'
import santiagoImg from '../../assets/santiagoImg.png'
import richardImg from '../../assets/richardImg.png'
import linkedinLogo from '../../assets/linkedinLogo.png'
import behanceLogo from '../../assets/behanceLogo.png'
import instagramLogo from '../../assets/instagramLogo.png'
import HospitalPadrinoProject from '../../assets/HospitalPadrinoProject.png'
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
      <main className='mainBackground'>
        <img className='globalBackgroundImg' src={globalBackground} />
        <h1 className='introH1'>We're <span><img className='logo' src={Logo} /></span><span className='spanIntroH1'>Designing the future, creating connections and experiences</span></h1>
        <Buttons bgColor='#FF350F' btnRadio='7px' btnW='214.34px' btnH='51.9px' fSize='18.28px' mLeft='135px' btnTittle='About us' />
        {/* <div className='mainDiv' ref={nowMe}>
        </div> */}
        <img className='swapImg' src={swapIcon} />
      </main>
      <div className='about-us-div'>
        <h1 className='aboutUsTittle'>About us<span className='aboutUsSpan'>About us</span></h1>
        <div className='members-div'>
          <Members imgRut={andresImg} memberTittle='My name is' memberName='Andrés Santacruz' memberInfo='I am 19 years old, I am a student at Icesi University. In my personal life I like to go out to walk the streets or towns while I drive, I like to practice sports from time to time. In the future I would like to position myself in a good company and be able to travel around the world.' skill1='Interface Design' skill2='Video Editing' skill3='3D Modeling' contactURL1='' contactImg1={behanceLogo} contactURL2='' contactImg2={instagramLogo} contactURL3='' contactImg3={linkedinLogo} />
          <Members imgRut={santiagoImg} memberTittle='My name is' memberName='Santiago Gómez' memberInfo='I am 21 years old, I am a student of the interactive media design program at Icesi University. In my personal life I like sports, watching series and spending time with my family and friends. Within my professional skills, is the design of interfaces and the research part that would be the data collection and management of these.' skill1='Evaluate project efficiency' skill2='Design interactive experiences' skill3='Interface Design' contactURL1='' contactImg1={behanceLogo} contactURL2='' contactImg2={instagramLogo} contactURL3='' contactImg3={linkedinLogo} />
          <Members imgRut={richardImg} memberTittle='My name is' memberName='Richard Delgado G' memberInfo='I am a 21 year old student, I am studying Interactive Media Design at Icesi University in Cali. I consider myself a person eager to learn and acquire knowledge in my professional field with the intention of contributing to society.' skill1='Front-end' skill2='Interface Design' skill3='Usability test' contactURL1='' contactImg1={behanceLogo} contactURL2='' contactImg2={instagramLogo} contactURL3='' contactImg3={linkedinLogo} />
        </div>
      </div>
      <div className='our-projects-div'>
        <h1 className='projectsTittle'>Projects<span className='projectsTittleSpan'>Our projects</span></h1>
        <div className='someProjects'>
          <Projects imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' />
          <Projects imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' />
          <Projects imgRut={HospitalPadrinoProject} projectRut='https://www.behance.net/gallery/145695963/Hospital-Padrino-UIUX-Project' />
          <Buttons bgColor='#FF350F' btnRadio='100px' btnBorder='5px solid #2C2C2C' btnW='78.87px' btnH='78.87px' mLeft='1030px' btnPosition='absolute' imgBtn={arrowIcon} imgBtnW='28.1px' imgBtnH='27.53px' />
        </div>
        <Link to='/add-project-screen'>
          <Buttons bgColor='#FFFFFF' btnRadio='100px' mLeft='auto' mRight='auto' btnW='44.11px' btnH='44.11px' imgBtn={plusIcon} imgBtnW='17.48px' imgBtnH='19.71px' />
        </Link>
        <Link to='/all-projects-screen'>
          <Buttons bgColor='transparent' btnW='173.09px' mTop='62px' mLeft='1100px' mBottom='121px' gapBtn='5px' btnTittle='Explore more works' imgBtn={arrowIcon} imgBtnW='11.26px' imgBtnH='11.65px' />
        </Link>

      </div>
      <div className='services-div'>
        <h1 className='servicesTittle'>Services<span className='servicesTittleSpan'>Our services</span></h1>
        <div className='someServices'>
          <ServiceContainer bgIconColor='#FF350F' textColor='#FF350F' serviceIcon={websitesIcon} serviceName='Web Sites' serviceDescription='Custom web development services to create attractive and functional websites that stand out online and meet your business goals.' />
          <ServiceContainer bgIconColor='#485BFF' textColor='#485BFF' serviceIcon={mobileIcon} serviceName='Mobile Apps' serviceDescription='Custom web development services to create attractive and functional websites that stand out online and meet your business goals.' />
          <ServiceContainer bgIconColor='#9969FF' textColor='#9969FF' serviceIcon={UXIcon} serviceName='UX Experience' serviceDescription='Custom web development services to create attractive and functional websites that stand out online and meet your business goals.' />
          <ServiceContainer bgIconColor='#33D3D4' textColor='#33D3D4' serviceIcon={VR_ARIcon} serviceName='VR/AR' serviceDescription='Custom web development services to create attractive and functional websites that stand out online and meet your business goals.' />
          <ServiceContainer bgIconColor='#FEC0B5' textColor='#FEC0B5' serviceIcon={multimediaIcon} serviceName='Multimedia' serviceDescription='Custom web development services to create attractive and functional websites that stand out online and meet your business goals.' />
          <ServiceContainer bgIconColor='#FFFFFF' textColor='#FFFFFF' serviceIcon={UIcontrolIcon} serviceName='UI Control Panel' serviceDescription='Custom web development services to create attractive and functional websites that stand out online and meet your business goals.' />
        </div>
      </div>
      {/* <MyProjectsMain reference={projects} /> */}
    </>
  )
}
