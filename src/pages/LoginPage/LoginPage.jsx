import { Container } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

function LoginPage() {

    return (

        <>
            <div className="login-page-container">
                <Container>

                    <LoginForm />

                </Container>
            </div>
        </>
    )
}

export default LoginPage