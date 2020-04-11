import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';

const Styles = styled.div`

    .headerSpacing {
        padding-top: 3.5em;

    }
    .headerStyling {
        margin-left: 1em;
        margin-right: 1em;
        font-size: 3.25vw;
        font-weight: bold;
    }
    `;



export const Home = () => (

<Styles>

<Container fluid>
<div className = "headerSpacing"/>
 <Row>  
    <h1 className="headerStyling">
    I’m a digital product designer, currently living and
    </h1>
    <h1 className="headerStyling">
        working in London, UK
    </h1>
 </Row>
</Container>

</Styles>

)