import { deleteInLocalStorage } from "../../reusables/localStorage"


export const Logout = () => {
    deleteInLocalStorage('auth')
    //logout( "/", {replace:true})
}