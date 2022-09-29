import { useContext, useRef } from 'react'
import { useNavigate } from 'react-router'
import { backendURL } from '../../../App'
import { AppContext } from '../../global/useContext'
import { saveInLocalStorage } from '../../reusables/codeSnippets/localStorage'

export const Login = () => {
  const { setToken, setUserData } = useContext(AppContext)
  const loginRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const getLoginData = async (e) => {
    e.preventDefault()
    const loginData = {
      identifier: loginRef.current.value,
      password: passwordRef.current.value,
    }

    const res = await fetch(`${backendURL}/login`, {
      method: 'post',
      withCredentials: true,

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })

    const resData = await res.json()
    console.log('loginInside', resData)
    setToken(resData.auth)
    setUserData(resData.userData)
    saveInLocalStorage('auth', resData.auth)
    saveInLocalStorage('user', resData.userData)

    if (resData.userData.group === 'private' || resData.userData.group === 'company') {
      res.status === 200 && navigate('/dashboard', { replace: true })
    }

    resData.userData.group === 'support' &&
      res.status === 200 &&
      navigate('/support/dashboard', { replace: true })

    resData.userData.group === 'admin' &&
      res.status === 200 &&
      navigate('/admin/dashboard', { replace: true })
  }

  return (
    <form onSubmit={getLoginData}>
      <label htmlFor="name">Username / E-Mail</label>
      <input type="text" placeholder="Username/E-Mail" ref={loginRef} id="name" />
      <label htmlFor="pw">Passwort</label>
      <input type="password" placeholder="Passwort" ref={passwordRef} id="pw" />
      <input type="submit" value="Login du Sau" />
    </form>
  )
}
