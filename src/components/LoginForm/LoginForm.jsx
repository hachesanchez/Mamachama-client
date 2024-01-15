import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context.jsx"
import { Form } from "react-bootstrap"
import { useState, useContext } from "react"


function LoginForm() {


    const [loginData, setLoginData] = useState({
        email: '',
        contraseña: ''
    })

    const navigate = useNavigate()

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const { password, email } = loginData

    return (

        <>
            <Form>

                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label className='loginform-label'>Email</Form.Label>
                    <Form.Control type='email' value={email} onChange={handleInputChange} name='email' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label className='loginform-label'>Contraseña</Form.Label>
                    <Form.Control type="password" />

                </Form.Group>


            </Form>
        </>
    )
}

export default LoginForm