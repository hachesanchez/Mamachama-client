import { Button, Container, Image, Row, Col } from 'react-bootstrap';
import './Profile.css';

function Profile({ user }) {

    if (!user) {
        return null;
    }

    const { username, email, avatar } = user;

    return (
        <>
            <Container>
                <div className="profile-card">

                    <h2 className="profile-title">¡hola {username}!</h2>
                    <Row>
                        <Col lg={3}>
                            <Image className='profile-avatar' src={avatar} alt="Profile picture" roundedCircle />
                        </Col>
                        <Col lg={9}>
                            <Button variant="outline-secondary">Editar perfil</Button>{' '}
                            <Button variant="outline-secondary">Proyecto nuevo</Button>{' '}
                            <Button variant="outline-secondary">Añadir usuario</Button>{' '}
                            <Button variant="outline-secondary">Cerrar sesión</Button>{' '}
                        </Col>
                    </Row>



                </div>

                <hr />
                --------------------
                SECCIÓN: MIS PROYECTOS AÑADIDOS
            </Container>
        </>
    );
}

export default Profile;
