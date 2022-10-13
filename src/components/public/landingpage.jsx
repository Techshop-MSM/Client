import { TopCarousel } from './landingpage-assets/TopCarousel'
import { TopSellings } from './landingpage-assets/TopSellings'
import { TrendingProducts } from './landingpage-assets/TrendingProducts'
import { KürlichHinzugefügt } from './landingpage-assets/KürzlichHinzugefügt'
import { BestBewertet } from './landingpage-assets/BestBewertet'
import { ActionImg } from './landingpage-assets/ActionImg'
import { Feature } from './landingpage-assets/Feature'
import { Wishilist } from '../user/dashboards/Wishilist'
import { MainboardFilter } from './productFilter/MainboardFilter'
import { Megatest } from '../reusables/parts/Megatest'

export const Home = () => {
  return (
    <>
      <TopCarousel />
      <TopSellings />
      <ActionImg />
      <TrendingProducts />
      <Feature />
      <KürlichHinzugefügt />
      <BestBewertet />
    </>
  )
}
