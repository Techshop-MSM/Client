export const saveInLocalStorage = (key, value) => {
    localStorage.setItem(key, value)
}

export const deleteInLocalStorage = (key, value) => {
    localStorage.removeItem(key, value)
}

export const getFromLocalStorage = (key, value) => {
    localStorage.getItem(key, value)
}
