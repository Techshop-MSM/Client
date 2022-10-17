export const saveInLocalStorage = (key, value) => {
  key != 'auth'
    ? localStorage.setItem(key, JSON.stringify(value))
    : localStorage.setItem(key, value)
}

export const deleteInLocalStorage = (key) => {
  localStorage.removeItem(key)
}

export const getFromLocalStorage = (key) => {
  return localStorage.getItem(key)
}
