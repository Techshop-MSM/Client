import React, { useState } from 'react'
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
import { Login } from './login/login'
import { Register } from './register/register'

export function LogInModal() {
    const [lgShow, setLgShow] = useState(false)

    const [modalToggle, setModalToggle] = useState(true)

    return (
        <>
            <Button className="bg-green" onClick={() => setLgShow(true)}>
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
                    <nav>
                        <div onClick={() => setModalToggle(!modalToggle)}>
                            LOGIN
                        </div>
                        <div onClick={() => setModalToggle(!modalToggle)}>
                            REGISTRIEREN
                        </div>
                    </nav>
                    {modalToggle ? <Login /> : <Register />}
                </Modal.Body>
            </Modal>
        </>
    )
}
