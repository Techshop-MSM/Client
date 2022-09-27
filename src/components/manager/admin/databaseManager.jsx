import { useContext } from "react"
import { AppContext } from "../../global/useContext"



export const DatabaseManager = async (reason, category, jsonData) => {
    // if (userData.group != admin) {
    //   return
    // }
    const { userData } = useContext(AppContext)

    reason === 'clear' && setArticles('load new Category...')

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
    console.log('rawArticles', rawArticles)
    const articles = restuctArticleData(rawArticles)
    console.log(articles)
    return articles
  }
