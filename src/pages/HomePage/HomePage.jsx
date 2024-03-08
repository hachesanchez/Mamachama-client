import Header from '../../components/HomeComponents/Header';
import AboutSection from '../../components/HomeComponents/AboutSection';
import NewsSection from '../../components/HomeComponents/NewsSection';
import ContactSection from '../../components/HomeComponents/ContactSection';
import POVSection from '../../components/HomeComponents/POVSection';
import './HomePage.css';
import testparallaxpink from '../../assets/images/backgroundF5BFC3.png';
import testparallaxgrey from '../../assets/images/backgroundEFEFEF.png';
import testparallaxhero from '../../assets/images/mamachama-hero.jpeg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useParallax } from 'react-scroll-parallax';


function HomePage() {

    return (
        <>
            < div className="Homepage" >
                <Header />
                <img className='header-grey' src={testparallaxgrey} alt="" />
                <AboutSection />
                <NewsSection />
                <POVSection />
                <ContactSection />
            </div >


        </>
    );
}

export default HomePage;

