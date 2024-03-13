import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './NewsSection.css'

function NewsSection({ latestProjects }) {


    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/hacemos/proyectos')
    }

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
                    {latestProjects.map(project => (
                        <img src={project.featuredImage} />
                    ))}
                </div>

                <div className="news-seemore">
                    <OverlayTrigger
                        placement="auto"
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