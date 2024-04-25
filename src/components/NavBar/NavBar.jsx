import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Mi Tienda</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                <Nav.Link href="#productos">Productos</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
