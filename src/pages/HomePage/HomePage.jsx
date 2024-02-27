import Header from '../../components/HomeComponents/Header'
import AboutSection from '../../components/HomeComponents/AboutSection'
import NewsSection from '../../components/HomeComponents/NewsSection'
import ContactSection from '../../components/HomeComponents/ContactSection'
import './HomePage.css'

function HomePage() {


    return (

        <div className="Homepage">

            <Header />
            <AboutSection />
            <NewsSection />
            <ContactSection />

        </div>
    )
}

export default HomePage