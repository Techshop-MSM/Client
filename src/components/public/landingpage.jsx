import { Topmenu } from './Topmenu'
import { TopCarousel } from './TopCarousel'
import { TopSellings } from './TopSellings'
import { TrendingProducts } from './TrendingProducts'
import { KürlichHinzugefügt } from './KürzlichHinzugefügt'
import { BestBewertet } from './BestBewertet'
import { Footer } from './Footer'
import { MegaMenu } from './MegaMenu'
import { TestNav } from './TestNav'

export const Home = () => {
return (
    <>

    <Topmenu/>
    <MegaMenu/>
    <TestNav/>
    <TopCarousel/>
    <img src='https://www.alternate.de/tw/mar-86201/teaser/desktop/MAR-86201_Cont_d.jpg' className='img-Fluid'></img>
    <TopSellings/>
    <TrendingProducts/>
    <KürlichHinzugefügt/>
    <BestBewertet/>
    <Footer/>
    </>
)
}