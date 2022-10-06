export const restuctArticleData = async (articles) => {
  const newData = []
  newData.push(
    await articles.map((article) => {
      obj = {
        articleName: article.baseData.articleName,
        articleNr: article.articleNr,
        category: article.category,
        comments: article.comments,
        stock: article.counter.stock,
        ratingCounter: article.counter.ratingCounter,
        purchases: article.counter.purchases,
        ratings: article.counter.ratings,
        priceEK: article.priceEK,
        producerNr: article.producerNr,
      }
      details = Object.entries(article).map((entry, i) => {
        entry[0] != 'baseData' && (entry[0] = entry[1])
      })
    })
  )

  console.log('newData', newData)
  return newData
}
