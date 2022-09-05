import '../../../App.css'
import { Link } from 'react-router-dom'
import { inputTemplate } from './registerTemplate'
import { FormInputs } from './formInputs'
import { backendURL } from '../../../App.jsx'
import { useEffect, useState } from 'react'

export const Register = () => {
    const onChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    }

    const [userGroupe, setUserGroupe] = useState()
    const [registerData, setRegisterData] = useState({
        mail: '',
        confirmMail: '',
        username: '',
        password: '',
        confirmPassword: '',
        userGroupe: userGroupe,
    })

    useEffect(() => {
   }, "userGroupe")

    const validatePassword = () => {
        if (registerData.confirmPassword != registerData.password) {
            return 'Passwords are not equal!'
        }
    }

    const getPassword = async () => {
        const newPassword = await generatePassword()
        setRegisterData({
            ...registerData,
            confirmPassword: newPassword,
            password: newPassword,
        })
    }

    const getUserId = async (e) => {
        e.preventDefault()
        // const isValidatated = validateData(registerData)
        // if (isValidatated === false) return

        const result = await fetch(`${backendURL}/user/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        })
    }

    const kindOfUser = (e) => {
      setUserGroupe(e.target.value)
      setUserGroupe(e.target.value)
      console.log(userGroupe)
    }

    return (
        <section>
            <article className="signArticle">
                <div className="signContainer">
                    <h2 className="dark">Sign Up</h2>
                    <form className="form" onSubmit={(e) => getUserId(e)}>
                      <select name="" id="" onChange={kindOfUser}>
                        <option value="null">Auswählen</option>
                        <option value="private">Privatkunde</option>
                        <option value="company">Geschäftskunde</option>
                      </select>
                        {inputTemplate.map((input) => (
                            <FormInputs
                                key={input.id}
                                {...input}
                                value={registerData[inputTemplate.name]}
                                onChange={onChange}
                            />
                        ))}
                        <label htmlFor="">{validatePassword()}</label>
                        <input type="submit" value="Sign Up" />
                        <Link to="/login"></Link>
                    </form>
                </div>
            </article>
        </section>
    )
}
