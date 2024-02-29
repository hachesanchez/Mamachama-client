import imgEx from '../../assets/images/header-test.jpg'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './NewsSection.css'
import { useNavigate } from 'react-router-dom';

function NewsSection() {

    const navigate = useNavigate()
    const handleClick = () => { navigate('/hacemos/proyectos') }

    const renderTooltip = (props) => (
        <Tooltip id='arrow-tooltip' {...props}>
            Acceder a todos los proyectos
        </Tooltip>
    )

    return (

        <>
            <div className="news-section">

                <h1 className="news-title">
                    Últimos proyectos
                </h1>
                <div className="news-cards">
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />
                    <img src={imgEx} alt="" />
                </div>

                <div className="news-seemore">
                    <OverlayTrigger
                        placement="auto" // Position to the left
                        overlay={renderTooltip}
                    >
                        <Button variant='none'>
                            <MdKeyboardDoubleArrowRight onClick={handleClick} />
                        </Button>
                    </OverlayTrigger>
                </div>
            </div>


        </>

    )

}

export default NewsSection