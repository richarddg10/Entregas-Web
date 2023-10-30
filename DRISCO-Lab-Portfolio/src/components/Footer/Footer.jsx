import React from 'react'
import './Footer.css'

import { Inputs, Buttons } from '../../components'

export function Footer (props) {
  return (
    <>
      <footer ref={props.reference}>
        <div className='footer-big-div'>
          <div className='intro-div'>
            <h1 className='footerTittle'>Let’s talk with us</h1>
            <p className='footerIntro'>Here you can find our communication channels where you can communicate with our team work.</p>
          </div>
          <div className='navegation-div'>
            <h2 className='navegationTittle'>Navegation
              <span>
                <ul className='navegationList'>
                  <li>Home</li>
                  <li>Abouts us</li>
                  <li>Projects</li>
                  <li>Services</li>
                  <li>Contact</li>
                </ul>
              </span>
            </h2>
          </div>
          <div className='contact-div'>
            <h2 className='contactTittle'>Contact
              <span>
                <ul className='contactList'>
                  <li>driscolab@gmail.com</li>
                  <li>www.driscolab.com</li>
                  <li>+57 3118954712</li>
                </ul>
              </span>
            </h2>
          </div>
          <div className='footerForm'>
            <Inputs inputW='256.78px' inputH='25.43px' inputBgColor='#222222' inputBorder='1px solid #6C6262' inputRadio='8.32px' inputType='email' inputName='Email adress' />
            <Inputs inputW='256.78px' inputH='44.57px' inputBgColor='#222222' inputBorder='1px solid #6C6262' inputRadio='8.32px' inputType='text' inputName='Short description...' />
            <Buttons bgColor='#FF350F' btnRadio='8.32px' btnW='278.78px' btnH='55.52px' fSize='13.68px' btnTittle='Submit'/>
          </div>
        </div>
        <div className='footer-small-div'>
          <h3>Copyright 2023 Drisco Lab</h3>
          <h3>User Terms And Conditions | Privacy Policy</h3>
        </div>
      </footer>
    </>
  )
}
