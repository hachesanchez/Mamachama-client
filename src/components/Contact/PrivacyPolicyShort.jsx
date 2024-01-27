import { Link } from 'react-router-dom'
import './PrivacyPolicyShort.css'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy'

function PrivacyPolicyShort({ handlePolicyModal }) {

    const [showPolicyBox, setShowPolicyBox] = useState(false)
    // const [modalShow, setModalShow] = useState(false)

    const toggleContent = () => {
        setShowPolicyBox(!showPolicyBox)
    }

    // const handlePolicyModal = () => {
    //     setModalShow(true)
    // }

    const dropArrow = showPolicyBox ? '▲' : '▶'


    return (

        <>
            <div className={`privacy-component ${showPolicyBox ? 'show' : ''}`}>

                <div className="policy-title" onClick={toggleContent} >
                    <p className="privacy-text-dropdown">
                        {dropArrow}  Antes de enviar tu consulta puedes ver nuestro compromiso con tu privacidad <strong>aquí</strong>
                    </p>
                </div>
                <div className={`policy-box ${showPolicyBox ? 'showFullContent' : ''}`}>
                    <p className="privacy-text-short">
                        Responsable: Mamachama
                        <br />
                        Finalidad de la recogida y tratamiento de los datos personales: gestionar la solicitud que realizas en este formulario
                        de contacto.
                        <br />
                        Derechos: Podrás ejercer tus derechos de acceso, rectificación, limitación y suprimir los datos en somos@mamachama.com,
                        así como el derecho a presentar una reclamación ante una autoridad de control.
                        <br />
                        Información adicional: En mi <Link onClick={handlePolicyModal}> política de privacidad </Link>encontrarás
                        información adicional sobre la recopilación y el uso de su información personal. Incluida información sobre acceso,
                        conservación, rectificación, eliminación, seguridad y otros temas.
                    </p>
                </div>

            </div>




        </>
    )
}

export default PrivacyPolicyShort
