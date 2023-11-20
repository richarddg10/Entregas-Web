import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthContextProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState({
        email: 'richardysantiago@gmail.com',
        password: 'richardysantiago'
    })

    const logIn = (inputUser) => {
        if (inputUser.email == user.email && inputUser.password == user.password) {
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
        console.log(user);
    }

    const logOut = () => {
        setIsLogged(false)
        console.log(isLogged);
    }

    return (
        <AuthContext.Provider value={ { isLogged, user, logIn, logOut } }>
            {children}
        </AuthContext.Provider>
    )
}