import React from 'react';
import logo from './logo.svg';
import { Navbar, Nav } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar bg='light'>
        <Navbar.Brand href='#home'>Google Books Machine</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className="mr-auto">
          <Nav.Link href="#home">Search</Nav.Link>
          <Nav.Link href="#link">Saved</Nav.Link>
          </Nav>
      </Navbar>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
