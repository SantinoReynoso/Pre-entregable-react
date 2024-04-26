import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import lalentejaImage from "../../assets/lalenteja.jpg";


function NavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={lalentejaImage} // Utiliza la variable importada
              width="30"
              height="30"
              className="d-inline-block align-top rounded-circle mr-2" // Añade clases de Bootstrap para el estilo
            />{' '}
            <span className="font-weight-bold text-uppercase">La Lenteja</span> {/* Estilo de texto */}
          </Navbar.Brand>
        </Container>
      </Navbar> 
    </>
  );
}

export default NavBar;
