import { useState } from "react"
import { Nav } from "react-bootstrap"
import { Login } from "./login/login"
import { Register } from "./register/register"


export const ValidationModal = () => {
    const [modalToggle, setModalToggle] = useState(true)

    return (
        <div>
            <Nav>
                <div onClick={() => setModalToggle(!modalToggle)}>LOGIN</div>
                <div onClick={() => setModalToggle(!modalToggle)}>
                    REGISTRIEREN
                </div>
            </Nav>
            {modalToggle ? <Login /> : <Register />}
        </div>
    )
}
