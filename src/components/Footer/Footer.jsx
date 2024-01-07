import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';



function Footer() {
    return (

        <div className="Footer">
            <Container className="footer-container">

                <Row className="footer-sections">
                    <Col sm={12} md={4}>
                        <p className="footer-title">Somos</p>
                        <hr />
                        <Link to={'/somos/sobre-mamachama'}>Sobre Mamachama</Link>
                        <br />
                        <Link to={'/somos/nuestro-equipo'}>Nuestro equipo</Link>
                        <br />
                        <Link to={'/contacta'}>Contacta</Link>
                    </Col>
                    <Col sm={12} md={4}>
                        <p className="footer-title">Hacemos</p>
                        <hr />
                        <Link to={'/hacemos/acciones'}>¿Qué hacemos?</Link>
                        <br />
                        <Link to={'/hacemos/proyectos'}>Proyectos</Link>
                    </Col>
                    <Col sm={12} md={4}>
                        <p className="footer-title">Colabora</p>
                        <hr />
                        <Link to={'/colabora/invisibilizadas'}>Libro "Invisibilizadas"</Link>
                        <br />
                        <Link to={'/colabora/catering'}>Catering saludable</Link>
                    </Col>

                </Row>

                {/* <Row className="footer-links">
                    <Col>
                        <p>Enlaces adicionales u otras secciones del footer</p>
                    </Col>
                </Row> */}

            </Container>
        </div>
    );
}

export default Footer;
