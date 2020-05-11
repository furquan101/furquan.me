import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import {BigCard} from './Components/BigCard';
import fordPass from '../src/Components/Assets/Img/Fordpass.png';
import fordLogo from '../src/Components/Assets/Img/FordLogo.svg';
import rsa from '../src/Components/Assets/Img/RSA.jpg';
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
        color: #202020;
        font-family: 'Playfair Display', sans-serif; 
        font-size:  3rem;
        font-weight: 700;
        line-height: 1.2em;
    }
    `;



export const Home = () => (

<Styles>

<Container className="align-content-center">
<div className = "headerSpacing"/>
 <Row>  
   <Col>
    <h1 className="headerStyling mb-2">
    I’m a digital product designer, currently working and
    living in London, UK.
    </h1>
    </Col>
 </Row>


 <Row> 
  <Col className ="mt-5">
  <BigCard 
    imgProjectLogo={fordLogo}
    imgCardLarge={rsa}
    cardTitleName = {"Designing a smart, live, digital breakdown experience."}
    cardBodyText = {"When you breakdown in your vehicle, you are left in the cold about what's going on. We changed this experience to be completley digital in the Digital RSA project."}
    cardLink = {"/RSA"}
    />
   </Col>
 </Row>


 <Row> 
  <Col>
    <BigCard 
    imgProjectLogo={fordLogo}
    imgCardLarge={fordPass}
    cardLink={"/RSA"}
    cardTitleName = {"Putting your live vehicle data into your hands."}
    cardBodyText = {"The FordPass Digital CoPilot project is about displaying live, important vehicle data into the FordPass app for you to view."}
    cardLink = {"/404"}
    />
   </Col>
 </Row>


 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={fordLogo}
    imgCardLarge={fordPass}
    cardTitleName = {"Creating a scaleable delivery network in mega cities"}
    cardBodyText = {"The Last Mile project is a new urban multimodal goods delivery system. We aim to reduce city congestion, improves air quality and drive up productivity of delivery vans. "}
    cardLink = {"/About"}
   />
   </Col>
 </Row>


 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={fordLogo}
    imgCardLarge={fordPass}
    cardTitleName = {"Designing a global pro app from the ground up"}
    cardBodyText = {"Designing a dedicated app for our commercial vehicle customers that own small fleets and businesses."}
    cardLink = {"/Contact"}
    />
   </Col>
 </Row>


</Container>
</Styles>

)