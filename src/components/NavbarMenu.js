import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import companyList from "../companyList";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarMenu = () => {
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
            {companyList.map((c) => {
              return (
                <NavDropdown.Item
                  as={Link}
                  to={c.navName}
                  state={{
                    stockName: c.name,
                    ticker: c.ticker,
                  }}
                >
                  {c.navName}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
          <Nav.Link href="/about" className="text-light">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarMenu;
