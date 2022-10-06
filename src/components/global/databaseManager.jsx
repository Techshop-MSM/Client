import { useContext } from 'react'
import { AppContext, DataContext } from './useContext'
import { backendURL } from '../../App'

export const databaseManager = async (cat, reason) => {
  console.log('reason', reason)
  const { userData } = useContext(AppContext)
  console.log('userDataToUpload', userData)
  const { category, articles, setArticles } = useContext(DataContext)
  //reason === 'clear' && setArticles([])

 
  console.log('cat', category)

  // Upload Data to DB
  const upload = {
    reason: reason,
    category: category,
    group: userData.group,
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
  //const decoratedArticles = decorateData(rawArticles)
  setArticles(rawArticles)
  console.log('globalArticles', articles)
  return articles
}
