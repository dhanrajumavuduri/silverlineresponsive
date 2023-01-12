// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="https://res.cloudinary.com/ccbp-learn/image/upload/v1673525173/Screenshot_290_x9fdiy.png"
            className="silverlineimage"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="dhanraju" href="#Home" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="dhanraju1" href="#About" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link
              className="dhanraju1"
              href="#Features"
              as={Link}
              to="/features"
            >
              Features
            </Nav.Link>
            <Nav.Link
              className="dhanraju1"
              href="#WhitePaper"
              as={Link}
              to="/whitepaper"
            >
              WhitePaper
            </Nav.Link>
            <Nav.Link
              className="dhanraju1"
              href="#AuditReport"
              as={Link}
              to="/auditreport"
            >
              AuditReport
            </Nav.Link>
            <Nav.Link
              className="dhanraju1"
              href="#Tokenomics"
              as={Link}
              to="/tokenomics"
            >
              Tokenomics
            </Nav.Link>
            <Nav.Link className="dhanraju1" href="#Team" as={Link} to="/team">
              Team
            </Nav.Link>
            <Nav.Link className="dhanraju1" href="#Faq" as={Link} to="/faq">
              Faq
            </Nav.Link>
            <Nav.Link className="dhanraju1" href="#Blog" as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BasicExample
