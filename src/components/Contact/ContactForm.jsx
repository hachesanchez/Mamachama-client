import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import './ContactForm.css'
import { Form, FormGroup, Row, Col, Button, Container } from "react-bootstrap";

function ContactForm() {

    const [state, handleSubmit] = useForm("xeqyqwdz")
    const [contactPressed, setContactPressed] = useState(false)

    if (state.succeeded) {
        return <p>Gracias por ponerte en contacto con nosotras</p>;
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

                <Button className='mb-3 mt-3' variant="secondary" type="submit" disabled={state.submitting}>
                    Enviar
                </Button>

            </Form>

        </>
    )
}

export default ContactForm