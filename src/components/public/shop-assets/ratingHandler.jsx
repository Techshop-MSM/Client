export const rating = (count, ratings) => {
  const sum = ratings.reduce((acc, value) => {
    return acc + value
  }, 0)
  return sum / count
}
