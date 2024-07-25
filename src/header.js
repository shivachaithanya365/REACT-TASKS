import React from 'react';

const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: "darkBlue",
    textAlign: 'center',
    height: "80px"
};

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.5rem'
};

const navStyle = {
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: '1',
    display: 'block',
    width: '100%'
}

const Header = () => {
    return (
        <nav style={navStyle}>
            <ul style={listStyle}>
                <li>
                    <a href="/" style={linkStyle}>Home</a>
                </li>
                <li>
                    <a href="/" style={linkStyle}>Profile</a>
                </li>
                <li>
                    <a href="/" style={linkStyle}>About</a>
                </li>
                <li>
                    <a href="/" style={linkStyle}>Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
