import { Container } from "react-bootstrap"
import ContactForm from "../../components/Contact/ContactForm"
import './ContactPage.css'

function ContactPage() {

    return (

        <>

            <Container>
                <h1 className="mb-3">Contacta con nosotras</h1>
                <div className="contact-form-component">
                    <ContactForm />
                </div>

            </Container>
        </>
    )
}

export default ContactPage