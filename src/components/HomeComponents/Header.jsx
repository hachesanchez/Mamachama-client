import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { FaArrowDown } from "react-icons/fa6"
import { useRef } from 'react'
import heroImg from '../../assets/images/mamachama-hero.jpeg'
import './Header.css'


function Header() {

    const parallaxRef = useRef(null)

    const scrollToMessage = () => {
        if (parallaxRef.current) {
            parallaxRef.current.scrollTo(1)
        }
    }


    return (

        <>

            <div className="header-container">
                <Parallax ref={parallaxRef} pages={2}>

                    <ParallaxLayer
                        offset={0}
                        speed={1}
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
                        offset={1}
                        speed={2}
                        sticky={{ start: 1, end: 1 }}
                    >
                        <div className="header-message" >
                            <p className="header-message-title">
                                bienvenida
                            </p>
                            <p className="header-message-body">
                                "Es alentador saber que el vaso sigue llenándose, aunque la tarea continúa y no va a avanzar sola.
                                Hay un espacio muy importante en los medios para cambiar la cultura y las nuevas generaciones nos están dando razones para ser optimistas."
                            </p>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={-1}
                        speed={0}
                        style={{
                            background: '#F5BFC3 ',
                            width: '100%',
                            height: '300vh',
                            position: 'absolute',
                            top: 0,
                            zIndex: -1,
                        }}
                    />

                </Parallax>
            </div >

        </>
    )
}

export default Header
