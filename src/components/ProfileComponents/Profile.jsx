import { Button, Container, Image, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SignupModal from './SignupModal'
import EditProfileModal from './EditProfileModal'
import './Profile.css'

function Profile({ user, logout }) {
    if (!user) {
        return null
    }

    const { username, avatar } = user
    const navigate = useNavigate()
    const [showSignupModal, setShowSignupModal] = useState(false)
    const [showEditProfileModal, setShowEditProfileModal] = useState(false)

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    const handleSignupModal = () => {
        setShowSignupModal(true)
    }

    const handleEditProfileModal = () => {
        setShowEditProfileModal(true)
    }

    return (
        <>
            <Container>
                <div className="profile-card">

                    <div className="profile-greeting">
                        <h2 className="profile-title">¡Hola {username}!</h2>
                    </div>

                    <Row className="profile-avatarButtons">
                        <Col lg={3} md={7} sm={6} xs={6}>
                            <Image className="profile-avatar" src={avatar} alt="Profile picture" roundedCircle />
                        </Col>
                        <Col lg={9} md={5} sm={6} xs={6}>
                            <div className="profile-buttons">
                                <Button variant="outline-secondary profile-button" onClick={handleEditProfileModal}>
                                    Editar perfil
                                </Button>{' '}
                                <Button variant="outline-secondary profile-button">
                                    Proyecto nuevo
                                </Button>{' '}
                                <Button variant="outline-secondary profile-button" onClick={handleSignupModal}>
                                    Añadir usuaria
                                </Button>{' '}
                                <Button variant="outline-secondary profile-button" onClick={handleLogout}>
                                    Cerrar sesión
                                </Button>{' '}
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>

            <SignupModal showModal={showSignupModal} setShowModal={setShowSignupModal} />
            <EditProfileModal showModal={showEditProfileModal} setShowModal={setShowEditProfileModal} />

        </>
    )
}

export default Profile
