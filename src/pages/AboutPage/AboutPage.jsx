import { Container } from "react-bootstrap"
import './AboutPage.css'
import About from "../../components/AboutComponents/About"

function AboutPage() {

    return (

        <>
            <div className="about">

                <div className="page-title">
                    <h1 className="page-title-text">Somos</h1>
                </div>
                <Container>
                    <p className="page-subtitle">
                        Generamos, impulsamos y acompañamos procesos de desarrollo comunitario e
                        inclusión social a través del arte, la gastronomía intercultural y la formación en zonas rurales.
                    </p>
                    <div className="about-component">
                        <About />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default AboutPage