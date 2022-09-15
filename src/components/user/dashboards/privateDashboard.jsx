import { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { AppContext } from '../../global/useContext'

export const PrivateDashboard = () => {
    const { userData } = useContext(AppContext)
    const group = userData.group
    console.log('dashboard', userData)
    if (group === 'private') {
        return (
            <Row>
                {/* HEADLINE */}
                <Col lg={12} style={{ padding: '2rem' }}>
                    <h1>
                        Hallo {userData.username}, schön dass du wieder da bist!
                    </h1>
                </Col>
                {/* CHANGE PASSWORD */}
                <Col
                    lg={5}
                    m={1}
                    style={{
                        height: '20rem',
                        border: 'solid',
                        testAlign: 'center',
                    }}
                >
                    <label
                        htmlFor="oldPassword"
                        style={{ width: '100%', padding: '0.5rem' }}
                    >
                        Aktuelles Passwort
                    </label>
                    <input type="text" name="" id="oldPassword" />
                    <label
                        htmlFor="newPassword"
                        style={{ width: '100%', padding: '0.5rem' }}
                    >
                        Neues passwort
                    </label>
                    <input type="text" name="" id="newPassword" />
                    <label
                        htmlFor="confirmPassword"
                        style={{ width: '100%', padding: '0.5rem' }}
                    >
                        Neues Passwort
                    </label>
                    <input type="text" name="" id="confirmPassword" />
                    <button
                        type="submit"
                        style={{
                            width: '60%',
                            margin: '2rem',
                            padding: '0.5rem',
                        }}
                    >
                        Ändern
                    </button>
                </Col>
                <Col
                    lg={1}
                    style={{
                        height: '20rem',
                        border: 'solid',
                        testAlign: 'center',
                    }}
                ></Col>
                {/* CHANGE E-MAIL */}
                <Col
                    lg={5}
                    style={{
                        height: '20rem',
                        border: 'solid',
                        testAlign: 'center',
                    }}
                >
                    <label
                        htmlFor="oldMail"
                        style={{ width: '100%', padding: '0.5rem' }}
                    >
                        Derzeitige E-Mail Addresse
                    </label>
                    <input type="text" name="" id="oldMail" />
                    <label
                        htmlFor="password"
                        style={{ width: '100%', padding: '0.5rem' }}
                    >
                        Passwort
                    </label>
                    <input type="text" name="" id="password" />
                    <label
                        htmlFor="newMail"
                        style={{ width: '100%', padding: '0.5rem' }}
                    >
                        neue E-Mail Adresse
                    </label>
                    <input type="text" name="" id="newMail" />
                    <button
                        type="submit"
                        style={{
                            width: '60%',
                            margin: '2rem',
                            padding: '0.5rem',
                        }}
                    >
                        Aktualisieren
                    </button>
                </Col>
                {/* CHANGE RECHNUNGSDATEN AND LIEFERANSCHRIFT */}
                <Col
                    lg={5}
                    style={{
                        height: '7rem',
                        border: 'solid',
                        testAlign: 'center',
                        columnGap: '0.5rem',
                    }}
                >
                    <p style={{ marginTop: '10%' }}>
                        ... keine Rechnungsdaten hinterlegt
                    </p>
                </Col>
                <Col lg={1}></Col>
                {/* CHANGE LIEFERANSCHRIFT */}
                <Col
                    lg={5}
                    style={{
                        height: '7rem',
                        border: 'solid',
                        testAlign: 'center',
                        columnGap: '0.5rem',
                    }}
                >
                    <p style={{ marginTop: '10%' }}>
                        ... keine Lieferanschrift hinterlegt
                    </p>
                </Col>
                <Col lg={1}></Col>
                {/* RATEABLE PRODUCTS */}
                <Row>
                    <Col
                        lg={2}
                        style={{
                            height: '7rem',
                            border: 'solid',
                            testAlign: 'center',
                            columnGap: '0.5rem',
                            margin: '0.5rem',
                        }}
                    >
                        <p style={{ marginTop: '22%' }}>Rate me!</p>
                    </Col>
                    <Col
                        lg={2}
                        style={{
                            height: '7rem',
                            border: 'solid',
                            testAlign: 'center',
                            columnGap: '0.5rem',
                            margin: '0.5rem',
                        }}
                    >
                        <p style={{ marginTop: '22%' }}>Rate me!</p>
                    </Col>
                    <Col
                        lg={2}
                        style={{
                            height: '7rem',
                            border: 'solid',
                            testAlign: 'center',
                            columnGap: '0.5rem',
                            margin: '0.5rem',
                        }}
                    >
                        <p style={{ marginTop: '22%' }}>Rate me!</p>
                    </Col>
                    <Col
                        lg={2}
                        style={{
                            height: '7rem',
                            border: 'solid',
                            testAlign: 'center',
                            columnGap: '0.5rem',
                            margin: '0.5rem',
                        }}
                    >
                        <p style={{ marginTop: '22%' }}>Rate me!</p>
                    </Col>
                    <Col
                        lg={2}
                        style={{
                            height: '7rem',
                            border: 'solid',
                            testAlign: 'center',
                            columnGap: '0.5rem',
                            margin: '0.5rem',
                        }}
                    >
                        <p style={{ marginTop: '22%' }}>Rate me!</p>
                    </Col>
                </Row>
            </Row>
        )
    }
}
