import { Container } from 'react-bootstrap'
import heroImg from '../../assets/images/header-test.jpg'
import './Header.css'

function Header() {

    return (

        <>

            <img className='hero-img' src={heroImg} alt="communitary work" />

            <Container>

                <p className="test">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem quam voluptatibus doloribus sed maxime accusantium dicta molestiae obcaecati excepturi? Veritatis nobis numquam illum consequuntur ut! Quos voluptatum iure sint.
                </p>
            </Container>
        </>
    )
}

export default Header