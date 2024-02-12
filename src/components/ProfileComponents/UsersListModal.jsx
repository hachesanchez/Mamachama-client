import { Modal } from "react-bootstrap";
import UsersListCard from "./UsersListCard";

export default function UsersListModal({ showModal, setShowModal, user }) {

    return (

        <>
            <Modal
                show={showModal}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                // dialogClassName="modal-90w"
                // aria-labelledby="example-custom-modal-styling-title"
                onHide={() => setShowModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="">
                        Lista de Usuarias
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UsersListCard user={user} />
                </Modal.Body>
            </Modal>
        </>
    )
}