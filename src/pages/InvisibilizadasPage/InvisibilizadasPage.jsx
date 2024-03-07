import React from 'react'
import './InvisibilizadasPage.css'
import { Container } from 'react-bootstrap'
import InvisibilizadasCard from '../../components/InvisibilizadasComponents/InvisibilizadasCard'
import TheySay from '../../components/InvisibilizadasComponents/TheySay'

function InvisibilizadasPage() {

    return (

        <div className='invisibilizadas'>

            <div className="page-title">
                <h1 className="page-title-text">INVISIBILIZADAS</h1>
            </div>

            <Container>
                <p className="page-subtitle">
                    InVISIBILIZADAS recoge el testimonio de 160 mujeres que viven en pueblos de la provincia de Ciudad Real. 13 relatos,
                    13 ilustraciones y 13 recetas que nos muestran claves para un mundo más justo.
                </p>
                <div className="invisibilizadas-card-component">
                    <InvisibilizadasCard />
                </div>
            </Container>

            <div className="inivisibilizadas-theysay-component">
                <TheySay />
            </div>

        </div>
    )
}

export default InvisibilizadasPage
