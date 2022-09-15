<<<<<<< HEAD
import { Topmenu } from '../reusables/parts/Topmenu'
=======
>>>>>>> 52d233e07b263caa1d980b2a3322468845cf71c9
import { TopCarousel } from './landingpage-assets/TopCarousel'
import { TopSellings } from './landingpage-assets/TopSellings'
import { TrendingProducts } from './landingpage-assets/TrendingProducts'
import { KürlichHinzugefügt } from './landingpage-assets/KürzlichHinzugefügt'
import { BestBewertet } from './landingpage-assets/BestBewertet'
<<<<<<< HEAD
import { Footer } from '../reusables/parts/Footer'
import { MegaMenu } from '../reusables/parts/MegaMenu'
import { ShoppingCartPreview } from '../reusables/parts/ShoppingCartPreview'
=======
>>>>>>> 52d233e07b263caa1d980b2a3322468845cf71c9



export const Home = () => {
return (
    <>
    <TopCarousel/>
    <img src='https://www.alternate.de/tw/mar-86201/teaser/desktop/MAR-86201_Cont_d.jpg' className='img-Fluid'></img>
    <TopSellings/>
    <TrendingProducts/>
    <KürlichHinzugefügt/>
    <BestBewertet/>
    </>
)
}
