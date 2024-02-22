import { Container, Modal, Row, Col } from "react-bootstrap";
import UsersListCard from "./UsersListCard";

export default function UsersListModal({ showModal, setShowModal, user, userList }) {



    return (

        <>
            <Modal
                show={showModal}
                size="xl"
                aria-labelledby="title-vcenter"
                centered
                onHide={() => setShowModal(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="">
                        Lista de Usuarias
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {console.log('los users en el componente', userList)}
                        <Row >
                            {userList?.map((user) => (
                                <Col key={user.id} >
                                    <UsersListCard user={user} />
                                </Col>
                            ))
                            }
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    )
}