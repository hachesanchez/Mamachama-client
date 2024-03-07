import { Col, Container, Row, Modal } from "react-bootstrap"
import { useState } from "react"
import ContactForm from "../../components/Contact/ContactForm"
import PrivacyPolicyShort from "../../components/Contact/PrivacyPolicyShort"
import EspacioColombia from "../../components/Contact/EspacioColombia"
import PrivacyPolicyModal from "../../components/Contact/PrivacyPolicyModal"
import './ContactPage.css'



function ContactPage() {

    const [modalShow, setModalShow] = useState(false)

    const handlePolicyModal = () => {
        setModalShow(true)
    }

    return (

        <>

            <div className="contact">

                <div className="page-title">
                    <h1 className="page-title-text">Contacta </h1>
                </div>
                <Row>
                    <Col sm={12} md={4} lg={{ span: 4, offset: 1 }}>
                        <p className="contact-title">
                            cuéntanos lo que te apetezca
                        </p>
                    </Col>
                    <Col sm={12} md={7} lg={7}>
                        <div className="mt-3 contact-form-component">
                            <ContactForm handlePolicyModal={handlePolicyModal} />
                        </div>
                    </Col>
                </Row>

                <Container>

                    <div className="mt-4 privacy-policy-component">
                        <PrivacyPolicyShort handlePolicyModal={handlePolicyModal} />
                    </div>
                    <hr />
                    <div className="mt-5 espacio-colombia-component">
                        <EspacioColombia />
                    </div>

                    <PrivacyPolicyModal modalShow={modalShow} setModalShow={setModalShow} />

                </Container>

            </div>

        </>
    )
}

export default ContactPage