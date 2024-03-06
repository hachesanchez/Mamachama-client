import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about1 from '../../assets/images/about-1.png';
import about2 from '../../assets/images/about-2.png';
import about3 from '../../assets/images/about-3.png';
import './About.css';


function About() {


    return (

        <>
            <div className="about-cards">

                <Row className='about-card-row'>
                    <Col md={6} sm={12}>
                        <p className="about-card-title">
                            Conoce al equipo
                        </p>
                        <p className="about-card-body">
                            Profesionales relacionados con el mundo de la creación, la comunicación y las dinámicas socioculturales.
                        </p>
                        <Link to={'/somos/nuestro-equipo'}>
                            <p className='about-link'>Nuestro equipo</p>
                        </Link>
                    </Col>
                    <Col md={6} sm={12} className='about-card-img-col'>
                        <Image src={about1} />
                    </Col>
                </Row>

                <Row className='about-card-row reverse-row'>
                    <Col md={6} sm={12} className='about-card-img-col reverse-img'>
                        <Image src={about2} />
                    </Col>
                    <Col md={6} sm={12} className='about-card-title-text reverse-txt'>
                        <p className="about-card-title">
                            Metodología
                        </p>
                        <p className="about-card-body">
                            Nuestra metodología de trabajo emplea lenguajes artísticos como medio de expresión y exteriorización de sentimientos y preocupaciones que
                            en muchas ocasiones son difíciles de poner en palabras. El arte es un camino de expresión y comunicación que facilita la creatividad,
                            tan necesaria para construir imaginarios esperanzadores. Durante las sesiones ponemos el énfasis en el proceso creativo utilizando la imaginación,
                            la intuición, el pensamiento y las propias emociones. Importa todo lo que sucede alrededor de la creación y no solo el resultado final.
                        </p>
                    </Col>
                </Row>

                <Row className='about-card-row'>
                    <Col md={6} sm={12}>
                        <p className="about-card-title">
                            Procesos grupales
                        </p>
                        <p className="about-card-body">
                            Trabajamos desde un enfoque grupal y participativo. El trabajo grupal permite generar cohesión social, fortalecer el apoyo y la confianza
                            (valores imprescindibles en las sociedades democráticas) y examinar problemáticas comunes. La participación es la columna vertebral
                            de nuestra acción como agentes de cambio.
                        </p>
                    </Col>
                    <Col md={6} sm={12} className='about-card-img-col'>
                        <Image src={about3} />
                    </Col>
                </Row>

            </div>
        </>
    );
}

export default About;
