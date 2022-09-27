import { createContext, useState, useEffect } from 'react'
import {
    deleteInLocalStorage,
    getFromLocalStorage,
    saveInLocalStorage,
} from '../reusables/codeSnippets/localStorage'

export const AppContext = createContext()

//LOAD loginToken and userData
const loginToken = getFromLocalStorage('auth')
const user = localStorage.getItem('user')

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(loginToken || null)
    const [userData, setUserData] = useState(JSON.parse(user) || null)

    // Handle by change
    useEffect(() => {
        //SAVE Token to LocalStorage
        token
            ? localStorage.setItem('auth', token)
            : localStorage.removeItem('auth')
        user
            ? saveInLocalStorage('user', userData)
            : deleteInLocalStorage('user')
    }, [loginToken])

    return (
        <AppContext.Provider value={{ token, setToken, userData, setUserData }}>
            {children}
        </AppContext.Provider>
    )
}
