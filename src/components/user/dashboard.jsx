import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AppContext } from '../global/useContext'
import { CompanyDashboard } from './dashboards/companyDashboard'
import { PrivateDashboard } from './dashboards/privateDashboard'


export const Dashboard = () => {
    const { userData } = useContext(AppContext)

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
