import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import contactPicture from '../src/Components/Assets/Img/ContactMe.png';


const Styles = styled.div`



@media only screen and (max-width: 768px) {
    
    .headerCopyStyle {
        margin-top: 75px !important;
        font-size: 1.8rem !important;
    }

    .bodyCopyStyle {
        font-size: 1.1rem !important;
    }

    .contactPicture {
        max-width: 90vw !important;
        max-height: 55vh !important;
        margin-top: 40px;
    }
  
  }

 .headerCopyStyle {
    margin-top: -20px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #000000;
  

 }

 .bodyCopyStyle {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 150%; 
    letter-spacing: 0.015em;
    color: #000000;
    

 }


 .contactPicture {
     max-width: 55vw;
     max-height: 55vh;
     margin-top: 40px;
 }

 ul {
    padding: 0px;
 }
 ul li{
    display: inline;
  }

 .listStyle a{
    text-decoration: none;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 150%;
    letter-spacing: 0.015em;
    text-transform: uppercase;
    display: inline;
    margin-right: 32px;
    padding: 0px;
    color: #000000;
    
 }

 .listStyle a:hover {
    color: #9665FF;
 }

 .listStyle {
     margin-bottom: 100px;
 }
 

`;

export const Contact = () => (

<Styles>

<Container>
  <Row>
  <div className = "offset-md-8 col-md-4 mx-auto">
  <img className = "contactPicture" alt ="404 cat" src={contactPicture}/>
  </div>
 </Row>
 <Row>
  <div className = "col-md-12 mx-auto">
  <h1 className = "headerCopyStyle"> Contact Furquan <span aria-label="waving hand" role="img">👋</span></h1>
  </div>
 </Row>

 <Row>
  <div className = "col-md-12 mx-auto">
  <p className = "bodyCopyStyle"> 
  Let's open the conversation and see what we could do together. I'm always interested in new ideas, opportunities or
  hearing what you're working on, so drop us a message and say hello.
  </p>
  </div>
 </Row>

 <Row className="mt-2">
  <div className = "col-md-12">
   <ul className="listStyle">
   <li className = "mb-2"><a href="mailto:furquan101@gmail.com">Email me</a></li>    
   <li className = "mb-1"><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/furquan101/">LinkedIn</a></li>
   <li className = "mb-1"><a rel="noopener noreferrer" target="_blank" href="https://twitter.com/furquan101">Twitter</a></li>
   </ul>
  </div>
 </Row>

</Container>
</Styles>
)