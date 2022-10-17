import { useContext, useEffect } from 'react'
import { AppContext, DataContext } from './useContext'
import { backendURL } from '../../App'

export const databaseManager = async ({
  category = 'case',
  reason = 'load',
  userData,
  jsonData,
  setArticles,
}) => {
  //reason === 'clear' && setArticles([])

  console.log('cat', category)

  // Upload Data to DB
  const upload = {
    reason: reason,
    category: category,
    group: userData?.group,
    data: jsonData,
  }

  const res = await fetch(`${backendURL}/updateDatabase`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(upload),
  })
  const rawArticles = await res.json()
  setArticles(rawArticles)
  console.log(rawArticles)
}
