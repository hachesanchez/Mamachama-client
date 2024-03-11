import React from 'react'
import './CateringInfo.css'
import { Col, Row } from 'react-bootstrap'
import cateringImg1 from '../../assets/images/catering-3.jpeg'
import cateringImg2 from '../../assets/images/catering-2.webp'

function CateringInfo() {

    return (

        <Row>
            <Col md={6} lg={5}>
                <div className="catering-info-img mb-3">
                    <img src={cateringImg1} alt="Catering Saludable mamachama" />
                </div>
                <div className="catering-info-img-sm mb-3" >
                    <img src={cateringImg2} alt="Catering Saludable mamachama" />
                </div>
            </Col>
            <Col md={6} lg={7}>
                <div className='catering-info-body'>
                    <p className='catering-info-paragraph'>
                        Los alimentos están relacionados con todos los ámbitos de nuestras vidas,
                        son un consumo indispensable que requieren atención y cuidados.
                    </p>
                    <p className='catering-info-paragraph'>
                        Una sana alimentación no solo es garantía de un mejor vivir, también es una ayuda en el equilibrio
                        y la sanación tanto de dolencias físicas como emocionales.
                    </p>
                    <p className='catering-info-paragraph'>
                        Creemos que es indispensable brindar una propuesta que cumpla con las necesidades nutricionales óptimas,
                        con sabores deliciosos y materiales sostenibles, que permitan hacer de la experiencia del catering un momento
                        más profundo.
                    </p>
                    <p className='catering-info-paragraph'>
                        En nuestro equipo contamos con una persona que es chef profesional con estudios en gastronomía,
                        además de técnico experto en dietética y nutrición y coach nutricional, con más de 15 años de experiencia en cocinas profesionales de diversos conceptos, quien gracias al trabajo con la alimentación saludable no solo ha logrado sanar su obesidad mórbida, tambien ha colaborado en numerosos procesos para el mejoramiento de la salud integral de muchos cuerpos; lo que hace una fusión deliciosa, nutritiva y sostenible a la hora de planear los menús adaptados a los requerimientos de cada persona o entidad interesada en el servicio que brindamos.
                    </p>
                    <p className='catering-info-paragraph'>
                        Por este motivo desde Mamachama traemos la opción de un servicio de catering saludable Tenerife
                        que cumple con altos estándares de calidad, una amplia y deliciosa variedad de menús adaptables,
                        y un impacto responsable en cuanto a menaje (utensilios biodegradables y reciclables) y desperdicios.
                    </p>
                    <p className='catering-info-paragraph'>
                        Especializadas en menús <strong>gluten free y vegetarianos</strong>.
                    </p>
                    <p className='catering-info-paragraph'>
                        No dudes en contactarnos ante cualquier duda.
                    </p>
                </div>
            </Col>
        </Row>
    )
}

export default CateringInfo
