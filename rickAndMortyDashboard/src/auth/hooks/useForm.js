import { useAuth } from "./useAuth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function useForm() {
    
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    
    const { logIn, logOut } = useAuth()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        logIn(formState)
        navigate('/dashboard')
    }

    const handleLogOut = (e) => {
        e.preventDefault()
        logOut()
        navigate('/')
    }
    
    const handleOnChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name] : target.value
        })
        console.log(target);
    }

    return {
        formState,
        handleOnChange,
        handleSubmit,
        handleLogOut
    }
}
