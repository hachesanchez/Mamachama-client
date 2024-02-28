import { useState } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import uploadServices from '../../services/uploader.services';
import userService from '../../services/user.services';
import './EditProfileForm.css';

function EditProfileForm({ closeModal, email, username, description, avatar, relation, occupation, socialMedia, userID, updateProfile }) {
    const [formData, setFormData] = useState({
        email: email,
        username: username,
        description: description,
        avatar: avatar,
        relation: relation,
        occupation: occupation,
        socialMedia: socialMedia || [{ platform: "", url: "" }]
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileUpload = (e) => {
        const fileFormData = new FormData();
        fileFormData.append('imageData', e.target.files[0]);

        uploadServices
            .uploadimage(fileFormData)
            .then(({ data }) => {
                const newAvatarUrl = data.cloudinary_url;
                setFormData({ ...formData, avatar: newAvatarUrl });
            })
            .catch(err => console.log(err));
    };

    const handleSocialMediaChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSocialMedia = [...formData.socialMedia];
        updatedSocialMedia[index][name] = value;
        setFormData({ ...formData, socialMedia: updatedSocialMedia });
    };

    const handleAddSocialMedia = () => {
        setFormData({
            ...formData,
            socialMedia: [
                ...formData.socialMedia,
                { platform: "", url: "" }
            ]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        userService
            .editUser(userID, formData)
            .then(() => {
                closeModal();
                updateProfile(formData);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <Form onSubmit={handleSubmit} className='edit-profile-form' encType='multipart/form-data'>
                <Row>
                    <Form.Group as={Col} className='mb-3 mt-3' controlId='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' value={formData.email} name='email' onChange={handleInputChange} />
                    </Form.Group>
                </Row>
                <Form.Group className='mb-3' controlId='username'>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type='text' value={formData.username} name='username' onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className='mb-3 mt-3' controlId='avatar'>
                    <Form.Label>Imagen de perfil</Form.Label>
                    <Form.Control type='file' name='avatar' onChange={handleFileUpload} />
                </Form.Group>
                <Form.Group className='mb-3 mt-3' controlId='description'>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={2} value={formData.description} name='description' onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className='mb-3 mt-3' controlId='occupation'>
                    <Form.Label>Ocupación</Form.Label>
                    <Form.Control type='text' value={formData.occupation} name='occupation' onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className='mb-3 mt-3' controlId='relation'>
                    <Form.Label>Relación</Form.Label>
                    <Form.Select value={formData.relation} name='relation' onChange={handleInputChange}>
                        <option value=''>Escoge una opción...</option>
                        <option value="Team Mamachama">Equipo Mamachama</option>
                        <option value="Collaborator">Colaboradora/voluntaria</option>
                        <option value="Partner">Socia</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3 mt-3' controlId='socialMedia'>
                    <Form.Label>Redes Sociales</Form.Label>
                    {formData.socialMedia.map((social, index) => (
                        <Row key={index}>
                            <Form.Group as={Col} className='mt-3' controlId={`platform-${index}`}>
                                <Form.Label>Plataforma</Form.Label>
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
                                <Form.Label>URL</Form.Label>
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
                </Form.Group>
                <div className="d-grid">
                    <Button variant="dark mt-4" type="submit">Guardar</Button>
                </div>
            </Form>
        </>
    );
}

export default EditProfileForm;
