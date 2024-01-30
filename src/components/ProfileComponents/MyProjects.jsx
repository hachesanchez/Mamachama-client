import { Container, Card, Button, Badge } from 'react-bootstrap'
import './MyProjects.css'

function MyProjects({ user, projects }) {

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES');
    }

    return (

        <Container>
            <hr />

            <p className="my-projects-title">
                Mis proyectos añadidos
            </p>

            {projects.map(project => (
                <Card style={{ width: '18rem' }} className='my-project-card'>
                    <Card.Img variant="top" src={project.featuredImage} />
                    <Card.Body>
                        <Card.Title className='my-project-card-title'>{project.title}</Card.Title>
                        <Card.Text className='my-project-card-date'>
                            <p>Publicado el  {formatDate(project.createdAt)}</p>
                        </Card.Text>
                        <Card.Text className='my-project-card-description'>
                            {project.description}
                        </Card.Text>
                        <Card.Text className='my-project-card-tags'>
                            <ul>
                                {project.tags.map(tag => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>

                        </Card.Text>
                        <Card.Text>
                            {project.tags && project.tags.map((e, idx) => (
                                <Badge pill bg="secondary badge-custom m-1" key={idx}>
                                    {e}
                                </Badge>
                            ))}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}

        </Container>
    )
}

export default MyProjects;
