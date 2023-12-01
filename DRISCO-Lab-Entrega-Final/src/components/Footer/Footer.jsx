import React from 'react'
import './Footer.css'

import { Inputs, Buttons } from '../../components'

export function Footer ({reference}) {
  return (
    <>
      <footer ref={reference}>
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
            <Inputs inputClass='input-email-footer' inputName='Email adress' />
            <Inputs inputClass='input-description-footer' inputName='Short description...' />
            <Buttons btnType='btn-submit' btnTittle='Submit' />
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
