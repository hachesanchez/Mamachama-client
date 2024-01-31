import { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import './SignupPage.css'
import SignupForm from '../../components/ProfileComponents/SignUpform'


function SignupPage() {

    const [showModal, setShowModal] = useState(false)


    return (

        <>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Registra una usuaria</Modal.Title>
                    <Modal.Body>
                        <SignupForm closeModal={() => setShowModal(false)}></SignupForm>
                    </Modal.Body>
                </Modal.Header>
            </Modal>

        </>
    )
}

export default SignupPage