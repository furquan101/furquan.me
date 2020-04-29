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
    border-bottom: 2px solid black;
    color: black;
  }


  .nav-link.active {
    coral;
  }
  /**
  .navbar-light .navbar-toggler {
    border: 0;
  }

 
  a, .navbar-nav .nav-item .nav-link {
    padding-right: 16px;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: black;

    &:hover {
      color: #A346FF;
      transition: color .165s ease-in-out, opacity .165s ease-in-out;
      
      
    }  

  }

  **/
  
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