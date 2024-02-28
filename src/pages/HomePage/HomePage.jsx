import Header from '../../components/HomeComponents/Header'
import AboutSection from '../../components/HomeComponents/AboutSection'
import NewsSection from '../../components/HomeComponents/NewsSection'
import ContactSection from '../../components/HomeComponents/ContactSection'
import './HomePage.css'
import POVSection from '../../components/HomeComponents/POVSection'

function HomePage() {


    return (

        <div className="Homepage">

            <Header />
            <AboutSection />
            <NewsSection />
            <POVSection />
            <ContactSection />

        </div>
    )
}

export default HomePage