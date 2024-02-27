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
                    <Col md={3} sm={12} className="homepage-contact-title">
                        <h1>
                            Escríbenos algo!
                        </h1>
                    </Col>
                    <Col md={9} sm={12}>
                        <ContactForm handlePolicyModal={handlePolicyModal} />
                        <PrivacyPolicyModal modalShow={modalShow} setModalShow={setModalShow} />
                    </Col>
                </Row>
            </div >
        </>
    )
}

export default ContactSection