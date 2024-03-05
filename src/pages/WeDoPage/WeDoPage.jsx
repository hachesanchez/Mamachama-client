import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Mediacion from '../../components/WeDoComponents/Mediacion'
import Formacion from '../../components/WeDoComponents/Formacion'
import Facilitacion from '../../components/WeDoComponents/Facilitacion'
import WeDoCards from '../../components/WeDoComponents/WeDoCards'
import { FaPlus, FaMinus } from "react-icons/fa6";

import './WeDoPage.css'

function WeDoPage() {

    const [openSection, setOpenSection] = useState(true)
    const [showMediacion, setShowMediaciacion] = useState(false)

    const handleSection = () => {
        setOpenSection(!openSection)
    }
    const handleMediacion = () => {
        setShowMediaciacion(!showMediacion)
        setOpenSection(!openSection)
    }


    return (

        <div className='weDo'>

            <div className="page-title">
                <h1 className="page-title-text">Lo que hacemos</h1>
            </div>

            <Container>
                <p className="page-subtitle">
                    Proponemos diferentes servicios basados en una
                    metodología participativa e innovadora centrada en alcanzar soluciones creativas a las problemáticas contemporáneas.
                </p>
                <Row className="wedo-section">
                    <Col>
                        <p className="wedo-section-title">
                            MEDIACIÓN
                        </p>
                    </Col>
                    <Col className='wedo-icon'>
                        {openSection ?
                            <FaPlus className='wedo-faplus' onClick={handleMediacion} />

                            : <FaMinus className='wedo-faminus' onClick={handleSection} />
                        }
                        {console.log(openSection)}
                    </Col>
                    <hr className='wedo-hr' />
                </Row>
                <Mediacion show={showMediacion} />
            </Container>
            {/*            
    const [openSection, setOpenSection] = useState(true);
            const [showMediacion, setShowMediacion] = useState(false);

    const handleSection = () => {
                setOpenSection(!openSection);
    };

    const handleMediacion = () => {
                setShowMediacion(!showMediacion);
    };

            return (
            <div className='weDo'>
                <div className="page-title">
                    <h1 className="page-title-text">Lo que hacemos</h1>
                </div>

                <Container>
                    <p className="page-subtitle">
                        Proponemos diferentes servicios basados en una
                        metodología participativa e innovadora centrada en alcanzar soluciones creativas a las problemáticas contemporáneas.
                    </p>
                    <Row className="wedo-section">
                        <Col>
                            <p className="wedo-section-title">
                                MEDIACIÓN
                            </p>
                        </Col>
                        <Col className='wedo-icon' onClick={handleMediacion}>
                            {openSection ? <FaPlus className='wedo-faplus' /> : <FaMinus className='wedo-faminus' />}
                        </Col>
                    </Row>
                    <hr className='wedo-hr' />
                    {showMediacion && <Mediacion />}
                </Container>
            </div>
            ) */}

            {/* 
                  <WeDoCards/>
            <Formacion />
            <Facilitacion /> 
            */}

        </div>
    )
}

export default WeDoPage
