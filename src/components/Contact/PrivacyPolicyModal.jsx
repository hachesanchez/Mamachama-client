import { Modal } from "react-bootstrap"
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy"

function PrivacyPolicyModal({ modalShow, setModalShow, }) {

    return (

        <>
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
        </>
    )
}

export default PrivacyPolicyModal