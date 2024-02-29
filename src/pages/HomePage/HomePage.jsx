import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Header from '../../components/HomeComponents/Header';
import AboutSection from '../../components/HomeComponents/AboutSection';
import NewsSection from '../../components/HomeComponents/NewsSection';
import ContactSection from '../../components/HomeComponents/ContactSection';
import POVSection from '../../components/HomeComponents/POVSection';
import background1 from '../../assets/images/backgroundEFEFEF.png';
import background2 from '../../assets/images/backgroundF5BFC3.png';
import background3 from '../../assets/images/backgroundC27076.png';
import background4 from '../../assets/images/background947C80.png';
import background5 from '../../assets/images/background380A0D.png';
import background6 from '../../assets/images/background5C1116.png';
import background7 from '../../assets/images/background8F363C.png';

function HomePage() {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (


        <div className="Homepage">

            <div className="parallax" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                <Header />
            </div>
            <AboutSection />

            <div className="section" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
                <img src={background2} alt="" style={{ height: '400px', width: '100%', transition: 'transform 0.3s ease' }} />
            </div>
            <div className="parallax" style={{ transform: `translateY(${scrollY * 0}px)` }}>
                <NewsSection />
            </div>

            <NewsSection />
            <POVSection />
            <ContactSection />
        </div>
    );
}

export default HomePage;


// import Header from '../../components/HomeComponents/Header'
// import AboutSection from '../../components/HomeComponents/AboutSection'
// import NewsSection from '../../components/HomeComponents/NewsSection'
// import ContactSection from '../../components/HomeComponents/ContactSection'
// import './HomePage.css'
// import POVSection from '../../components/HomeComponents/POVSection'

// function HomePage() {


//     return (

//         <div className="Homepage">

//             <Header />
//             <AboutSection />
//             <NewsSection />
//             <POVSection />
//             <ContactSection />

//         </div>
//     )
// }

// export default HomePage