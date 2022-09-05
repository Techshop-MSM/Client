//import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
//import { AppContext } from './context/userContext'

export const PrivateRoute = ({ children }) => {
    //const {loginToken} = useContext(AppContext)
    const loginToken = 'ABC123'
    return loginToken ? children : <Navigate to="/register" replace /> //<Navigate to="/login" replace />
}

