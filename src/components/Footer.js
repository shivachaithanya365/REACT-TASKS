import React, { Component } from 'react';

const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "darkBlue",
    textAlign: 'center',
    height: "80px",
    borderRadius: '50px'
};

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem'
};

const footStyle = {
    position: 'sticky',
    bottom: '0px',
    marginLeft: 'auto',
    marginRight: '20px',
    zIndex: '1',
    display: 'block',
    width: '10%',
    borderRadius: '50%',
    boxShadow: "2px 2px 20px rgba(0, 0, 0, 10)",
}

class Footer extends Component {
    render() {
        return (
            <footer style={footStyle}>
                <ul style={listStyle}>
                    <li>
                        <a href="/" style={linkStyle}>Contact-Us</a>
                    </li>
                </ul>
            </footer>
        );
    }
}
export default Footer;
