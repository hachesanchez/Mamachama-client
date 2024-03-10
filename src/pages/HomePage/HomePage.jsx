import Header from '../../components/HomeComponents/Header';
import AboutSection from '../../components/HomeComponents/AboutSection';
import NewsSection from '../../components/HomeComponents/NewsSection';
import ContactSection from '../../components/HomeComponents/ContactSection';
import POVSection from '../../components/HomeComponents/POVSection';
import testparallaxgrey from '../../assets/images/backgroundEFEFEF.png';
import './HomePage.css';


function HomePage() {

    return (
        <>
            < div className="Homepage" >
                <Header />
                {/* <img className='header-grey' src={testparallaxgrey} alt="" /> */}
                <AboutSection />
                <NewsSection />
                <POVSection />
                <ContactSection />
            </div >


        </>
    );
}

export default HomePage;

