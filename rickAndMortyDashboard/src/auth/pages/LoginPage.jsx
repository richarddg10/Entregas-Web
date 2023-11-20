import { AuthContextProvider } from "../context/AuthContextProvider"
import { useForm } from "../hooks/useForm"

import './LoginPage.css'

export function LoginPage() {

    const {formState, handleOnChange, handleSubmit} = useForm()

    return (
        <AuthContextProvider>
            <main className="loginMain">
                <div className="div1">
                    <img className="logoRickAndMorty" src="../../src/assets/logoRickAndMorty.png" alt="" />
                    <h1 className="loginTitle">Dashboard</h1>
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <input className="emailInput" type="email"
                            name="email" id=""
                            onChange={handleOnChange}
                            value={formState.email} />

                        <input className="passwordInput" type="password"
                            name="password"
                            onChange={handleOnChange}
                            value={formState.password} />

                        <button className="loginButton" type="submit">Login</button>
                    </form>
                </div>
                <div className="div2">
                    <img className="loginImg" src="../../../src/assets/loginImg.png" alt="" />
                </div>
            </main>
        </AuthContextProvider>
    )
}