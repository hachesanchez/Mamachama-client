import { Navbar, Nav, Container, NavDropdown, Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import searchIcon from '../../assets/icons/icon-search.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth.context';
import './Navigation.css'


function Navigation() {

    const { user, logout } = useContext(AuthContext)

    const [displayInput, setDisplayInput] = useState(false)

    const handleInput = () => {
        setDisplayInput(!displayInput)
    }

    const [hoveredLink, setHoveredLink] = useState(false)


    return (

        <Navbar
            expand="lg"
            className={`navbar-custom`}
            fixed='top'>

            <Navbar.Brand as={Link} to={'/'} className='nav-brand'> MAMACHAMA </Navbar.Brand>

            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className={`toggle`} />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto main-links">

                    {/* <div className="nav-link">
                            <ScrollLink
                                to="contact-section"
                                smooth={true}
                                duration={100}
                                className="nav-link"
                                style={{ cursor: 'pointer' }}
                            >
                                contacta
                            </ScrollLink>
                        </div> */}

                    <NavDropdown title="SOMOS" id="basic-nav-dropdown">
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

                    <NavDropdown title="HACEMOS" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            as={Link}
                            to={'/hacemos/acciones'}
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

                    <NavDropdown title="COLABORA" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            as={Link}
                            to={'/colabora/invisibilizadas'}
                            className='drop down-item'
                        >
                            Libro "Invisibilizadas"
                        </NavDropdown.Item>
                        <NavDropdown.Item
                            as={Link}
                            to={'/colabora/catering'}
                            className='dropdown-item'
                        >
                            Catering saludable
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link as={Link} to={'/contacta'} className='nav-link'>CONTACTA</Nav.Link>

                    {user &&
                        <>
                            <Navbar.Brand as={Link} to="/perfil" className='nav-link-greeting' >
                                <img src={user?.avatar} alt="avatar" width="40" height="40" className="nav-avatar rounded-circle" />
                            </Navbar.Brand>
                            <NavDropdown title="" id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    onClick={logout}
                                    className='drop down-item'
                                >Cerrar Sesión
                                </NavDropdown.Item>
                            </NavDropdown>
                        </>
                    }

                </Nav>


                <Form className='search-form'>
                    <Row className={`${displayInput ? 'search' : 'search-no-border'}`}>
                        <Col xs="auto" className={`${displayInput ? 'search-button' : 'hidden'}`}>
                            <Button
                                type="button"
                                className="sm"
                                variant="link"
                                onClick={handleInput}
                            >
                                <img className="search-icon" src={searchIcon} alt="Search" />
                            </Button>
                        </Col>
                        {displayInput && (
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar"
                                    className="mx-1 search-input"
                                />
                            </Col>
                        )}
                    </Row>
                </Form>


            </Navbar.Collapse>


        </Navbar >
    )
}

export default Navigation