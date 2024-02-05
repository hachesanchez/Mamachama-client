import { Modal } from 'react-bootstrap';
import EditProfileForm from './EditProfileForm';

function EditProfileModal({ showModal, setShowModal, user }) {

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
                        Estás editando el perfil de {user}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProfileForm closeModal={handleClose} user={user}
                        email={user.email}
                        password={user.password}
                        username={user.username}
                        description={user.description}
                        avatar={user.avatar}
                        relation={user.relation}
                    />
                </Modal.Body>
            </Modal >
        </>
    )
}

export default EditProfileModal