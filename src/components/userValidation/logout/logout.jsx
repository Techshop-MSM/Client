import { Navigate } from 'react-router'
import { deleteInLocalStorage } from '../../reusables/codeSnippets/localStorage'

export const UserLogout = () => {
    const Logout = () => {
        deleteInLocalStorage('auth')
        deleteInLocalStorage('user')
        return <Navigate to="/" replace />
    }
    

    return (
        <form onSubmit={Logout}>
            <input type="submit" value="Logout" />
        </form>
    )
}
