import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
      <Navbar bg='light'>
        <Navbar.Brand href='#home'>Google Books Machine</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className="mr-auto">
          <Nav.Link href="/Search">Search</Nav.Link>
          <Nav.Link href="/Saved">Saved</Nav.Link>
          </Nav>
      </Navbar>
  );
}

export default Navigation;
