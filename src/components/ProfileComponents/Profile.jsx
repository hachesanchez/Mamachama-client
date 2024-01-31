import { Button, Container, Image, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignupForm from './SignUpform';
import './Profile.css';



function Profile({ user, logout }) {

    if (!user) {
        return null;
    }

    const { username, email, avatar } = user;

    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    const [showModal, setShowModal] = useState(false)

    const handleSignupModal = () => {
        setShowModal(!showModal)
    }


    return (
        <>
            <Container>
                <div className="profile-card">

                    <div className="profile-greeting">
                        <h2 className="profile-title">¡hola {username}!</h2>
                    </div>

                    <Row className='profile-avatarButtons'>
                        <Col lg={3} md={7} sm={6} xs={6} >
                            <Image className='profile-avatar' src={avatar} alt="Profile picture" roundedCircle />
                        </Col>
                        <Col lg={9} md={5} sm={6} xs={6}>
                            <div className="profile-buttons">
                                <Button variant="outline-secondary profile-button">Editar perfil</Button>{' '}
                                <Button variant="outline-secondary profile-button">Proyecto nuevo</Button>{' '}
                                <Button variant="outline-secondary profile-button" onClick={handleSignupModal}>Añadir usuaria</Button>{' '}
                                <Button variant="outline-secondary profile-button" onClick={handleLogout}>Cerrar sesión</Button>{' '}
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Registra una usuaria</Modal.Title>
                    <Modal.Body>
                        <SignupForm closeModal={() => setShowModal(false)}></SignupForm>
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        </>
    );
}

export default Profile;
