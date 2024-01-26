import colombiaImg from '../../assets/images/espacio-colombia.jpg'
import { Row, Col } from 'react-bootstrap'
import './EspacioColombia.css'

function EspacioColombia() {

    return (

        <>
            <section className="espacio-colombia">
                <Row>
                    <img src={colombiaImg} alt="Espacio Colombia Tenerife" />
                </Row>
                <Row>
                    <p className="espacioColombia-text">
                        Nos encontramos en Colombia (Santa Cruz de Tenerife). Un espacio de trabajo en el que profesionales de la cultura comunitaria, la arquitectura y el diseño convivimos, colaboramos y trabajamos.
                        <br />
                        <br />
                        <a href="https://www.instagram.com/espacio.colombia/" target='_blank'>Espacio Colombia</a>  está ubicado en las plantas 5 y 6 del nº 24 en la Calle Bethencourt Alfonso de Santa Cruz de Tenerife.
                    </p>
                </Row>
            </section >
        </>
    )
}

export default EspacioColombia
