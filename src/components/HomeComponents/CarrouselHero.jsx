// import { useState, useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Importa Link si estás utilizando react-router para manejar las rutas

// import projectService from '../../services/project.services';
// import './CarrouselHero.css'; // Asegúrate de tener un archivo CSS para estilizar el carrusel si es necesario

// function CarrouselHero() {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         // Obtener los últimos 4 proyectos
//         projectService
//             .getLatestProjects(4)
//             .then(response => {
//                 setProjects(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching latest projects:', error);
//             });
//     }, []);

//     return (

//         <>
//             <Carousel className="carrousel-hero">
//                 {projects.map((project, index) => (
//                     <Carousel.Item key={project._id}>
//                         <img
//                             className="d-block w-100"
//                             src={project.featuredImage}
//                             alt={project.title}
//                         />
//                         <Carousel.Caption>
//                             <h3>{project.title}</h3>
//                             <Link to={`/projects/${project._id}`}>
//                                 <Button variant="primary">Ver proyecto</Button>
//                             </Link>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                 ))}
//             </Carousel>
//         </>
//     )
// }

// export default CarrouselHero