import { ShopContent } from './shop-assets/content'
import { Filter } from './shop-assets/filter'

import { useContext, useEffect } from 'react'
import { AppContext, DataContext } from '../global/useContext'
import { databaseManager } from '../global/databaseManager'
import { ComparingModal } from '../reusables/parts/ComparingModal'

export const Shop = () => {
  const { category, setCategory, setArticles } = useContext(DataContext)

  useEffect(() => {
    databaseManager({ category, setArticles })
  }, [category])

  return (
    <>
      {/* <div style={{ backgroundColor: 'red', margin: 'auto', padding: '0.5rem' }}>
        <button onClick={() => setCategory('ram')}>ARBEITSSPEICHER</button>
        <span style={{ padding: '0.1rem' }}></span>
        <button onClick={() => setCategory('case')}>GEHÄUSE</button>
        <span style={{ padding: '0.1rem' }}></span>
        <button onClick={() => setCategory('cpu')}>CPU</button>
        <span style={{ padding: '0.1rem' }}></span>
        <button onClick={() => setCategory('storage')}>FESTPLATTE</button>
        <span style={{ padding: '0.1rem' }}></span>
        <button onClick={() => setCategory('gpu')}>GRAFIKKARTE</button>
        <span style={{ padding: '0.1rem' }}></span>
        <button onClick={() => setCategory('mainboard')}>MAINBOARD</button>
        <span style={{ padding: '0.1rem' }}></span>
        <button onClick={() => setCategory('powerAdapter')}>NETZTEIL</button>
        <span style={{ padding: '0.1rem' }}></span>
        <button onClick={() => setCategory('soundCard')}>SOUNDKARTE</button>
        <ComparingModal />
      </div> */}
      <Filter />
      <ShopContent />
    </>
  )
}
