import { useContext } from 'react'
import { AppContext, DataContext } from '../../global/useContext'

// ------- Filters -------
import { CaseFilter } from '../productFilter/CaseFilter'
import { CpuFilter } from '../productFilter/CpuFilter'
import { GrafikcardFilter } from '../productFilter/GrafikcardFilter'
import { NetzteilFilter } from '../productFilter/NetzteileFilter'
import { RamFilter } from '../productFilter/RamFilter'
import { SoundCardsFilter } from '../productFilter/SoundCardsFilter'
import { StorageFilter } from '../productFilter/StorageFilter'

export const Filter = () => {
  const { userData } = useContext(AppContext)
  const { category, setCategory, articles, setArticles } = useContext(DataContext)

  return (
    <>
      {category === 'case' && <CaseFilter />}
      {category === 'cpu' && <CpuFilter />}
      {category === 'gpu' && <GrafikcardFilter />}
      {category === 'mainboard' && <MainboardFilter />}
      {category === 'powerAdapter' && <NetzteilFilter />}
      {category === 'ram' && <RamFilter />}
      {category === 'storage' && <StorageFilter />}
      {category === 'soundCard' && <SoundCardsFilter />}
    </>
  )
}
