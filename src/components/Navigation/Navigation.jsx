import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

import './Navigation.css'

function Navigation() {

    return (

        <Navbar
            expand="lg"
            className={`navbar-custom`}
            fixed='top'>

            <Container>

                <Navbar.Brand as={Link} to={'/'} > MAMACHAMA </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className={`toggle`} />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link as={Link} to={'/contacta'}>contacta</Nav.Link>

                        <div className="nav-link">
                            <ScrollLink
                                to="contact-section"
                                smooth={true}
                                duration={100}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}
                            >
                                contact
                            </ScrollLink>
                        </div>

                        <NavDropdown title="somos" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                as={Link}
                                to={'/somos/sobre-mamachama'}
                                className='drop down-item'
                            >
                                Sobre Mamachama
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to={'/somos/nuestro-equipo'}
                                className='dropdown-item'
                            >
                                Nuestro equipo
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="hacemos" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                as={Link}
                                to={'/hacemos/sobre-mamachama'}
                                className='drop down-item'
                            >
                                ¿Qué hacemos?
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to={'/hacemos/proyectos'}
                                className='dropdown-item'
                            >
                                Proyectos
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default Navigation