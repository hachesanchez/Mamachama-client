import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPlus, FaMinus } from 'react-icons/fa6'
import Mediacion from '../../components/WeDoComponents/Mediacion'
import Facilitacion from '../../components/WeDoComponents/Facilitacion'
import Formacion from '../../components/WeDoComponents/Formacion'
import './WeDoPage.css'


function WeDoPage() {

    const [showMediacion, setShowMediacion] = useState(false)
    const [showFormacion, setShowFormacion] = useState(false)
    const [showFacilitacion, setShowFacilitacion] = useState(false)

    const handleToggleMediacion = () => {
        setShowMediacion(!showMediacion)
    }
    const handleToggleFormacion = () => {
        setShowFormacion(!showFormacion)
    }
    const handleToggleFacilitacion = () => {
        setShowFacilitacion(!showFacilitacion)
    }


    return (
        <div className="weDo">

            <div className="page-title">
                <h1 className="page-title-text">Lo que hacemos</h1>
            </div>

            <Container>

                <p className="page-subtitle">
                    Proponemos diferentes servicios basados en una metodología participativa e innovadora
                    centrada en alcanzar soluciones creativas a las problemáticas contemporáneas.
                </p>

                <Row className="wedo-section">
                    <Col lg={{ offset: 1 }}>
                        <p className="wedo-section-title">MEDIACIÓN</p>
                    </Col>
                    <Col className="wedo-icon" onClick={handleToggleMediacion}>
                        {showMediacion ? <FaMinus className="wedo-faminus" /> : <FaPlus className="wedo-faplus" />}
                    </Col>
                </Row>
                <div className={`wedo-section-content ${showMediacion ? 'show' : ''}`}>
                    {showMediacion && <Mediacion show={showMediacion} />}
                </div>
                <hr className="wedo-hr" />

                <Row className="wedo-section">
                    <Col lg={{ offset: 1 }}>
                        <p className="wedo-section-title">FORMACIÓN</p>
                    </Col>
                    <Col className="wedo-icon" onClick={handleToggleFormacion}>
                        {showFormacion ? <FaMinus className="wedo-faminus" /> : <FaPlus className="wedo-faplus" />}
                    </Col>
                </Row>
                <div className={`wedo-section-content ${showFormacion ? 'show' : ''}`}>
                    {showFormacion && <Formacion show={showFormacion} />}
                </div>
                <hr className="wedo-hr" />

                <Row className="wedo-section">
                    <Col lg={{ offset: 1 }}>
                        <p className="wedo-section-title">FACILITACIÓN</p>
                    </Col>
                    <Col className="wedo-icon" onClick={handleToggleFacilitacion}>
                        {showFacilitacion ? <FaMinus className="wedo-faminus" /> : <FaPlus className="wedo-faplus" />}
                    </Col>
                </Row>
                <div className={`wedo-section-content ${showFacilitacion ? 'show' : ''}`}>
                    {showFacilitacion && <Facilitacion show={showFacilitacion} />}
                </div>
                <hr className="wedo-hr" />

            </Container>
        </div>
    )
}

export default WeDoPage
