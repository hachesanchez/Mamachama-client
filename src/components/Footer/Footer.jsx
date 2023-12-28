import { Container, Row, Col } from 'react-bootstrap'
import('./Footer.css')

function Footer() {


    return (

        <>
            <div className="Footer">

                <Container className='footer-container'>

                    <Row className='footer-sections'>
                        <Col>
                            Somos
                        </Col>
                        <Col>
                            Hacemos
                        </Col>
                        <Col>
                            Colabora
                        </Col>
                        <Col>
                            Contacta
                        </Col>
                    </Row>

                </Container>

            </div>
        </>
    )
}

export default Footer

