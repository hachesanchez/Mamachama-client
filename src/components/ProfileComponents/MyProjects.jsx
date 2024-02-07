import { Container, Card, Button, Badge, Row, Col } from 'react-bootstrap'
import './MyProjects.css'

function MyProjects({ user, projects }) {

    function formatDate(dateString) {
        const date = new Date(dateString)
        return date.toLocaleDateString('es-ES')
    }

    return (

        <>
            <div className="my-projects">
                <Container>

                    <h2 className="my-projects-title">
                        MIS PROYECTOS AÑADIDOS
                    </h2>

                    <Row xs={1} md={3} lg={3} className="my-projects-cards-row">
                        {projects.map(project => (
                            <Card style={{ width: '18rem' }} className='my-project-card' key={project._id}>
                                <Card.Img variant="top" src={project.featuredImage} />
                                <Card.Body>
                                    <Card.Title className='my-project-card-title'>{project.title}</Card.Title>
                                    <Card.Text className='my-project-card-date'>
                                        Publicado el <span>{formatDate(project.createdAt)}</span>
                                    </Card.Text>
                                    <Card.Text className='my-project-card-description'>
                                        {project.description}
                                    </Card.Text>
                                    <Card.Text className='my-project-card-tags'>
                                        {project.tags && project.tags.map((tag, idx) => (
                                            <span key={idx}>
                                                #{tag}
                                            </span>
                                        ))}
                                    </Card.Text>
                                    <div className="my-project-card-buttons">
                                        <Button variant="dark" className='' size="sm">Editar</Button>
                                        <Button variant="dark" className='m-1' size="sm">Eliminar</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default MyProjects
