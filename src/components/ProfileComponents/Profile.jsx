import { Button, Container, Image, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SignupModal from './SignupModal'
import EditProfileModal from './EditProfileModal'
import UsersListModal from './UsersListModal'
import './Profile.css'

function Profile({ user, updateProfile, logout, userList, updateUserList, handleAddUser, handleDeleteUser }) {

    if (!user) {
        return null
    }


    const { username, email, avatar, description, relation } = user

    const [showSignupModal, setShowSignupModal] = useState(false)
    const [showEditProfileModal, setShowEditProfileModal] = useState(false)
    const [showUsersListModal, setShowUsersListModal] = useState(false)

    const navigate = useNavigate()

    const handleOpenSignupModal = () => setShowSignupModal(true)
    const handleOpenEditProfileModal = () => setShowEditProfileModal(true)
    const handleOpenUsersListModal = () => setShowUsersListModal(true)

    const handleLogout = () => {
        logout()
        navigate('/')
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
                                <Button className="profile-button" variant="outline-secondary" onClick={handleOpenEditProfileModal}>
                                    Editar perfil
                                </Button>
                                <Button className="profile-button" variant="outline-secondary">
                                    Proyecto nuevo
                                </Button>
                                {user.relation !== 'Partner' &&
                                    <Button className="profile-button" variant="outline-secondary" onClick={handleOpenSignupModal}>
                                        Añadir usuaria
                                    </Button>
                                }
                                {user.relation === 'Team Mamachama' &&
                                    <Button className="profile-button" variant="outline-secondary" onClick={handleOpenUsersListModal}>
                                        Lista de usuarias
                                    </Button>
                                }
                                <Button className="profile-button" variant="outline-secondary" onClick={handleLogout}>
                                    Cerrar sesión
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <SignupModal
                showModal={showSignupModal}
                setShowModal={setShowSignupModal}
                handleAddUser={handleAddUser}
            />
            <EditProfileModal
                showModal={showEditProfileModal}
                setShowModal={setShowEditProfileModal}
                user={user}
                updateProfile={updateProfile}
            />
            <UsersListModal
                showModal={showUsersListModal}
                setShowModal={setShowUsersListModal}
                user={user}
                userList={userList}
                updateUserList={updateUserList}
                handleDeleteUser={handleDeleteUser}
            />

        </>
    )
}

export default Profile
