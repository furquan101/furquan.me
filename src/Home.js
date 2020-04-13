import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import {BigCard} from './Components/BigCard';
import './App.css';

const Styles = styled.div`



@media only screen and (max-width: 768px) {
    .headerStyling {
        font-size: 8vw !important;
        line-height: 1.2em !important;
        margin-left: 2rem !important;
        margin-right: 2rem !important;
        padding: 0;

    }

   
}

    .headerSpacing {
        padding-top: 3.5rem;
        
    }
    .headerStyling {
        padding: 15px;
        font-size: 3.16vw;
        font-weight: bold;
        line-height: 1.2em;
    }
    `;



export const Home = () => (

<Styles>

<Container className="align-content-center">
<div className = "headerSpacing"/>
 <Row>  
   <Col>
    <h1 className="headerStyling">
    I’m a digital product designer, currently living and
    working in London, UK.
    </h1>
    </Col>
 </Row>

 <Row> 
  <Col>
    <BigCard/>
   </Col>
 </Row>

 <Row> 
  <Col>
    <BigCard/>
   </Col>
 </Row>

 <Row> 
  <Col>
    <BigCard/>
   </Col>
 </Row>


</Container>
</Styles>

)