import { Logout } from '../userValidation/logout/logout'

export const Dashboard = () => {
    return (
        // Kannst du löschen, ist nur für den Login/Logout-Test
        <form onSubmit={Logout}>
            <h1>Hallo User {user.name}</h1>
            <input type="submit" value="Logout" />
        </form>
    )
}
