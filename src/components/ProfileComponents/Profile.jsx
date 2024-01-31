import { Button, Container, Image, Row, Col } from 'react-bootstrap';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

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
                                <Button variant="outline-secondary profile-button">Añadir usuario</Button>{' '}
                                <Button variant="outline-secondary profile-button" onClick={handleLogout}>Cerrar sesión</Button>{' '}
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>
        </>
    );
}

export default Profile;
