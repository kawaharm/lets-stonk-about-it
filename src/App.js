// Imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Homepage from './components/Homepage';
import Tweet from './components/Tweet';
import Stock from './components/Stock';
import About from './components/About';


// Functions 
function App() {
  const [stockName, setStockName] = useState("");
  const [ticker, setTicker] = useState("");

  return (
    <div className="bg-dark">
      <Router>
        <Navbar className="navbar" style={{ backgroundColor: "#38b262" }} variant="dark" sticky="top" expand="lg" collapseOnSelect>
          <Navbar.Brand>
            <div className="nav-logo text-light" style={{ marginLeft: "20px" }}>📈 Let's<span>Stonk</span> 📉</div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-start">
            <Nav className>
              <Nav.Link href="/" className="text-light">Home</Nav.Link>
              <NavDropdown title="Companies" className="text-light navdropdown" active>
                <NavDropdown.Item as={Link}
                  to="/GME"
                  state={{
                    stockName: "Gamestop Corp",
                    ticker: "GME"
                  }}>GME (Gamestop)</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/AAPL"
                  state={{
                    stockName: "Apple Inc",
                    ticker: "AAPL"
                  }}
                >AAPL (Apple)</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/TSLA"
                  state={{
                    stockName: "Tesla Inc",
                    ticker: "TSLA"
                  }}>TSLA (Tesla)</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/AMC"
                  state={{
                    stockName: "AMC Entertainment Holdings",
                    ticker: "AMC"
                  }}>AMC (AMC)</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/AMZN"
                  state={{
                    stockName: "Amazon.com Inc",
                    ticker: "AMZN"
                  }}>AMZN (Amazon)</NavDropdown.Item>
                <NavDropdown.Item as={Link}
                  to="/NVDA"
                  state={{
                    stockName: "NVIDIA",
                    ticker: "NVDA"
                  }}>NVDA (NVIDIA)</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about" className="text-light">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/:id' element={<Tweet />} />
          <Route path='/stock' element={<Stock />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;