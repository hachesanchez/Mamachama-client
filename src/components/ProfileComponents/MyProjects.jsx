import { Container } from 'react-bootstrap'
import './MyProjects.css'

function MyProjects({ user }) {



    return (

        <>
            <Container>

                <hr />
                <p className="my-projects-title">
                    Mis proyectos añadidos
                </p>
                title
                featuredImage
                {console.log(user.projects)}

                {user.projects.map(project => (
                    <ul>
                        <li key={project._id}>
                            <h5>{project.title}</h5>
                        </li>
                    </ul>
                ))}

            </Container>
        </>
    )
}

export default MyProjects