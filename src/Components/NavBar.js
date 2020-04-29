import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom';

const Styles = styled.div`


  .navbar {
    border-top: 2px solid #9665FF; 
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
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.5em;
    
  }


  .navLinks a {
    color: black;
  }

  .navLinks a:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.5em;

  }

  .nav-link {
    color: black !important;
  }

  .nav-link:hover{
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.5em;

  }

  .navbar-toggler {
    border-color: white;
  }
 
  
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar className="py-4 px-3" expand="lg">
      <Container>
      <Navbar.Brand href="/">FURQUAN AHMAD</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">


        <Nav id="nav-list-style" className="ml-auto navLinks">

          <NavLink className="d-inline p-2" to = "/">Portfolio</NavLink>

            <Nav.Link  rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1xIkkqduMqnDCDkj35yex8qKkD70O6hic/view?usp=sharing">
             Resume
            </Nav.Link>
   
          <Nav.Link rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/furquan-ahmad-2528a44b/">
            LinkedIn
           </Nav.Link>

           <NavLink className="d-inline p-2" to = "/About">About</NavLink>
           <NavLink className="d-inline p-2" to = "/Contact">Contact me</NavLink>
     
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles>
)