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
    const [userGroupe, setUserGroupe] = useState('private')
    const [registerData, setRegisterData] = useState({
        mail: '',
        companyName: '',
        contactPerson: '',
        username: '',
        password: '',
        confirmPassword: '',
        userGroupe: '',
    })

    useEffect(() => {
        console.log('regData:', registerData)
        console.log(registerData.userGroupe)
    }, [registerData])

    const validatePassword = () => {
        if (registerData.confirmPassword != registerData.password) {
            return 'Passwords are not equal!'
        }
    }

    const validateData = (data) => {
        if (data.userGroupe === 'company') {
            data.mail && data.companyName && data.contactPerson
                ? 'Alles ausgefüllt!'
                : 'Ups! Da fehlt wohl noch etwas?'
        } else {
            data.mail && data.username
                ? 'Alles ausgefüllt!'
                : 'Ups! Da fehlt wohl noch etwas?'
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        
        if (!isValidatated) return

        const result = await fetch(`${backendURL}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        })
        console.log(registerData)
    }

    return (
        <section>
            <article className="signArticle">
                <div className="signContainer">
                    <h2 className="dark">Sign Up</h2>
                    <form className="form" onSubmit={(e) => onSubmit(e)}>
                        <h5>Kundenstatus</h5>
                        <select name="" id="">
                            <option value="null">Auswählen</option>
                            <option value="private">Privatkunde</option>
                            <option value="company">Geschäftskunde</option>
                        </select>
                        {userGroupe === 'private'
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
                        <label htmlFor="">{validatePassword()}</label>
                        <label htmlFor="">{validateData(registerData)}</label>
                        <input type="submit" value="Sign Up" />
                        <Link to="/login"></Link>
                    </form>
                </div>
            </article>
        </section>
    )
}
