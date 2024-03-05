import { useParallax } from 'react-scroll-parallax';
import Header from '../../components/HomeComponents/Header';
import AboutSection from '../../components/HomeComponents/AboutSection';
import NewsSection from '../../components/HomeComponents/NewsSection';
import ContactSection from '../../components/HomeComponents/ContactSection';
import POVSection from '../../components/HomeComponents/POVSection';
import './HomePage.css';

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
        <div className="Homepage">
            <section ref={parallaxHeader.ref}>
                <Header />
            </section>
            <section ref={parallaxAbout.ref}>
                <AboutSection />
            </section>
            <NewsSection />
            <section ref={parallaxNews.ref}>
            </section>
            <section ref={parallaxPOV.ref}>
                <POVSection />
            </section>
            <ContactSection />
        </div>

    );
}

export default HomePage;
