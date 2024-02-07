import { useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import uploadServices from '../../services/uploader.services'
import userService from '../../services/user.services'
import './EditProfileForm.css'


function EditProfileForm({ closeModal, updateprofile, email, password, username, description, avatar, relation, userID, updateProfile }) {



    const [formData, setFormData] = useState({
        email: email,
        //password: password,
        username: username,
        description: description,
        avatar: avatar,
        relation: relation
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }


    const handleSubmit = (e) => {

        e.preventDefault()

        userService
            .editUser(userID, formData)
            .then(() => {
                closeModal()
                updateProfile(formData)
            })
            .catch((err) => console.log(err))
    }


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
            <Form onSubmit={handleSubmit} className='edit-profile-form' encType='multipart/form-data'>

                <Row>
                    <Form.Group as={Col} className='mb-3 mt-3' controlid='email'>
                        <Form.Label className='edit-profile-label'>Email</Form.Label>
                        <Form.Control type='email' value={formData.email} name='email' onChange={handleInputChange} />
                    </Form.Group>
                    {/* <Form.Group as={Col} className='mb-3 mt-3' controlid='password'>
                        <Form.Label className='edit-profile-label'>Contraseña</Form.Label>
                        <Form.Control type='password' value={formData.password} name='password' onChange={handleInputChange}></Form.Control>
                    </Form.Group> */}
                </Row>

                <Form.Group className='mb-3' controlid='username'>
                    <Form.Label className='edit-profile-label'>Nombre</Form.Label>
                    <Form.Control type='text' value={formData.username} name='username' onChange={handleInputChange}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3 mt-3' controlid='avatar'>
                    <Form.Label className='edit-profile-label'>Imagen de perfil</Form.Label>
                    <Form.Control type='file' name='avatar' onChange={handleFileUpload}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3 mt-3' controlid='description'>
                    <Form.Label className='edit-profile-label'>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={2} value={formData.description} name='description' onChange={handleInputChange}></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3 mt-3' controlid='relation'>
                    <Form.Label className='edit-profile-label'>Relación</Form.Label>
                    <Form.Select controlid='relation' value={relation} name='relation' onChange={handleInputChange}>
                        <option value=''>Escoge una opción...</option>
                        <option value="Team Mamachama">Equipo Mamachama</option>
                        <option value="Collaborator">Colaboradora/voluntaria</option>
                        <option value="Partner">Socia</option>
                    </Form.Select>
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark mt-4" type="submit">Guardar</Button>
                </div>

            </Form>
        </>

    )
}

export default EditProfileForm
