import { useState } from "react"
import { Row, Col } from "react-bootstrap"
import ContactForm from "../Contact/ContactForm"
import PrivacyPolicyModal from "../Contact/PrivacyPolicyModal"
import './ContactSection.css'


function ContactSection() {

    const [modalShow, setModalShow] = useState(false)

    const handlePolicyModal = () => {
        setModalShow(true)
    }



    return (

        <>
            <div className="homepage-contact">
                <Row>
                    <Col sm={12} md={5} lg={{ span: 4, offset: 1 }}>
                        <p className="contact-title">
                            cuéntanos lo que te apetezca
                        </p>
                    </Col>
                    <Col sm={12} md={7} lg={7}>
                        <div className="mt-3 contact-form-component">
                            <ContactForm handlePolicyModal={handlePolicyModal} />
                            <PrivacyPolicyModal modalShow={modalShow} setModalShow={setModalShow} />
                        </div>
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default ContactSection