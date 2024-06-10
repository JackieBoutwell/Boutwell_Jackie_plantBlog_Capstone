import { Link } from 'react-router-dom' 
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/#home">Plant Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/SavedData">Saved-Plants</Nav.Link>
              <Nav.Link href="/SearchData">Search-Plants</Nav.Link>
            <NavDropdown title="Interact" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Comment">Add a Comment.</NavDropdown.Item>
              <NavDropdown.Item href="/Connect">
                Connect w/ Others
              </NavDropdown.Item>
              <NavDropdown.Item href="/Email">Join Email List</NavDropdown.Item>
              <NavDropdown.Divider />
                   </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;