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

    }
}

    .headerSpacing {
        padding-top: 3.5rem;
        
    }
    .headerStyling {
    
        margin-right: 1em;
        font-size: 3.16vw;
        font-weight: bold;
        line-height: 1.4em;
    }
    `;



export const Home = () => (

<Styles>

<Container fluid>
<div className = "headerSpacing"/>
 <Row className = "align-items-center">  
    <h1 className="ml-5 mr-5 headerStyling">
    I’m a digital product designer, currently living and
    working in London, UK.
    </h1>
 </Row>
</Container>
<BigCard/>
</Styles>

)