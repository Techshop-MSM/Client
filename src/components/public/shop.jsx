import { ShopContent } from './shop-assets/content'
import { Filter } from './shop-assets/filter'

import { useContext } from 'react'
import { AppContext, DataContext } from '../global/useContext'
import { databaseManager } from '../global/databaseManager'

export const Shop = () => {
  const { category, setCategory, articles, setArticles } = useContext(DataContext)
  return (
    <>
      <button onClick={() => setCategory('case')}>CASE</button>
      <button onClick={() => setCategory('cpu')}>CPU</button>
      <button onClick={() => setCategory('gpu')}>GPU</button>
      <button onClick={() => setCategory('mainboard')}>MAINBOARD</button>
      <button onClick={() => {setCategory('case'), databaseManager('load')}}>Fetch Cases</button>

      <Filter />
      <ShopContent />
    </>
  )
}
