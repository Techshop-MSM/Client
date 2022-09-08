import { useState } from "react"
import { Login } from "./login/login"
import { Register } from "./register/register"

export const ValidationModal = () => {

    const [modalToggle, setModalToggle] = useState(true)

    return (
        <div>
            <nav>
                <div onClick={(()=> setModalToggle(!modalToggle))}>LOGIN</div>
                <div onClick={(()=> setModalToggle(!modalToggle))}>REGISTRIEREN</div>
            </nav>
            {modalToggle ? <Login /> : <Register />}
        </div>
        
    )
}