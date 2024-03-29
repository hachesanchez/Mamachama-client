import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Form, FormGroup, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ContactForm.css'

function ContactForm({ handlePolicyModal }) {

    const [state, handleSubmit] = useForm("xeqyqwdz");
    const [isBoxChecked, setIsBoxChecked] = useState(false);

    const handleCheckbox = (e) => {
        setIsBoxChecked(e.target.checked);
    }

    if (state.succeeded) {
        return <h3 className="contact-thanks-message">Gracias por ponerte en contacto con nosotras!!</h3>;
    }



    return (
        <>
            <Form onSubmit={handleSubmit} className="contact-form">
                <FormGroup as={Col} className="mb-3 mt-3" controlId="username">
                    <Form.Control type="text" name="username" placeholder="Tu nombre..." className="form-placeholder" />
                    <ValidationError prefix="Name" field="username" errors={state.errors} />
                </FormGroup>

                <FormGroup as={Col} className="mb-3 mt-3" controlId="email">
                    <Form.Control type="email" name="email" placeholder="Email..." className="form-placeholder" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </FormGroup>

                <FormGroup className="mb-3 mt-3" controlId="message">
                    <Form.Control as="textarea" rows={3} name="message" placeholder="Escribe aquí tu mensaje..." className="form-placeholder" />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </FormGroup>

                <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type='checkbox'
                        label={<span>He leído y acepto la <Link onClick={handlePolicyModal}>política de privacidad</Link></span>}
                        //  label={<span>He leído y acepto la <Link to={'/politica-de-privacidad'}>política de privacidad</Link></span>}
                        className={'check-label'}
                        onChange={handleCheckbox}
                    />
                </Form.Group>

                <Button className='mb-3 mt-3' variant="secondary" type="submit" disabled={!isBoxChecked || state.submitting}>
                    Enviar
                </Button>
            </Form>
        </>
    )
}

export default ContactForm;
