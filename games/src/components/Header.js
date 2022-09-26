import React from "react";
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';
// import app from "../App.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBoxesStacked,
  faAddressCard,
  faHandshake,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <div className="backgoundnavbar">
      <Navbar className="sticky-top " expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" style={{ color: "white" }}>
            Games
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="alightNan">
            <Nav className="m-auto   my-2 my-lg-0 " navbarScroll>
              <Nav.Link href="#action1" style={{ color: "white" }}>
                <FontAwesomeIcon
                  icon={faHouse}
                  style={{ color: "pink", paddingRight: "5px" }}
                />{" "}
                Home
              </Nav.Link>
              <Nav.Link href="#action1" style={{ color: "white" }}>
                <FontAwesomeIcon
                  icon={faAddressCard}
                  style={{ color: "pink", paddingRight: "10px" }}
                />
                About
              </Nav.Link>
              <Nav.Link href="#action1" style={{ color: "white" }}>
                <FontAwesomeIcon
                  icon={faBoxesStacked}
                  style={{ color: "pink", paddingRight: "5px" }}
                />{" "}
                Products
              </Nav.Link>
              <Nav.Link href="#action1" style={{ color: "white" }}>
                <FontAwesomeIcon
                  icon={faHandshake}
                  style={{ color: "pink", paddingRight: "5px" }}
                />{" "}
                Contect
              </Nav.Link>
              <Nav.Link style={{ color: "white" }}>
                <Link
                  to="/Signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ color: "pink", paddingRight: "5px" }}
                  />
                  Sign up
                </Link>
              </Nav.Link>
              <Nav.Link style={{ color: "white" }}>
                <Link
                  to="/Login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    // <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                    style={{ color: "pink", paddingRight: "5px" }}
                  />{" "}
                  Log in
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
