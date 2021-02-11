import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { LinkContainer } from 'react-router-bootstrap'
const Styles = styled.div`


@media only screen and (max-width: 768px) {

  .navbar-brand {
    font-family: Playfair Display, sans-serif;
    font-weight: 900;
    font-size: 1.3rem !important;
    letter-spacing: 0.015em;
    color: black;

  }

}
  .navbar {
    border-top: 2px solid #9665FF; 
    background-color: #FFFFFF;
    -webkit-box-shadow: 0 8px 6px -6px #999;
    box-shadow: 0 8px 6px -6px #999;

  }


  .navbar-brand {
    font-family: Playfair Display, sans-serif;
    font-weight: 900;
    font-size: 1.45rem;
    letter-spacing: 0.015em;
    color: black;
    text-decoration: none;

  }

  

  .nav-link {
    color: #202020 !important;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    letter-spacing: 1px;
    font-weight: normal;
    font-size: 0.85rem;
    line-height: 150%;
    text-transform: uppercase;
  
  
  }

  .navbar-toggler {
    border-color: white;
  }

  .navbar-expand-lg .navbar-nav .nav-link {
    padding-left:0px;
    padding-right:0px;
  }
 
  
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect className="py-4 px-3" expand="lg">
      <Container>
      <Navbar.Brand className="hvr-underline-from-left" href="/">Furquan Ahmad</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">


        <Nav id="nav-list-style" className="ml-auto navLinks">
          
          <LinkContainer to = "/"> 
          <Nav.Link className="hvr-underline-from-left mr-4">Portfolio</Nav.Link>
          </LinkContainer>

            <Nav.Link className="hvr-underline-from-left mr-4" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1UpTdtar62IfRxNy-11cjNovRyueqTSnx/view?usp=sharing">
             Resume
            </Nav.Link>
          

           <Nav.Link className="hvr-underline-from-left mr-4" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/furquan-ahmad-2528a44b/">
            LinkedIn
           </Nav.Link>

           <Nav.Link className="hvr-underline-from-left mr-4" rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UC7IIFWV7QjKja6UYjL-z9Cw">
            YouTube
           </Nav.Link>
          

          <LinkContainer to = "/About"> 
           <Nav.Link className="hvr-underline-from-left mr-4">About</Nav.Link>
          </LinkContainer>

          <LinkContainer to = "/Contact"> 
           <Nav.Link className="hvr-underline-from-left mr-4">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles>
)