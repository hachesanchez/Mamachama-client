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
                    <About />
                </Container>
            </div>
        </>
    )
}

export default AboutPage