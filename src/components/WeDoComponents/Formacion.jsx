import React from 'react'
import './Formacion.css'
import './WeDoCards.css'
import { Col, Row } from 'react-bootstrap'

function Formacion() {
    return (
        <div className="wedocards-container">
            <div className="wedocards">
                <Row className='wedocards-row'>
                    <Col>
                        <p className="wedocards-title">
                            acciones formativas a medida
                        </p>
                        <p className="wedocards-subtitle">
                            Empleamos metodologías innovadoras y vivenciales orientadas a procesos grupales.
                        </p>
                        <ul className="wedocards-body">
                            <li>Talleres de expresión y creatividad en consonancia con los ODS para centros escolares y espacios no formales.  </li>
                            <li>Programas para la ciudadanía en general sobre sensibilización en igualdad, cuidados y cultura de paz. </li>
                            <li>Formación a agentes culturales sobre metodologías participativas y artísticas para incidir en entornos rurales. </li>
                            <li>Comunicación para el cambio social.</li>
                            <li>  Talleres de escritura íntima para la memoria colectiva; teatro social; arteterapia, y mindfulness.</li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>

    )
}

export default Formacion
