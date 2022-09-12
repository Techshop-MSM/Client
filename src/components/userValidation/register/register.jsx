import '../../../App.css'
import { Link } from 'react-router-dom'
import { inputTemplate } from './registerTemplate'
import { companyTemplate } from './companyTemplate'
import { FormInputs } from './formInputs'
import { backendURL } from '../../../App.jsx'
import { useEffect, useState } from 'react'

export const Register = () => {
    const onChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }

    const [isValidatated, setIsValidatated] = useState(false)
    const [registerData, setRegisterData] = useState({
        email: '',
        companyName: '',
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

        const success = {status: true, msg: 'Alles ausgefüllt!'}
        const fail = {status: false, msg: 'Ups! Da fehlt wohl noch etwas?'}
        let vali = false

        if (data.userGroupe === 'company') {
            vali = data.mail && data.companyName && data.contactPerson
            ? success
            : fail
        } else {
            vali = data.mail && data.username
            ? success
            : fail
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
                        <select name="userGroupe" id="" onChange={onChange}>
                            <option value="null">Auswählen</option>
                            <option value="private">Privatkunde</option>
                            <option value="company">Geschäftskunde</option>
                        </select>
                        {registerData.userGroupe === 'private'
                            ? inputTemplate.map((input) => (
                                  <FormInputs
                                      key={input.id}
                                      {...input}
                                      value={registerData[inputTemplate.name]}
                                      onChange={onChange}
                                  />
                              ))
                            : companyTemplate.map((input) => (
                                  <FormInputs
                                      key={`c_${input.id}`}
                                      {...input}
                                      value={registerData[companyTemplate.name]}
                                      onChange={onChange}
                                  />
                              ))}
                        <label>{validatePassword()}</label>

                        <input
                            type="checkbox"
                            name="Newsletter"
                            id="nl"
                            value="Newsletter"
                        />
                        <label className="form-check-label" htmlFor="nl">
                            Newsletter
                        </label>

                        <input
                            type="checkbox"
                            name="AGB"
                            id="agb"
                            value="AGB"
                        />
                        <label className="form-check-label" htmlFor="agb">
                            AGB
                        </label>

                        <input
                            type="checkbox"
                            name="Datenschutz"
                            id="ds"
                            value="Datenschutz"
                        />
                        <label className="form-check-label" htmlFor="ds">
                            Datenschutz
                        </label>
                        <input type="submit" value="Sign Up" />
                        <Link to="/login"></Link>
                    </form>
                </div>
            </article>
        </section>
    )
}
