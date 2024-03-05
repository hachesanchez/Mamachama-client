import React from 'react';
import './Mediacion.css';
import './WeDoCards.css'
import { Col, Row, Image, Carousel } from 'react-bootstrap';
import WeDoImg1 from '../../assets/images/weDoImg1.jpg';
import WeDoImg2 from '../../assets/images/weDoImg2.jpg';
import WeDoImg3 from '../../assets/images/weDoImg3.jpg';
import WeDoImg4 from '../../assets/images/weDoImg4.jpg';

function Mediacion() {
    return (
        <div className="wedocards">
            <Row className='wedocards-row'>

                <Col>
                    <p className="wedocards-title">
                        Mediación cultural
                    </p>
                    <p className="wedocards-subtitle">
                        Procesos orientados a mejorar las relaciones, promover la comunicación y favorecer la integración entre personas
                        y grupos de diferentes culturas a través de metodologías artísticas y participativas.
                    </p>
                    <ul className="wedocards-body">
                        <li>Producción de significados y narrativas junto a personas que sufren múltiples discriminaciones en entornos rurales. </li>
                        <li>Programas de inclusión social y desarrollo comunitario a través del teatro, la escritura y las artes visuales.  </li>
                        <li>Producción audiovisual y documental colaborativo.</li>
                        <li>Laboratorios de creatividad y participación social.</li>
                        <li>Diseño de programas que promuevan actitudes y comportamientos que rechacen la discriminación cultural y desarrollen relaciones interculturales igualitarias</li>
                    </ul>
                    <Carousel className='wedocards-carousel'>
                        <Carousel.Item>
                            <Image src={WeDoImg1} alt="First slide" fluid />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={WeDoImg2} alt="Second slide" fluid />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image src={WeDoImg3} alt="Third slide" fluid />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}

export default Mediacion;
