import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AppContext } from '../global/useContext'
import { getFromLocalStorage, saveInLocalStorage } from '../reusables/codeSnippets/localStorage'
import { CompanyDashboard } from './dashboards/companyDashboard'
import { PrivateDashboard } from './dashboards/privateDashboard'


export const Dashboard = () => {
    const { token, setToken, userData } = useContext(AppContext)
    //getFromLocalStorage(token) && saveInLocalStorage('auth', token)

    return (
        <>
            {/* "privat" Customer Dashboard */}
            {userData.group === 'private' && (
                <Container>
                    <PrivateDashboard />
                </Container>
            )}
            {/* "company" Customer Dashboard */}
            {userData.group === 'company' && (
                <Container>
                    <CompanyDashboard />
                </Container>
            )}
        </>
    )
}
