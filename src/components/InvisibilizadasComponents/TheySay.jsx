import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap'
import './TheySay.css'

function TheySay() {

    return (
        <div className='they-say'>
            <p className="they-say-title">
                lo que dicen del libro
            </p>
            <Row className='they-say-body'>
                <Col lg={4} md={4} sm={12} className='they-say-testimony'>
                    <FaQuoteRight className='they-say-icon' />
                    <br />
                    <p className='tehy-say-text'>
                        Me ha encantado, me he emocionado mogollón leyendo.
                        Es súper bonito y súper duro a la vez. Me ha gustado muchísimo, muchísimo, muchísimo.
                        Os doy la enhorabuena por el libro y por todo el trabajo que hacéis.
                    </p>
                    <p className="they-say-author">
                        Rosalía Valdés Aumente
                    </p>
                </Col>
                <Col lg={4} md={4} sm={12} className='they-say-testimony'>
                    <FaQuoteRight className='they-say-icon' />
                    <p className='tehy-say-text'>
                        Os quería dar las gracias porque me ha encantado el libro. No solo me ha gustado,
                        sino que me ha animado a escribir. Gracias y felicidades por la labor de VISIBILIZACIÓN de tantas mujeres e historias invisibles.
                    </p>
                    <p className="they-say-author">
                        Luisi González
                    </p>
                </Col>
                <Col lg={4} md={4} sm={12} className='they-say-testimony'>
                    <FaQuoteRight className='they-say-icon' />

                    <p className='tehy-say-text'>
                        Un trabajo maravilloso, el título lo dice todo. Me recuerda a mi madre y a mi tía,
                        trabajando de sol a sol las 24h del día 365 días, y nadie les ha dado las gracias. Este país les debe un monumento, cuánta ingratitud.
                    </p>
                    <p className="they-say-author">
                        Manuel Rodríguez
                    </p>
                </Col>
            </Row>

        </div>
    )
}

export default TheySay
