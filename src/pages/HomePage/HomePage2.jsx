import { useParallax, ParallaxBanner } from 'react-scroll-parallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Header from '../../components/HomeComponents/Header';
import AboutSection from '../../components/HomeComponents/AboutSection';
import NewsSection from '../../components/HomeComponents/NewsSection';
import ContactSection from '../../components/HomeComponents/ContactSection';
import POVSection from '../../components/HomeComponents/POVSection';
import './HomePage.css';
import testparallaxpink from '../../assets/images/backgroundF5BFC3.png';
import testparallaxgrey from '../../assets/images/backgroundEFEFEF.png';
import testparallaxhero from '../../assets/images/mamachama-hero.jpeg';


function HomePage() {
    const parallaxHeader = useParallax({
        speed: -5,
    });
    const parallaxAbout = useParallax({
        speed: 30,
    });

    const parallaxNews = useParallax({
        speed: -5,
    });

    const parallaxPOV = useParallax({
        speed: 50,
        easing: 'ease-in-out',
        startScrollOffset: 10,
    });

    return (
        <>

            <div className="Homepage">
                <section ref={parallaxHeader.ref}>
                    <Header />
                </section>
                <section ref={parallaxAbout.ref}>
                    <AboutSection />
                </section>
                <NewsSection />
                <section ref={parallaxNews.ref}></section>
                <section ref={parallaxPOV.ref}>
                    <POVSection />
                </section>
                <ContactSection />
            </div>



            {/* < div className="Homepage" >
                <Header />
                <AboutSection />
                <NewsSection />
                <POVSection />
                <ContactSection />
            </div >
            
            <div>
                <Parallax pages={4}>
                    <ParallaxLayer className='first'
                        speed={1}
                        offset={0}
                        style={{
                            backgroundImage: `url(${testparallaxpink})`,
                            backgroundSize: 'cover'
                        }}
                        factor={1}>
                         <Header /> 
            <h1>HOLA</h1>

        </ParallaxLayer >
            <ParallaxLayer offset={1}>
                <h1>ADIOS</h1>
                <AboutSection /> 
            </ParallaxLayer>

                </Parallax >
            </div >  */}





        </>
    );
}

export default HomePage;

