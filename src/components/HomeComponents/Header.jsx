import heroImg from '../../assets/images/mamachama-hero.jpeg'
import { FaArrowDown } from "react-icons/fa6";
import { useRef } from 'react';
import './Header.css'

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

            <img className='hero-img' src={heroImg} alt="communitary work" />
            <div className='arrow-icon' onClick={scrollToMessage}>
                <FaArrowDown className='arrow-icon' />
            </div>
            <div className="header-message" ref={headerMessageRef}>
                <p className="header-message-title">
                    bienvenida
                </p>
                <p className="header-message-body">
                    "Es alentador saber que el vaso sigue llenándose, pero la tarea continúa y no va a avanzar sola.
                    Hay un espacio muy importante en los medios para cambiar la cultura. Pero las nuevas generaciones nos están dando razones para ser optimistas."
                </p>
            </div>

        </>
    )
}

export default Header