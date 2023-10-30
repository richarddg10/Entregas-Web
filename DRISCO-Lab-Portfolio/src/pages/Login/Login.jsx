import React from 'react'

import globalBackground from '../../assets/globalBackground.png'
import Logo from '../../assets/driscoLogo.png'
import '../Login/Login.css'

import { Inputs, Buttons } from '../../components'
import { Link } from 'react-router-dom'

export function Login() {
    return (
        <>
        <div className='big-login-div'>
            {/* <img className='globalBackgroundImg' src={globalBackground} /> */}
            <img className='driscoLogo' src={Logo} />
            <h1 className='loginTittle'>Welcome <span className='spanWelcome'>To keep connected with us, please login with your personal info</span></h1>
            <div className='inputs-btns-div'>
                <div className='inputsDiv'>
                    <Inputs inputW='304.69px' inputH='35.52px' inputBgColor='white' inputBorder='none' inputRadio='8px' inputType='email' inputName='Email' />
                    <Inputs inputW='304.69px' inputH='35.52px' inputBgColor='white' inputBorder='none' inputRadio='8px' inputType='password' inputName='Password' />
                    <Link to='/'>
                        <Buttons bgColor='#FE6346' btnRadio='9.77px' btnW='324.69px' btnH='55.52px' fSize='13.68px' btnTittle='Login'/>
                    </Link>
                </div>
                <div className='btnsLogDiv'>
                    <Buttons bgColor='#3D6AD6' btnRadio='29.13px' btnW='324.69px' btnH='55.52px' btnTittle='Google'/>
                    <Buttons bgColor='#3D6AD6' btnRadio='29.13px' btnW='324.69px' btnH='55.52px' btnTittle='Facebook'/>
                    <Buttons bgColor='#3D6AD6' btnRadio='29.13px' btnW='324.69px' btnH='55.52px' btnTittle='Apple'/>
                </div>
            </div>
            <a className='footerLogin' href=''>Forgot Password?</a>
        </div>
        </>
    )
}