import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { authFireBase } from '../../config/firebase'
import { useAuth } from '../../context/authUserContext'
import { Buttons, DropdownMenu } from '../../components'

import Logo from '../../assets/driscoLogo.png'
import '../Header/Header.css'

export function Header (props) {
  const navigate = useNavigate()
  const { isLogged } = useAuth()

  const [message, setMessage] = useState('')

  const onClickLink = (msg) => {
    setMessage(msg)
    props.onSendMessage(msg)
  }

  const logOut = async () => {
    try {
        await signOut(authFireBase)
    } catch (error) {
        alert("El correo o la contraseña son incorrectos")
    }
}

  return (
    <>
      <header>
        <img className='logo1Img' src={Logo} onClick={() => navigate('/')} />
        <div className='buttonsContainer'>
          <Buttons onClick={() => onClickLink('nowMe')} path='' btnType='btn-header-about-us' btnTittle='About us' />
          <Buttons onClick={() => onClickLink('projects')} path='' btnType='btn-header-projects' btnTittle='Projects' />
          <Buttons onClick={() => onClickLink('services')} path='' btnType='btn-header-services' btnTittle='Services' />
          <Buttons onClick={() => onClickLink('contact')} path='' btnType='btn-header-contact' btnTittle='Contact' />
          <DropdownMenu
            nowMe={props.nowMe}
            projects={props.projects}
            services={props.services}
            contact={props.contact}
          />
          {!isLogged && (
            <Link style={{textDecoration:'none'}} to='/login'>
              <Buttons path='' btnType='btn-header-login' btnTittle='Login' />
            </Link>
          )}
          {isLogged && (
            <Buttons onClick={logOut} btnType='btn-header-logout' btnTittle='LogOut' />
          )}
        </div>
      </header>
    </>
  )
}
