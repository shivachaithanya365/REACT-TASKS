import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
    };
    const navLinkStyle = {
        color: 'white',
    };
    const linkTextblack = {
        color: 'black',
    }

    return (
        <Navbar expand="lg" className="bg-primary" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        alt=""
                        src="https://jshleap.github.io/assets/images/recipes.jpg"
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                    />{' '}
                    <span style={{ marginLeft: '40px', color: 'white' }}>
                        Shiva Chaithanya
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={navStyle}>
                        <Nav.Link href="#home" style={navLinkStyle}>Home</Nav.Link>
                        <Nav.Link href="#link" style={navLinkStyle}>Recipes</Nav.Link>
                        <Nav.Link href="#link" style={navLinkStyle}>Varities</Nav.Link>
                        <NavDropdown title="RecipesList" id="basic-nav-dropdown" style={navLinkStyle}>
                            <NavDropdown.Item href="#action/3.1" style={linkTextblack} >North-Indian</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2" style={linkTextblack}>
                                South-Indian
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3" style={linkTextblack}>Foreign</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
