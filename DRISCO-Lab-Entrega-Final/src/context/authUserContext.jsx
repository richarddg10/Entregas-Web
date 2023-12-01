import { createContext, useState, useEffect, useContext } from 'react'
import { authFireBase } from '../config/firebase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState()

    useEffect(() => {
        const userChanges = authFireBase.onAuthStateChanged((user) => {
            setIsLogged(user)
        })
        return () => userChanges()
    }, [])

    const value = {
        isLogged
    }
    
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    return useContext (AuthContext)
}