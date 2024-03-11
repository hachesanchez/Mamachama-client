import React, { useState } from 'react'
import CateringInfo from '../../components/CateringComponents/CateringInfo'
import CateringPast from '../../components/CateringComponents/CateringPast'
import { Container, Col, Row } from 'react-bootstrap'
import ContactForm from '../../components/Contact/ContactForm'
import PrivacyPolicyModal from '../../components/Contact/PrivacyPolicyModal'
import './CateringPage.css'


function CateringPage() {

    const [showContactForm, setShowContactForm] = useState(false)

    const handleContactForm = () => {
        setShowContactForm(!showContactForm)
    }

    const [modalShow, setModalShow] = useState(false)

    const handlePolicyModal = () => {
        setModalShow(true)
    }



    return (

        <div className='catering'>

            <div className="page-title">
                <h1 className="page-title-text">CATERING SALUDABLE EN TENERIFE</h1>
            </div>

            <Container>

                <div className="catering-info-section">
                    <CateringInfo />
                </div>

                <Row className='mt-4 catering-contact-past-section'>
                    <Col md={6} lg={6}>
                        <div className="catering-contact-section">
                            <div className="contact-link" onClick={handleContactForm}>
                                Quiero contratar el cátering saludable
                            </div>
                            <div className={`catering-contact-form ${showContactForm ? 'open' : ''}`}  >
                                <ContactForm handlePolicyModal={handlePolicyModal} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <CateringPast />
                    </Col>
                </Row>

            </Container>

            <PrivacyPolicyModal modalShow={modalShow} setModalShow={setModalShow} />


        </div>
    )
}

export default CateringPage
