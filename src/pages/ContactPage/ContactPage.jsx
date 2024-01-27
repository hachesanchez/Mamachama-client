import { Container, Modal } from "react-bootstrap"
import { useState } from "react"
import ContactForm from "../../components/Contact/ContactForm"
import PrivacyPolicyShort from "../../components/Contact/PrivacyPolicyShort"
import EspacioColombia from "../../components/Contact/EspacioColombia"
import PrivacyPolicy from "../../components/PrivacyPolicy/PrivacyPolicy"
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

                <Container>

                    <div className="mt-3 contact-form-component">
                        <ContactForm handlePolicyModal={handlePolicyModal} />
                    </div>
                    <div className="mt-4 privacy-policy-component">
                        <PrivacyPolicyShort handlePolicyModal={handlePolicyModal} />
                    </div>
                    <div className="mt-5 espacio-colombia-component">
                        <EspacioColombia />
                    </div>

                    <Modal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        className="contact-modal"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title className="form-title">
                                Política de privacidad
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="modal-content">
                                <PrivacyPolicy closeModal={() => setShowModal(false)} />
                            </div>
                        </Modal.Body>
                    </Modal>

                </Container>
            </div>

        </>
    )
}

export default ContactPage