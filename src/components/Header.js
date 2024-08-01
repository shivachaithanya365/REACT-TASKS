import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render() {
        const navStyle = {
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
        };
        const navLinkStyle = {
            color: 'white',
        };

        return (
            <Navbar expand="lg" className="bg-primary" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" className="d-flex align-items-center">
                        <img
                            alt=""
                            src="https://fakestoreapi.com/icons/logo.png"
                            width="50"
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
                            <Nav.Link href="#link" style={navLinkStyle}>Products</Nav.Link>
                            <Nav.Link href="#link" style={navLinkStyle}>Api</Nav.Link>
                            <NavDropdown title="Category" id="basic-nav-dropdown" className='text-white'>
                                <NavDropdown.Item href="#action/3.1" className='text-black'>Men</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className='text-black'>
                                    Women
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className='text-black'>Kids</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;