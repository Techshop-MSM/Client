import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../global/useContext'
import { deleteInLocalStorage } from '../reusables/codeSnippets/localStorage'

// If !token -> kick User
export const PrivateRoute = ({ children }) => {
    const { token } = useContext(AppContext)
    console.log(token)
    return token ? children : <Navigate to="/" replace />
}
