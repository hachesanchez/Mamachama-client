import { Container } from "react-bootstrap"
import ContactForm from "../../components/Contact/ContactForm"
import PrivacyPolicyShort from "../../components/Contact/PrivacyPolicyShort"
import EspacioColombia from "../../components/Contact/EspacioColombia"
import './ContactPage.css'

function ContactPage() {

    return (

        <>

            <div className="contact">

                <div className="contact-title">
                    <h1 className="contact-title-text">Contacta </h1>
                </div>

                <Container>

                    <div className="mt-3 contact-form-component">
                        <ContactForm />
                    </div>
                    <div className="mt-4 privacy-policy-component">
                        <PrivacyPolicyShort />
                    </div>
                    <div className="mt-5 espacio-colombia-component">
                        <EspacioColombia />
                    </div>

                </Container>
            </div>

        </>
    )
}

export default ContactPage