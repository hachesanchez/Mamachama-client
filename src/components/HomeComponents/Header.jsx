import React from 'react';
// import { Parallax } from 'react-scroll-parallax';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import heroImg from '../../assets/images/mamachama-hero.jpeg';
import { FaArrowDown } from "react-icons/fa6";
import { useRef } from 'react';
import testparallaxpink from '../../assets/images/backgroundF5BFC3.png';
import testparallaxgrey from '../../assets/images/backgroundEFEFEF.png';
import testparallaxhero from '../../assets/images/mamachama-hero.jpeg';
import './Header.css';

function Header() {
    const headerMessageRef = useRef(null);

    const scrollToMessage = () => {
        if (headerMessageRef.current) {
            window.scrollTo({
                top: headerMessageRef.current.offsetTop + 20,
                behavior: 'smooth'
            });
        }
    };

    return (

        <>

            <div className="header-container">

                <Parallax pages={2}>
                    <ParallaxLayer
                        speed={1}
                        offset={0}
                        style={{
                            backgroundImage: `url(${heroImg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',

                        }}
                        factor={1}>
                        <div className='arrow-icon' onClick={scrollToMessage}>
                            <FaArrowDown className='arrow-icon' />
                        </div>
                    </ParallaxLayer >

                    <ParallaxLayer
                        speed={1}
                        offset={0.9}
                        style={{
                            backgroundImage: `url(${testparallaxpink})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                    </ParallaxLayer >

                    <ParallaxLayer
                        offset={1}
                        speed={2}
                        sticky={{ start: 0.98, end: 1 }}
                        style={{
                            backgroundImage: `url(${testparallaxpink})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            // width: '100%',
                            // height: '100vh',
                        }} >
                        <div className="header-message" ref={headerMessageRef}>
                            <p className="header-message-title">
                                bienvenida
                            </p>
                            <p className="header-message-body">
                                "Es alentador saber que el vaso sigue llenándose, aunque la tarea continúa y no va a avanzar sola.
                                Hay un espacio muy importante en los medios para cambiar la cultura y las nuevas generaciones nos están dando razones para ser optimistas."
                            </p>
                        </div>
                    </ParallaxLayer>

                </Parallax>

            </div>

            {/* <div className="header-container">
                <Parallax y={[0, -20]}>
                    <img className='hero-img' src={heroImg} alt="communitary work" />
                </Parallax>
                <div className='arrow-icon' onClick={scrollToMessage}>
                    <FaArrowDown className='arrow-icon' />
                </div>
                <div className="header-message" ref={headerMessageRef}>
                    <p className="header-message-title">
                        bienvenida
                    </p>
                    <p className="header-message-body">
                        "Es alentador saber que el vaso sigue llenándose, aunque la tarea continúa y no va a avanzar sola.
                        Hay un espacio muy importante en los medios para cambiar la cultura y las nuevas generaciones nos están dando razones para ser optimistas."
                    </p>
                </div>
            </div> */}

        </>
    );
}

export default Header;
