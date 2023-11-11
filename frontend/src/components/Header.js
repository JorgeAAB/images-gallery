import React from 'react';
import { Navbar } from 'react-bootstrap'

const Header = ({ title }) => {
    return (
        <Navbar bg="ligth" data-bs-theme="ligth">
            <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Navbar>
    )
};

export default Header;