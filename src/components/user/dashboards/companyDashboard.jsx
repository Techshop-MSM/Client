import { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { AppContext } from '../../global/useContext'
import { getFromLocalStorage } from '../../reusables/codeSnippets/localStorage'

export const CompanyDashboard = () => {
    const { userData } = useContext(AppContext)
    const group = userData.usergroup
    console.log(userData)
    if (group === 'company') {
        return (
            <Row>
                <Col lg={12} style={{ padding: '2rem' }}>
                    <h1>
                        Hallo {userData.sex} {userData.contactPerson},
                        schön dass Sie wieder da sind!
                    </h1>
                    <h2>TEST COMPANY</h2>
                </Col>
                <Col
                    lg={6}
                    style={{
                        height: '20rem',
                        border: 'solid',
                        testAlign: 'center',
                    }}
                >
                    <p style={{ marginTop: '26%' }}>
                        Hier etwas was Sie interessieren könnte.
                    </p>
                </Col>
                <Col
                    lg={6}
                    style={{
                        height: '20rem',
                        border: 'solid',
                        testAlign: 'center',
                    }}
                >
                    <p style={{ marginTop: '26%' }}>Oder vllt das hier?</p>
                </Col>
                    <Col lg={2}></Col>
                <Col
                    lg={2}
                    style={{
                        height: '7rem',
                        border: 'solid',
                        testAlign: 'center',
                        columnGap: '0.5rem',
                    }}
                >
                    <p style={{ marginTop: '18%' }}>Rechnungen</p>
                </Col>
                <Col lg={1}></Col>
                <Col
                    lg={2}
                    style={{
                        height: '7rem',
                        border: 'solid',
                        testAlign: 'center',
                        columnGap: '0.5rem',
                    }}
                >
                    <p style={{ marginTop: '20%' }}>Contract RENT A SYSTEM</p>
                </Col>
                <Col lg={1}></Col>
                <Col
                    lg={2}
                    style={{
                        height: '7rem',
                        border: 'solid',
                        testAlign: 'center',
                        columnGap: '0.5rem',
                    }}
                >
                    <p style={{ marginTop: '16%' }}>User Daten bearbeiten</p>
                </Col>
            </Row>
        )
    }
}
