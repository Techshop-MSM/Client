import { Logout } from '../userValidation/logout/logout'

export const Dashboard = () => {
    return (
        // Kannst du löschen, ist nur für den Login/Logout-Test
        <form onSubmit={Logout}>
            <input type="submit" value="Logout" />
        </form>
    )
}
