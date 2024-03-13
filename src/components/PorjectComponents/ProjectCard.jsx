import { useEffect, useState } from 'react'
import { Button, Card, Row } from 'react-bootstrap'
import projectService from '../../services/project.services'
import { formatDate } from '../../utils/formatDate'
import './ProjectCard.css'

function ProjectCard() {

    useEffect(() => {
        loadProjects()
    }, [])

    const [projects, setProjects] = useState([])
    const [isHovered, setIsHovered] = useState(false);


    const loadProjects = () => {

        projectService
            .getAllProjects()
            .then(({ data }) => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }


    return (
        <div  >

            <Row className="projects-cards-row" >

                {projects && projects?.map(project => (
                    <Card
                        className={`project-card ${isHovered ? 'hovered' : ''}`}
                        key={project._id}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={''}
                    >
                        <div className="project-card-front">
                            <Card.Img src={project.featuredImage} alt='Mamachama project image' />
                        </div>

                        <div className="project-card-back">
                            <Card.Body>
                                <Card.Title className='project-card-title'>{project.title}</Card.Title>
                                <Card.Text className='project-card-date'>
                                    Publicado el <span>{formatDate(project.createdAt)}</span>
                                </Card.Text>
                                <Card.Text className='project-card-description'>
                                    {project.description}
                                </Card.Text>
                                <Card.Text className='project-card-tags'>
                                    {project.tags && project.tags.map((tag, idx) => (
                                        <span key={idx}>
                                            #{tag}
                                        </span>
                                    ))}
                                </Card.Text>

                            </Card.Body>
                        </div>
                    </Card>
                ))}
            </Row>

        </div>
    )
}

export default ProjectCard
