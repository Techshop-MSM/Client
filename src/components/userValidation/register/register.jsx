import '../../../App.css'
import { Link } from 'react-router-dom'
import { inputTemplate } from './registerTemplate'
import { companyTemplate } from './companyTemplate'
import { FormInputs } from './formInputs'
import { backendURL } from '../../../App.jsx'
import { useEffect, useState } from 'react'
import {
    Button,
    Container,
    Col,
    Row,
    Form,
    Modal,
    InputGroup,
} from 'react-bootstrap'

export const Register = () => {
    const onChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }

    // STYLES

    const checkboxSettings = {
        width: '1.3rem',
        height: '1.3rem',
        margin: '0.5rem',
        verticalAlign: 'middle',
    }
    const labelSettings = {
        maxWidth: '6rem',
        height: '1.3rem',
        verticalAlign: 'middle',
        margin: '0 0.5rem 0.1rem 0',
    }

    const [isValidatated, setIsValidatated] = useState(false)
    const [registerData, setRegisterData] = useState({
        email: '',
        company: '',
        contactPerson: '',
        username: '',
        password: '',
        confirmPassword: '',
        userGroupe: 'private',
    })

    useEffect(() => {
        console.log('regData:', registerData.userGroupe)
    }, [registerData])

    const validatePassword = () => {
        if (registerData.confirmPassword != registerData.password) {
            return 'Passwords are not equal!'
        }
    }

    const validateData = (data) => {
        const success = { status: true, msg: 'Alles ausgefüllt!' }
        const fail = { status: false, msg: 'Ups! Da fehlt wohl noch etwas?' }
        let vali = false

        if (data.userGroupe === 'company') {
            vali =
                data.mail && data.companyName && data.contactPerson
                    ? success
                    : fail
        } else {
            vali = data.mail && data.username ? success : fail
        }
        setIsValidatated(vali.status)
        return vali
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        // if (!isValidatated) return

        const result = await fetch(`${backendURL}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        })
        console.log(registerData)
        await console.log(result)
    }

    // const kindOfUser = (e) => {
    //     setUserGroupe( e.target.value )
    // }

    return (
        <section>
            <article>
                <div>
                    <h2>Sign Up</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <h5>Kundenstatus</h5>
                        <select
                            name="userGroupe"
                            id=""
                            onChange={onChange}
                            placeholder="Rolle"
                            style={{
                                fontSize: '1.2rem',
                                margin: '1rem',
                                padding: '0.5rem 1rem',
                            }}
                        >
                            <option value="null" disabled selected hidden>
                                Auswählen
                            </option>
                            <option value="private">Privatkunde</option>
                            <option value="company">Geschäftskunde</option>
                        </select>
                        <Container>
                            <Row>
                                {registerData.userGroupe === 'private'
                                    ? inputTemplate.map((input) => (
                                          <FormInputs
                                              key={input.id}
                                              {...input}
                                              value={
                                                  registerData[
                                                      inputTemplate.name
                                                  ]
                                              }
                                              onChange={onChange}
                                          />
                                      ))
                                    : companyTemplate.map((input) => (
                                          <FormInputs
                                              key={`c_${input.id}`}
                                              {...input}
                                              value={
                                                  registerData[
                                                      companyTemplate.name
                                                  ]
                                              }
                                              onChange={onChange}
                                          />
                                      ))}
                            </Row>
                        </Container>

                        <label>{validatePassword()}</label>

                        <input
                            type="checkbox"
                            name="Newsletter"
                            id="nl"
                            value="Newsletter"
                            style={checkboxSettings}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="nl"
                            style={labelSettings}
                        >
                            Newsletter
                        </label>

                        <input
                            type="checkbox"
                            name="AGB"
                            id="agb"
                            value="AGB"
                            style={checkboxSettings}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="agb"
                            style={labelSettings}
                        >
                            AGB
                        </label>

                        <input
                            type="checkbox"
                            name="Datenschutz"
                            id="ds"
                            value="Datenschutz"
                            style={checkboxSettings}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="ds"
                            style={labelSettings}
                        >
                            Datenschutz
                        </label>
                        <input
                            type="submit"
                            value="Sign Up"
                            style={{
                                padding: '0.25rem 1rem',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                marginLeft: '2rem',
                            }}
                        />
                        <Link to="/login"></Link>
                    </form>
                </div>
            </article>
        </section>
    )
}
