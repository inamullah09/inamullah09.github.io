import React from 'react'
import './navbar.css'
import logo from '../../assets/logo_white.png'
import canadaLogo from '../../assets/canada-flag-icon-64.png'
// import '../../_custom.scss';
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
const KWNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="150"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <p className="kw-logo-text d-none d-lg-block">
                LOCALLY OWNED AND OPERATED
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home">Browse</Nav.Link>
            <Nav.Link href="#features">Students</Nav.Link>
            <Nav.Link href="#pricing">Commercial</Nav.Link>
            <Nav.Link href="#pricing">Showings</Nav.Link>
            <Nav.Link href="#pricing">Meet The Team</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="#pricing">Landlords</Nav.Link>
            <Nav.Link href="#pricing">Tanents</Nav.Link>
            <button className='kw-round-btn'>Secondary</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default KWNavbar