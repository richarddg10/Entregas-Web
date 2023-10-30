import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/driscoLogo.png'
import '../Header/Header.css'

import { Buttons } from '../../components'

export function Header (props) {
  const [message, setMessage] = useState('')
  const onClickLink = (msg) => {
    setMessage(msg)
    props.onSendMessage(msg)
  }

  return (
    <>
      <header>
        <Link to='/'>
          <img className='logo1Img' src={Logo} />
        </Link>
        <div className='buttonsContainer'>
          {/* <button className='btnNowMe' onClick={() => onClickLink('nowMe')}>About us</button>
          <button className='btnProjects' onClick={() => onClickLink('project')}>Projects</button>
          <button className='btnServices' onClick={() => onClickLink('contact')}>Services</button>
          <button className='btnLogin' onClick={() => onClickLink('contact')}>Login</button>
          <button className='btnContact' onClick={() => onClickLink('contact')}>Contact</button> */}

          <Buttons bgColor='transparent' fSize='19px' tDeco='underline' tdColor='#485BFF' btnTittle='About us' />
          <Buttons bgColor='transparent' fSize='19px' tDeco='underline' tdColor='#485BFF' btnTittle='Projects' />
          <Buttons bgColor='transparent' fSize='19px' tDeco='underline' tdColor='#485BFF' btnTittle='Services' />
          <Link to='/login'>
            <Buttons bgColor='transparent' fSize='19px' tDeco='underline' tdColor='#485BFF' btnTittle='Login' />
          </Link>
          <Buttons bgColor='#485BFF' btnRadio='8.26px' btnW='105.68px' btnH='43.76px' fSize='19px' btnTittle='Contact' />
        </div>
      </header>
    </>
  )
}
