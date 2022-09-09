export const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

export const deleteInLocalStorage = (key) => {
    localStorage.removeItem(key)
}

export const getFromLocalStorage = (key) => {
    localStorage.getItem(key)
}
