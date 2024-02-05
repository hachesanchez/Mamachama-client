import { useState } from 'react'
import './EditProfileForm.css'
import { Form, Col } from 'react-bootstrap'

function EditProfileForm({ closeModal, email, password, username, description, avatar, relation }) {


    const [formData, setFormData] = useState({
        email: email,
        username: username,
        description: description,
        avatar: avatar,
        relation: relation
    })

    console.log('new user.-----', user)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()


        closeModal()
    }



    return (

        <>

            {console.log('new user.-----', email)}

            <Form onSubmit={handleSubmit} className='edit-profile-form' encType='multipart/form-data'>
                <Form.Group as={Col} className='mb-3 mt-3' controlId='email'>
                    <Form.Label className='edit-profile-label'>Email</Form.Label>
                    <Form.Control type='email' value={email} defaultValue={formData.email} name='email' onChange={handleInputChange} />

                </Form.Group>



            </Form>
        </>
    )
}

export default EditProfileForm