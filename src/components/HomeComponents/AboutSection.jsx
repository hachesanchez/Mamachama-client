
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import aboutBackgroud from '../../assets/images/backgroundEFEFEF.png'
import './AboutSection.css'


function AboutSection() {

    return (

        <>
            <div className="about-section-margin">


                <div className="about-background">
                    <img src={aboutBackgroud} alt="About Section Background" />
                </div>
                <Container>
                    <Row className='about-images'>
                        <Col md={4} sm={12} className="about-col">
                            <div className="about-item">
                                <FaPeopleGroup className='about-icon' />
                                <p className="about-text">
                                    Profesionales relacionadas con el mundo de la creación, la comunicación y las dinámicas socioculturales.                            </p>
                                <Link to={'/somos'}>
                                    <p className='about-link'>SOMOS</p>
                                </Link>
                            </div>
                        </Col>
                        <Col md={4} sm={12} className="about-col">
                            <div className="about-item">
                                <BsFillMegaphoneFill className='about-icon' />
                                <p className="about-text">
                                    Generamos, impulsamos y acompañamos procesos de desarrollo comunitario e inclusión social
                                    basados en una metodología participativa.
                                </p>
                                <Link to={'/hacemos'}>
                                    <p className='about-link'>HACEMOS</p>
                                </Link>
                            </div>
                        </Col>
                        <Col md={4} sm={12} className="about-col">
                            <div className="about-item">
                                <FaHandsHelping className='about-icon' />
                                <p className="about-text">
                                    Ponte en contacto con nosotras, haz una propuesta, sé voluntaria, contrata nuestro catering...
                                </p>
                                <Link to={'/colabora/'}>
                                    <p className='about-link'>INVOLÚCRATE</p>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>


        </>
    )
}

export default AboutSection