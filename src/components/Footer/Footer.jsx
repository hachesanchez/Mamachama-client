import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import './Footer.css';



function Footer() {

    return (

        <div className="Footer">
            <Container className="footer-container">

                <Row className="footer-sections">
                    <Col sm={12} md={3}>
                        <p className="footer-title">Somos</p>
                        <hr />
                        <div className="footer-links">
                            {/* <Link to={'/somos/sobre-mamachama'}>Sobre Mamachama</Link> */}
                            <Link to={'/somos'}>Sobre Mamachama</Link>
                            <br />
                            <Link to={'/somos/nuestro-equipo'}>Nuestro equipo</Link>
                            <br />
                            <Link to={'/contacta'}>Contacta</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <p className="footer-title">Hacemos</p>
                        <hr />
                        <div className="footer-links">
                            <Link to={'/hacemos/acciones'}>¿Qué hacemos?</Link>
                            <br />
                            <Link to={'/hacemos/proyectos'}>Proyectos</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <p className="footer-title">Colabora</p>
                        <hr />
                        <div className="footer-links">
                            <Link to={'/colabora/invisibilizadas'}>Libro "Invisibilizadas"</Link>
                            <br />
                            <Link to={'/colabora/catering'}>Catering saludable</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={3}>
                        <p className="footer-title">Nuevas</p>
                        <hr />
                        <div className="footer-links">
                            <Link to={' '}>someotherlink</Link>
                            <br />
                            <Link to={' '}>someotherlink</Link>
                        </div>
                    </Col>
                </Row>
                <hr />
                {/* TODO: Aviso legal, memoria, cookies */}
                <Row className='footer-sections'>
                    <Col className='footer-extra-links' lg={6} md={12} sm={12} >
                        <Link to={'/politica-de-privacidad'}>Política de Privacidad</Link> |
                        <Link to={'/politica-de-cookies'}> Política de Cookies</Link> |
                        <Link to={'/aviso-legal'}> Aviso legal</Link>
                        {/* <Link to={''}> Memoria 2021</Link> */}
                        <div className="footer-copy">
                            <p> © 2024 Mamachama</p>
                        </div>
                    </Col>
                    <Col className='footer-social' lg={6} md={12} sm={12}>
                        <p className="footer-social-title">SÍGUENOS EN: </p>
                        <div className="footer-social-icons">
                            <a target='blank' rel='noreferer noopener' href="https://www.instagram.com/mamachama__/">
                                <FaInstagram />
                            </a>
                            <a target='blank' rel='noreferer noopener' href="https://www.facebook.com/MamaChamaa">
                                <FaFacebook />
                            </a>
                            <a target='blank' rel='noreferer noopener' href="https://twitter.com/mamachamaa">
                                <FaTwitter />
                            </a>
                            <a target='blank' rel='noreferer noopener' href="https://www.youtube.com/channel/UC6jnPuf2Nd_3RGHAq3NqTZw">
                                <FaYoutube />
                            </a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div >
    );
}

export default Footer;
