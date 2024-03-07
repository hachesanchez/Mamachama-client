import React from 'react'
import './InvisibilizadasCard.css'
import bookRender from '../../assets/images/invisibilizadas.png'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function InvisibilizadasCard() {

    return (

        <Row className='invisibilizadas-buy-card'>
            <Col sm={12} md={6} className='invisibilizadas-book-render'>
                <img src={bookRender} alt="Invisibilizadas book" />
            </Col>
            <Col sm={12} md={{ span: 4, offset: 1 }} className='invisibilizadas-info'>
                <p className="invisibilizadas-body">
                    Muchas veces nuestras grandes referentes están más cerca de lo que pensamos.
                    Están ahí, son ellas. Nuestras madres, tías, abuelas, amigas, vecinas. Quienes ponen su vida al servicio del resto.
                    Quienes llegan cruzando el mar o en una travesía de obstáculos por aire y tierra. Quienes resisten y hablan de territorio. Quienes construyen la vida.
                </p>
                <a href="https://buy.stripe.com/eVacPIcjCd62fRK8wx" target="_blank" rel="noopener noreferrer">
                    <p className='buy-link'>Comprar inVISIBILIZADAS</p>
                </a>
            </Col>
        </Row>
    )
}

export default InvisibilizadasCard
