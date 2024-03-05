import './POVSection.css'
import povImg from '../../assets/images/pov.jpg'
import { Row, Col, Image, Container } from 'react-bootstrap'

function POVSection() {

    return (

        <>
            <div className="pov-section">

                <Container>
                    <Row className='align-items-center'>
                        <Col sm={12} md={12} lg={7} className='pov-image'>
                            <Image src={povImg} alt='Points of view' />
                        </Col>
                        <Col sm={12} md={12} lg={5} className='pov-text'>
                            <p className="pov-card-title">
                                Cultura comunitaria
                            </p>
                            <p className="pov-card-body">
                                Procesos artísticos colaborativos y transformadores que generan nuevos imaginarios
                                y prácticas sociales.
                            </p>
                            <p className="pov-card-title">
                                Economía social
                            </p>
                            <p className="pov-card-body">
                                Somos una entidad comprometida e impulsora de los  principios de la Economía Social
                                y Solidaria.
                            </p>
                            <p className="pov-card-title">
                                Interculturalidad
                            </p>
                            <p className="pov-card-body">
                                Desde un enfoque dialógico que promueve la justicia social y la igualdad de las personas.
                            </p>
                            <p className="pov-card-title">
                                Cuidados
                            </p>
                            <p className="pov-card-body">
                                Los cuidados son imprescindibles para la continuidad del planeta, una herramienta
                                colectiva de transformación social.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default POVSection