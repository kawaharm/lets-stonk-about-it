// Imports
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';


// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Tweet from './components/Tweet';

function App() {
  return (
    <Router>
      <Navbar bg="navMain" variant="dark" sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand>
          <h4 style={{ marginLeft: "20px" }}>Let's Stonk About It</h4>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Companies">
              <NavDropdown.Item as={Link} to="/gme">GME</NavDropdown.Item>
              <NavDropdown.Item href="">AAPL</NavDropdown.Item>
              <NavDropdown.Item href="">TSLA</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">About</Nav.Link>
            <Nav.Link href="">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path='/gme' element={<Tweet />} />
      </Routes>
    </Router>
  );
}

export default App;