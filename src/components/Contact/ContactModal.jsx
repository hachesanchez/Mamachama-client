import React from 'react'
import './ContactModal.css'
import { Modal } from 'react-bootstrap'
import ContactForm from './ContactForm'
import { useState } from 'react'

function ContactModal({ show }) {

    const [modalShow, setModalShow] = useState(false)

    const handlePolicyModal = () => {
        setModalShow(true)
    }

    return (

        <div>
            <Modal
                show={show}>
                <Modal.Header closeButton>
                    <Modal.Title> Contáctanos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    blabal
                    <ContactForm handlePolicyModal={handlePolicyModal} />
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default ContactModal
