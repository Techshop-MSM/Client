import React, { useContext, useState } from 'react'
import {
    Button,
    Container,
    Col,
    Row,
    Form,
    Modal,
    Tabs,
    Tab,
} from 'react-bootstrap'
import { AppContext } from '../global/useContext'
import { Login } from './login/login'
import { UserLogout } from './logout/logout'
import { Register } from './register/register'

export function LogInModal() {
    const [lgShow, setLgShow] = useState(false)
    const [modalToggle, setModalToggle] = useState(true)
    const { token } = useContext(AppContext)

    return (
        <>
            {token ? (
                <UserLogout />
            ) : (
                <div>
                    <Button onClick={() => setLgShow(true)}>
                        LogIn / Register
                    </Button>
                    <Modal
                        size="xl"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton className="color-green">
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Kontakt
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col lg={12} md={12}>
                                        <div
                                            style={{
                                                textAlign: 'center',
                                                padding: '2rem',
                                            }}
                                            onClick={() =>
                                                setModalToggle(!modalToggle)
                                            }
                                        >
                                            LOGIN/REGISTER
                                        </div>
                                    </Col>

                                    {/* <Col lg={6} md={6}>
                                    <div onClick={() => setModalToggle(!modalToggle)}>REGISTRIEREN</div>
                                </Col> */}
                                </Row>
                            </Container>
                            {modalToggle ? <Login /> : <Register />}
                        </Modal.Body>
                    </Modal>
                </div>
            )}
        </>
    )
}
