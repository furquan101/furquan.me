import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import {BigCard} from './Components/BigCard';
import fordPass from '../src/Components/Assets/Img/Fordpass.jpg';
import fordLogo from '../src/Components/Assets/Img/FordLogo.svg';
import FPPLogo from '../src/Components/Assets/Img/FPPLogo.svg';
import rsa from '../src/Components/Assets/Img/RSA.jpg';
import LMD from '../src/Components/Assets/Img/LMD.jpg';
import LMDLogo from '../src/Components/Assets/Img/LMDLogo.svg';
import FordTransitDark from  '../src/Components/Assets/Img/FordTransitDark.jpg';
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
    I’m a digital product designer, inspired by accessibility, culture and community.
    </h1>
    </Col>
 </Row>

 <Row> 
  <Col className ="mt-5">
  <BigCard 
    imgProjectLogo={LMDLogo}
    imgCardLarge={LMD}
    cardTitleName = {"Creating a profitable delivery network in megacities"}
    cardBodyText = {"The Last Mile Delivery project is a new urban multimodal goods delivery system. We aim to reduce city congestion, improves air quality and drive up productivity of delivery vans. "}
    cardLink = {"/LMD"}
   />
   </Col>
 </Row>

 <Row> 
  <Col>
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
    imgProjectLogo={FPPLogo}
    imgCardLarge={FordTransitDark}
    cardTitleName = {"Managing your fleet health and security remotely."}
    cardBodyText = {"The FordPass Pro project is about helping fleet managers to manage the health and maintenace of their Ford vehicles on the move. Allowing them to be more proactive when it comes to vehicle maintenace."}
    cardLink = {"/FordPassPro"}
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



 


</Container>
</Styles>

)