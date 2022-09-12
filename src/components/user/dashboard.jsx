import { useContext } from 'react'
import { AppContext } from '../global/useContext'
import { Logout } from '../userValidation/logout/logout'

export const Dashboard = () => {
    const { userData } = useContext(AppContext)
    console.log(userData)

    return (
        // Kannst du löschen, ist nur für den Login/Logout-Test
        <form onSubmit={Logout}>
            <h1>Hallo User {userData.username}</h1>
            <input type="submit" value="Logout" />
        </form>
    )
}
