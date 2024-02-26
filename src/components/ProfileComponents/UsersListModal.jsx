import { Container, Modal, Row, Col } from "react-bootstrap";
import UsersListCard from "./UsersListCard";

export default function UsersListModal({ showModal, setShowModal, userList, updateUserList, handleDeleteUser }) {



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
                        <Row className="user-list-row" >
                            {userList?.map((user, index) => (
                                <Col key={index} className="mb-2 mt-2" xl={2} lg={3} md={4} sm={6} xs={6}>
                                    <UsersListCard
                                        user={user}
                                        updateUserList={updateUserList}
                                        handleDeleteUser={handleDeleteUser}
                                    />
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