import { Container } from 'react-bootstrap';
import './Profile.css';

function Profile({ user }) {

    if (!user) {
        return null;
    }

    const { username, email } = user;

    return (
        <>
            <Container>

                <p className="profile-title">Hola {username}!</p>

                * BOTÓN EDITAR PERFIL
                <br />
                * BOTÓN AÑADIR PROYECTO
                <br />
                * BOTÓN CERRAR SESIÓN
                <hr />
                --------------------
                SECCIÓN: MIS PROYECTOS AÑADIDOS
            </Container>
        </>
    );
}

export default Profile;
