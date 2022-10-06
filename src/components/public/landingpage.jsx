import { TopCarousel } from './landingpage-assets/TopCarousel'
import { TopSellings } from './landingpage-assets/TopSellings'
import { TrendingProducts } from './landingpage-assets/TrendingProducts'
import { KürlichHinzugefügt } from './landingpage-assets/KürzlichHinzugefügt'
import { BestBewertet } from './landingpage-assets/BestBewertet'
import { Basket } from './Basket'
import { Topdescription } from './landingpage-assets/Topdescription'
import { ActionImg } from './landingpage-assets/ActionImg'
import { Feature } from './landingpage-assets/Feature'
import { Megatest } from '../reusables/parts/Megatest'
import { DashboardTemplate } from '../user/dashboards/DashbordTemplate'
import { Bestellungen } from '../user/dashboards/Bestellungen'
//import { CableFilter } from './productFilter/CableFilter'


export const Home = () => {
return (
    <>
    <Bestellungen/>
    <Megatest/>
    <Basket/>
    <TopCarousel/>
    <TopSellings/>
    <ActionImg/>
    <TrendingProducts/>
    <Feature/>
    <KürlichHinzugefügt/>
    <BestBewertet/>
    </>
)
}
