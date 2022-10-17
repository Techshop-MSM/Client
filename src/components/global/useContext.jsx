import { createContext, useState, useEffect } from 'react'
import {
  deleteInLocalStorage,
  getFromLocalStorage,
  saveInLocalStorage,
} from '../reusables/codeSnippets/localStorage'

export const AppContext = createContext()
export const DataContext = createContext()

// ----------------- LS LOAD -----------------
const tokenFromLS = getFromLocalStorage('auth')
const userFromLS = getFromLocalStorage('user')
//console.log('LS LOAD', userFromLS, tokenFromLS)

// ----------------- USER -----------------
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(tokenFromLS || null)
  const [userData, setUserData] = useState(userFromLS ? JSON.parse(userFromLS) : null)
  //const [userData, setUserData] = useState(userFromLS || null)

  // Handle userData and jwt-Token by change
  useEffect(() => {
    //SAVE Token to LocalStorage
    token ? saveInLocalStorage('auth', token) : deleteInLocalStorage('auth')
    userData ? saveInLocalStorage('user', userData) : deleteInLocalStorage('user')
  }, [token])
  

  return (
    <AppContext.Provider value={{ token, setToken, userData, setUserData }}>
      {children}
    </AppContext.Provider>
  )
}

// ----------------- DATA -----------------
export const DataProvider = ({ children }) => {
  const [category, setCategory] = useState('case')
  const [articles, setArticles] = useState(null)
  const [compare, setCompare] = useState([])

  useEffect(() => {
    saveInLocalStorage('cat', category)
    saveInLocalStorage('articles', articles)
<<<<<<< HEAD
  }, [category, articles])
=======
  }, [category, articles, compare])
>>>>>>> 2a60bf70ca65acdd1655229835a78c8200b3a551

  useEffect(() => {
    setCompare([])
  }, [category])

  return (
    <DataContext.Provider
      value={{ category, setCategory, articles, setArticles, compare, setCompare }}
    >
      {children}
    </DataContext.Provider>
  )
}
