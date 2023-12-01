import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authFireBase, googleAuth } from '../../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { Inputs, Buttons } from '../../components'

import globalBackground from '../../assets/globalBackground.png'
import bgPhoneLogin from '../../assets/bgPhoneLogin.png'
import Logo from '../../assets/driscoLogo.png'
import googleIcon from '../../assets/googleIcon.png'
import facebookIcon from '../../assets/facebookIcon.png'
import appleIcon from '../../assets/appleIcon.png'
import '../Login/Login.css'


export function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(authFireBase, email, password)
            console.log(authFireBase.currentUser?.email);
            navigate('/')
        } catch (error) {
            alert("El correo o la contraseña son incorrectos")
        }
    }

    const googleLogIn = async () => {
        try {
            await signInWithPopup(authFireBase, googleAuth)
            navigate('/')
        } catch (error) {
            alert("El correo o la contraseña son incorrectos")
        }
    }

    console.log(authFireBase?.currentUser?.email);
    
    return (
        <>
            <div className='big-login-div'>
                <img className='globalBackgroundImg' src={globalBackground} />
                <img className='bgPhoneLogin' src={bgPhoneLogin} />
                <div className='login-form-div'>
                    <img className='driscoLogo' src={Logo} />
                    <h1 className='loginTittle'>Welcome <span className='spanWelcome'>To keep connected with us, please login with your personal info</span></h1>
                    <div className='inputs-btns-div'>
                        <div className='inputsDiv'>
                            <Inputs inputClass='input-email' inputName='Email' onChange={(e) => setEmail(e.target.value)} />
                            <Inputs inputClass='input-password' inputType='password' inputName='Password' onChange={(e) => setPassword(e.target.value)} />
                            <Buttons onClick={logIn} btnType='btn-login' btnTittle='LogIn' />
                        </div>
                        <div className='other-login-text'>
                            <div></div>
                            <h2>Or log in with</h2>
                            <div></div>
                        </div>
                        <div className='btnsLogDiv'>
                            <Buttons onClick={googleLogIn} btnType='btn-google-login' imgBtn={googleIcon} imgBtnW='20.63px' imgBtnH='20.63px' btnTittle='Google' />
                            <Buttons onClick={logIn} btnType='btn-facebook-login' imgBtn={facebookIcon} imgBtnW='20.63px' imgBtnH='20.63px' btnTittle='Facebook' />
                            <Buttons onClick={logIn} btnType='btn-apple-login' imgBtn={appleIcon} imgBtnW='17.73px' imgBtnH='20.63px' btnTittle='Apple' />
                        </div>
                    </div>
                    <a className='footerLogin' href=''>Forgot Password?</a>
                </div>
            </div>
        </>
    )
}