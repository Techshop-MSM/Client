import { deleteInLocalStorage } from '../../reusables/codeSnippets/localStorage'

export const Logout = () => {
    deleteInLocalStorage('auth')
}
