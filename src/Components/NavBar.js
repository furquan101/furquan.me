import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

.logoStyling .nabarBrand {

    color: coral;
}
  .navbar {
    background-color: #FFFFFF;
    -webkit-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 6px -6px #999;
  }

  .navbar-brand {
    font-weight: bold;
    font-size: 18px;
    color: black;


  }

  .navbar-brand: hover {
    color: #A346FF;
  }



  a, .navbar-nav .nav-link {
    padding-right: 16px;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: black;
    &:hover {
      color: #A346FF;
      text-decoration: none;
    }

    


  }



 
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar className="py-4 px-5"expand="lg">
      <Navbar.Brand href="/">FURQUAN AHMAD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="nav-list-style" className="ml-auto navLinks">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Portfolio</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/CV">Resume</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/CV">LinkedIn</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/About">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/Contact">Contact me</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)