import { Navbar, Nav, Container, NavDropdown, Form, Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import searchIcon from '../../assets/icons/icon-search.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth.context';
import './Navigation.css'


function Navigation() {

    const { user, logout } = useContext(AuthContext)

    const [displayInput, setDisplayInput] = useState(false)
    const [expanded, setExpanded] = useState(false)

    const navigate = useNavigate()

    const handleInput = () => {
        setDisplayInput(!displayInput)
    }

    const handleToggle = () => {
        setExpanded(!expanded)
    }

    const handleCloseNavbar = () => {
        setExpanded(false)
    }

    const handleLogoutAndClose = () => {
        logout()
        handleCloseNavbar()
        navigate('/')
    }



    return (

        <Navbar
            expand="lg"
            className={`navbar-custom`}
            fixed='top'
            expanded={expanded}
        >

            <Navbar.Brand as={Link} to={'/'} className='nav-brand' onClick={handleCloseNavbar}> MAMACHAMA </Navbar.Brand>

            <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className={`toggle`}
                onClick={handleToggle}
            />

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto main-links">
                    <NavDropdown title="SOMOS" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            as={Link}
                            // to={'/somos/sobre-mamachama'}
                            to={'/somos'}
                            className='drop down-item'
                            onClick={handleCloseNavbar}
                        >
                            Sobre Mamachama
                        </NavDropdown.Item>
                        <hr />
                        <NavDropdown.Item
                            as={Link}
                            to={'/somos/nuestro-equipo'}
                            className='dropdown-item'
                            onClick={handleCloseNavbar}
                        >
                            Nuestro equipo
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="HACEMOS" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            as={Link}
                            // to={'/hacemos/acciones'}
                            to={'/hacemos'}
                            className='drop down-item'
                            onClick={handleCloseNavbar}
                        >
                            ¿Qué hacemos?
                        </NavDropdown.Item>
                        <hr />
                        <NavDropdown.Item
                            as={Link}
                            to={'/hacemos/proyectos'}
                            className='dropdown-item'
                            onClick={handleCloseNavbar}
                        >
                            Proyectos
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="COLABORA" id="basic-nav-dropdown">
                        <NavDropdown.Item
                            as={Link}
                            to={'/colabora/invisibilizadas'}
                            className='drop down-item'
                            onClick={handleCloseNavbar}
                        >
                            Libro "Invisibilizadas"
                        </NavDropdown.Item>
                        <hr />
                        <NavDropdown.Item
                            as={Link}
                            to={'/colabora/catering'}
                            className='dropdown-item'
                            onClick={handleCloseNavbar}
                        >
                            Catering saludable
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link as={Link} to={'/contacta'} className='nav-link' onClick={handleCloseNavbar}>CONTACTA</Nav.Link>

                    {user &&
                        <>
                            <Navbar.Brand as={Link} to="/perfil" className='nav-link-greeting' >
                                <img src={user?.avatar} alt="avatar" width="40" height="40" className="nav-avatar rounded-circle" onClick={handleCloseNavbar} />
                            </Navbar.Brand>
                            <NavDropdown title="" id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    onClick={handleLogoutAndClose}
                                    className='drop down-item'
                                >Cerrar Sesión
                                </NavDropdown.Item>
                            </NavDropdown>
                        </>
                    }
                    {!user &&
                        <>
                            <Nav.Link as={Link} to={'/login'} className='nav-link' onClick={handleCloseNavbar}>login</Nav.Link>
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