import { Modal } from 'react-bootstrap';
import EditProfileForm from './EditProfileForm';

function EditProfileModal({ showModal, setShowModal, user, updateProfile }) {

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
                        Estás editando el perfil de {user.username}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProfileForm
                        closeModal={handleClose}
                        email={user.email}
                        username={user.username}
                        password={user.password}
                        description={user.description}
                        avatar={user.avatar}
                        relation={user.relation}
                        occupation={user.occupation}
                        socialMedia={user.socialMedia}
                        userID={user._id}
                        updateProfile={updateProfile}
                    />
                </Modal.Body>
            </Modal >
        </>
    )
}

export default EditProfileModal