import { Topmenu } from '../reusables/parts/Topmenu'
import { TopCarousel } from './landingpageAssets/TopCarousel'
import { TopSellings } from './landingpageAssets/TopSellings'
import { TrendingProducts } from './landingpageAssets/TrendingProducts'
import { KürlichHinzugefügt } from './landingpageAssets/KürzlichHinzugefügt'
import { BestBewertet } from './BestBewertet'
import { Footer } from '../reusables/parts/Footer'
import { MegaMenu } from '../reusables/parts/MegaMenu'
import { ShoppingCartPreview } from '../reusables/parts/ShoppingCartPreview'

export const Home = () => {
    return (
        <>
            <Topmenu />
            <ShoppingCartPreview />
            <MegaMenu />
            <TopCarousel />
            <img
                src="https://www.alternate.de/tw/mar-86201/teaser/desktop/MAR-86201_Cont_d.jpg"
                className="img-Fluid"
            ></img>
            <TopSellings />
            <TrendingProducts />
            <KürlichHinzugefügt />
            <BestBewertet />
            <Footer />
        </>
    )
}
