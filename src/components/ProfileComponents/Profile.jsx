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

    const { username, email, avatar, description, relation } = user
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
                <Row className="justify-content-center">
                    <Col lg={8} md={10} sm={12} xs={12}>
                        <div className="profile-card">
                            <div className={`profile-avatar ${relation.toLowerCase()}`}>
                                <Image src={avatar} alt="Profile picture" roundedCircle />
                            </div>
                            <div className="profile-details">
                                <h2 className="profile-title">¡Hola {username}!</h2>
                                <p className="profile-info">{relation}</p>
                                <p className="profile-description">{description}</p>
                            </div>
                            <div className="profile-actions">
                                <Button className="profile-button" variant="outline-secondary" onClick={handleEditProfileModal}>
                                    Editar perfil
                                </Button>
                                <Button className="profile-button" variant="outline-secondary">
                                    Proyecto nuevo
                                </Button>
                                <Button className="profile-button" variant="outline-secondary" onClick={handleSignupModal}>
                                    Añadir usuaria
                                </Button>
                                <Button className="profile-button" variant="outline-secondary">
                                    Lista de usuarias
                                </Button>
                                <Button className="profile-button" variant="outline-secondary" onClick={handleLogout}>
                                    Cerrar sesión
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <SignupModal showModal={showSignupModal} setShowModal={setShowSignupModal} />
            <EditProfileModal showModal={showEditProfileModal} setShowModal={setShowEditProfileModal} user={user} />
        </>
    )
}

export default Profile
