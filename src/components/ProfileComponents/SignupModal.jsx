import { Modal } from 'react-bootstrap';
import SignupForm from './SignUpform';


function SignupModal({ showModal, setShowModal }) {

    const handleClose = () => setShowModal(false)


    return (

        <>
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal}
                onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id=" ">
                        Registra una usuaria
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignupForm closeModal={handleClose}></SignupForm>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SignupModal