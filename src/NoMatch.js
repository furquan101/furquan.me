import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import the404Cat from '../src/Components/Assets/Img/404.svg';


const Styles = styled.div`


@media only screen and (max-width: 768px) {
    
    .headerCopy {
        margin-top: 75px !important;
        font-size: 2rem !important;
    }
  
  }

 .headerCopy {
    margin-top: 100px;
    font-family: Open Sans, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 2.3rem;
    line-height: 150%;
    display: flex;
    letter-spacing: 0.01em;
 }


 .catStyling {
     max-width: 95vw;
     max-height: 95vh;
 }

 

`;

export const NoMatch = () => (

<Styles>

<Container>
  <Row>
  <div className = "col-md-8 mx-auto">
   <h1 className="headerCopy mb-2">
    Sorry, Spencer couldn’t find that page.
   </h1>
  </div>
 </Row>
 <Row>
  <div className = "col-md-8 mx-auto">
  <img className = "catStyling" alt ="404 cat" src={the404Cat}/>
  </div>
 </Row>

</Container>
</Styles>
)