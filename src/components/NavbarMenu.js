import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarMenu() {
  const [stockName, setStockName] = useState("");
  const [ticker, setTicker] = useState("");

  return (
    <Navbar
      className="navbar"
      style={{ backgroundColor: "#38b262" }}
      variant="dark"
      sticky="top"
      expand="lg"
      collapseOnSelect
    >
      <Navbar.Brand>
        <div className="nav-logo text-light" style={{ marginLeft: "20px" }}>
          📈 Let's<span>Stonk</span> 📉
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-start">
        <Nav style={{ marginLeft: "20px" }}>
          <Nav.Link href="/" className="text-light">
            Home
          </Nav.Link>
          <NavDropdown
            title="Companies"
            className="text-light navdropdown"
            id="collasible-nav-dropdown"
            active
          >
            <NavDropdown.Item
              as={Link}
              to="/GME"
              state={{
                stockName: "Gamestop Corp",
                ticker: "GME",
              }}
            >
              GME (Gamestop)
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/AAPL"
              state={{
                stockName: "Apple Inc",
                ticker: "AAPL",
              }}
            >
              AAPL (Apple)
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/TSLA"
              state={{
                stockName: "Tesla Inc",
                ticker: "TSLA",
              }}
            >
              TSLA (Tesla)
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/AMC"
              state={{
                stockName: "AMC Entertainment Holdings",
                ticker: "AMC",
              }}
            >
              AMC (AMC)
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/AMZN"
              state={{
                stockName: "Amazon.com Inc",
                ticker: "AMZN",
              }}
            >
              AMZN (Amazon)
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/NVDA"
              state={{
                stockName: "NVIDIA",
                ticker: "NVDA",
              }}
            >
              NVDA (NVIDIA)
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about" className="text-light">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarMenu;
