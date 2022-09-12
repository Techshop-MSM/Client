import { Topmenu } from '../reusables/parts/Topmenu'
import { TopCarousel } from './landingpage-assets/TopCarousel'
import { TopSellings } from './landingpage-assets/TopSellings'
import { TrendingProducts } from './landingpage-assets/TrendingProducts'
import { KürlichHinzugefügt } from './landingpage-assets/KürzlichHinzugefügt'
import { BestBewertet } from './landingpage-assets/BestBewertet'
import { Footer } from '../reusables/parts/Footer'
import { MegaMenu } from '../reusables/parts/MegaMenu'
import { ShoppingCartPreview } from '../reusables/parts/ShoppingCartPreview'

import { Navbar, Offcanvas,Nav, NavDropdown, Form, FormControl,Button} from "react-bootstrap";


export const Home = () => {
return (
    <>
    <Topmenu/>
    <ShoppingCartPreview/>
    <MegaMenu/>
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