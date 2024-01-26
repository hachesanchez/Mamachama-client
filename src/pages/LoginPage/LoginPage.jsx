import { Container } from 'react-bootstrap'
import LoginForm from '../../components/LoginForm/LoginForm'
import './LoginPage.css'

function LoginPage() {

    return (

        <>
            <div className="login-page-container">

                <div className="login-form-component">
                    <LoginForm />
                </div>

            </div>
        </>
    )
}

export default LoginPage