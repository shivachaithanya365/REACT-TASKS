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
                            src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png"
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
                            <Nav.Link href="#link" style={navLinkStyle}>Matches</Nav.Link>
                            <Nav.Link href="#link" style={navLinkStyle}>Points Table</Nav.Link>
                            <NavDropdown title="Stats" id="basic-nav-dropdown" className='text-white'>
                                <NavDropdown.Item href="#action/3.1" className='text-black'>Overall Stats</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className='text-black'>
                                    Head to Head
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className='text-black'>Individual Stats</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;