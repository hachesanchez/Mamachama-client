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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem quas consequuntur qui non voluptatum inventore sint quaerat laboriosam, beatae sequi quod cupiditate iure! Itaque recusandae nostrum aut odio animi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut repellendus eligendi iste iusto error aliquam necessitatibus id animi in dolorem facilis molestiae cupiditate harum, vero doloremque, pariatur dignissimos suscipit fugiat?
                </p>
            </Container>
        </>
    )
}

export default Header