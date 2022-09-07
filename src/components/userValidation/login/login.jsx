import { useRef } from 'react'
import { useNavigate } from 'react-router'
import { saveInLocalStorage } from '../../reusables/localStorage'

export const Login = () => {
    const loginRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    // LOGIN TEST
    const user = "Testi"
    const password = "123"

    const getLoginData = async (e) => {
        e.preventDefault()
        const loginData = {
            username: loginRef.current.value,
            password: passwordRef.current.value,
        }

        // const res = await fetch(`${backendURL}/user/login`, {
        //     method: 'post',
        //     withCretentials: true,

        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(loginData),
        // })

        // console.log(res)
        // console.log(res.auth)
        // saveInLocalStorage('auth', res.auth)
        saveInLocalStorage('auth', user)
        loginData.username === user && loginData.password === password &&
        navigate( "/dashboard", {replace:true})
    }

    return (
        <form onSubmit={getLoginData}>
            <label htmlFor="name">Username / E-Mail</label>
            <input
                type="text"
                placeholder="Username/E-Mail"
                ref={loginRef}
                id="name"
            />
            <label htmlFor="pw">Passwort</label>
            <input
                type="password"
                placeholder="Passwort"
                ref={passwordRef}
                id="pw"
            />
            <input type="submit" value="Login du Sau" />
        </form>
    )
}
