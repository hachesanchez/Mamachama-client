import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context.jsx"
import { Form, Button } from "react-bootstrap"
import { useState, useContext } from "react"
import authService from "../../services/auth.services.js"


function LoginForm() {

    // const [errors, setErrors] = useState([])

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/')
            })
            .catch(err => console.log(err))
        // .catch(err => setErrors([err.response.data.message]))
    }

    const { password, email } = loginData

    return (

        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label className='loginform-label'>Email</Form.Label>
                    <Form.Control type='email' value={email} onChange={handleInputChange} name='email' />
                </Form.Group>

                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label className='loginform-label'>Contraseña</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>

                {/* {errors.length > 0 && <FormError>{errors.map((elm, i) => <p key={i}>{elm}</p>)}</FormError>} */}

                <div className="d-grid">
                    <Button className='mb-3 mt-3' variant="secondary" type="submit" >
                        Enviar
                    </Button>
                </div>



            </Form>
        </>
    )
}

export default LoginForm