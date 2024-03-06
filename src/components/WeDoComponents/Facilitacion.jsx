import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Facilitacion.css'
import './WeDoCards.css'

function Facilitacion() {
    return (
        <div className="wedocards-container">
            <div className="wedocards">
                <Row className='wedocards-row'>
                    <Col>
                        <p className="wedocards-title">
                            facilitación de procesos grupales                        </p>
                        <p className="wedocards-subtitle">
                            Diseñamos y facilitamos procesos participativos a través de herramientas creativas.
                        </p>
                        <ul className="wedocards-body">
                            <li>Diagnóstico de necesidades específicas y diseño personalizado de intervenciones socioculturales participativas.  </li>
                            <li>Facilitación de procesos socio comunitarios a través de herramientas creativas.</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default Facilitacion
