import heroImg from '../../assets/images/mamachama-hero.jpeg'
import './Header.css'

function Header() {

    return (

        <>

            <img className='hero-img' src={heroImg} alt="communitary work" />

            <div className="header-message">
                <p className="header-message-title">
                    Somos Mamachama y esta es la primera frase que queremos que leas cuando llegas a nuestra web
                </p>
                <p className="header-message-body">
                    aquí te meto un par de Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam nobis facere quisquam earum. Nisi architecto doloremque blanditiis illo! Facilis culpa facere laudantium? Minima quidem nihil non aperiam similique repudiandae? Aperiam?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vel sequi esse aspernatur.
                </p>
            </div>

        </>
    )
}

export default Header