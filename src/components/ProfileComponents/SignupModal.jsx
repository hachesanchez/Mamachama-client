import { Modal } from 'react-bootstrap';
import SignupForm from './SignupForm';


function SignupModal({ showModal, setShowModal, handleAddUser }) {

    const handleClose = () => setShowModal(false)

    const handleCreateUser = (newUser) => {
        handleClose();
        handleAddUser(newUser)
    }


    return (

        <>
            <Modal
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={showModal}
                onHide={() => setShowModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id=" ">
                        Registra una usuaria
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignupForm createUser={handleCreateUser} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SignupModal