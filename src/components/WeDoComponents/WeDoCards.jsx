import React from 'react'
import './WeDoCards.css'
import { Col, Row, Image, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import WeDoImg1 from '../../assets/images/weDoImg1.jpg'
import WeDoImg2 from '../../assets/images/weDoImg2.jpg'
import WeDoImg3 from '../../assets/images/weDoImg3.jpg'
import WeDoImg4 from '../../assets/images/weDoImg4.jpg'


function WeDoCards() {

    return (
        <Row className='about-card-row'>
            <Col >
                <p className="about-card-title">
                    {/* {weDo.title} */}
                    Mediación cultural
                </p>
                <p className="about-card-body">
                    {/* {weDo.subtitle} */}
                    Procesos orientados a mejorar las relaciones, promover la comunicación y favorecer la integración entre personas
                    y grupos de diferentes culturas a través de metodologías artísticas y participativas.
                </p>
                <ul>
                    {/* {weDo.body.map((e, idx) => (
                        <li key={idx}>{e}</li>
                    ))} */}
                    <li>Producción de significados y narrativas junto a personas que sufren múltiples discriminaciones en entornos rurales. </li>
                    <li> Programas de inclusión social y desarrollo comunitario a través del teatro, la escritura y las artes visuales.  </li>
                    <li> Producción audiovisual y documental colaborativo.</li>
                    <li> Laboratorios de creatividad y participación social.</li>
                    <li> Diseño de programas que promuevan actitudes y comportamientos que rechacen la discriminación cultural y desarrollen relaciones interculturales igualitarias</li>
                </ul>
                <Carousel>
                    <Carousel.Item>
                        <WeDoImg1 text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Col>

        </Row>
    )
}

export default WeDoCards
