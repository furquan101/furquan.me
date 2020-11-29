import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import {BigCard} from './Components/BigCard';
import fordPass from '../src/Components/Assets/Img/Fordpass.jpg';
import FordPassCoPilot from '../src/Components/Assets/Img/FordPassCoPilot.jpg';
import FPPCover from '../src/Components/Assets/Img/FPPCover.jpg';
import fordLogo from '../src/Components/Assets/Img/FordLogo.svg';
import FPPLogo from '../src/Components/Assets/Img/FPPLogo.svg';
import rsa from '../src/Components/Assets/Img/RSA.jpg';
import Journeys from '../src/Components/Assets/Img/Journeys.jpg';
import LMD from '../src/Components/Assets/Img/LMD.jpg';
import LMDLogo from '../src/Components/Assets/Img/LMDLogo.svg';
import FPPBuilder from  '../src/Components/Assets/Img/FPPBuilder.jpg';
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
    cardBodyText = {"Last Mile Delivery is a new urban multi modal delivery network made by Ford Mobility. We aim to reduce city congestion, improve air quality and drive up productivity of delivery vans."}
    cardLink = {"/LMD"}
   />
   </Col>
 </Row>

 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={fordLogo}
    imgCardLarge={fordPass}
    cardTitleName = {"Designing a smart, live, digital breakdown experience."}
    cardBodyText = {"When you break down in your vehicle, your left in the cold about  what's going on. We changed this static experience to be completely digital in the Digital RSA project."}
    cardLink = {"/RSA"}
    />
   </Col>
 </Row>

 <Row> 
  <Col>
  <BigCard 
    imgProjectLogo={FPPLogo}
    imgCardLarge= {FPPBuilder}
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
    imgCardLarge={Journeys}
    cardLink={"/RSA"}
    cardTitleName = {"Putting your live vehicle data into your hands."}
    cardBodyText = {"The FordPass Digital CoPilot project was about increasing user engagement on the app using live vehicle data. We designed new features such as  journey histories, fuel reports and mileage milestones. The features increased monthly engagement by 135%."}
    cardLink = {"/404"}
    />
   </Col>
 </Row>



 


</Container>
</Styles>

)