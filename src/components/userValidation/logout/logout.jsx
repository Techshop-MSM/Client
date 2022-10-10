import { Form } from 'react-bootstrap'
import { Navigate } from 'react-router'
import { deleteInLocalStorage } from '../../reusables/codeSnippets/localStorage'

export const UserLogout = () => {
  const Logout = () => {
    deleteInLocalStorage('auth')
    deleteInLocalStorage('user')
    return <Navigate to="/" replace />
  }

  return (
    <Form onSubmit={Logout} className="d-flex flex-column">
      <input
        value="Profil"
        type="submit"
        style={{
          backgroundColor: 'green',
          color: '#fff',
          fontWeight: 'bolder',
          marginBottom: '-0.1rem',
          padding: '0.2rem 1rem 0.2rem',
          borderRadius: '0.5rem 0 0',
        }}
      />
      <input
        value="Logout"
        type="submit"
        style={{
          backgroundColor: 'red',
          color: '#fff',
          fontWeight: 'bolder',
          marginTop: '-0.1rem',
          padding: '0.2rem 1rem 0.2rem',
          borderRadius: '0 0 0.5rem 0',
        }}
      />
    </Form>
  )
}
