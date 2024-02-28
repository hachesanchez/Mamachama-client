import { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import authService from '../../services/auth.services'
import uploadServices from '../../services/uploader.services'
import './SignupForm.css'

function SignupForm({ createUser }) {

    const [signupData, setSignupData] = useState({
        email: '',
        password: '',
        username: '',
        description: '',
        avatar: '',
        relation: '',
        occupation: '',
        socialMedia: [
            {
                platform: "",
                url: "",
            }
        ],
    })


    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .signup(signupData)
            .then(({ data }) => {
                createUser(data)
                console.log('usuaria creada:', data)
            })
            .catch(err => console.log(err))
    }


    const handleAddSocialMedia = () => {
        setSignupData({
            ...signupData,
            socialMedia: [
                ...signupData.socialMedia,
                { platform: "", url: "" }
            ]
        });
    }

    const handleSocialMediaChange = (index, e) => {
        const { value, name } = e.target;
        const updatedSocialMedia = [...signupData.socialMedia];
        updatedSocialMedia[index][name] = value;
        setSignupData({ ...signupData, socialMedia: updatedSocialMedia });
    }

    const { email, password, username, description, avatar, relation, occupation, socialMedia } = signupData


    const handleFileUpload = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(({ data }) => {
                setSignupData({ ...signupData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }




    return (

        <>

            <Form onSubmit={handleSubmit} className='signup-form' encType='multipart/form-data'>

                <Row>
                    <Form.Group as={Col} className='mb-3 mt-3' controlid='email'>
                        <Form.Label className='signup-label'>Email</Form.Label>
                        <Form.Control type='email' value={email} name='email' onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3 mt-3" controlid="password">
                        <Form.Label className="signup-label">Contraseña</Form.Label>
                        <Form.Control type="password" value={password} name="password" onChange={handleInputChange} />
                    </Form.Group>
                </Row>

                <Form.Group className='mb-3' controlid='username'>
                    <Form.Label className='signup-label'>Nombre</Form.Label>
                    <Form.Control type='text' value={username} name='username' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className='mb-3' controlid='avatar'>
                    <Form.Label className='signup-label'>Imagen de perfil</Form.Label>
                    <Form.Control type='file' onChange={handleFileUpload} />
                </Form.Group>

                <Form.Group className='mb-3' controlid='occupation'>
                    <Form.Label className='signup-label'>Ocupación o puesto</Form.Label>
                    <Form.Control type='text' value={occupation} name='occupation' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className='mb-3' controlid='description'>
                    <Form.Label className='signup-label'>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={2} value={description} name='description' onChange={handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className='signup-label'>Relación</Form.Label>
                    <Form.Select controlid='relation' value={relation} name='relation' onChange={handleInputChange}>
                        <option value=''>Escoge una opción...</option>
                        <option value="Team Mamachama">Equipo Mamachama</option>
                        <option value="Collaborator">Colaboradora/voluntaria</option>
                        <option value="Partner">Socia</option>
                    </Form.Select>
                </Form.Group>

                {socialMedia.map((social, index) => (
                    <Row key={index}>
                        <Form.Group as={Col} className='mt-3' controlId={`platform-${index}`}>
                            <Form.Label className='signup-label'>Plataforma</Form.Label>
                            <Form.Select
                                value={social.platform}
                                name="platform"
                                onChange={(e) => handleSocialMediaChange(index, e)}
                            >
                                <option value="">Escoge una opción...</option>
                                <option value="Facebook">Facebook</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Instagram">Instagram</option>
                                <option value="YouTube">YouTube</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} className=' mt-3' controlId={`url-${index}`}>
                            <Form.Label className='signup-label'>URL</Form.Label>
                            <Form.Control
                                type='text'
                                value={social.url}
                                name='url'
                                onChange={(e) => handleSocialMediaChange(index, e)}
                            />
                        </Form.Group>
                    </Row>
                ))}

                <Button variant="outline-secondary mt-3" onClick={handleAddSocialMedia}>+</Button>


                <div className="d-grid">
                    <Button variant="dark mt-4" type="submit">Registrar</Button>
                </div>

            </Form>

            {/* TODO: Error managing */}

        </>
    )
}

export default SignupForm