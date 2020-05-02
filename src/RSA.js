import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import fordVehicle from '../src/Components/Assets/Img/Fordpass.png';


const Styles = styled.div`

.headerJumbotron {
  background-image: "../src/Components/Assets/Img/Fordpass.png";
  background-size: cover;
}


  .projectPicture{
     max-width: 800px !important;
     max-height: 400px !important;
  }

}

 
    `;


export const RSA = () => (

    
<Styles>



<Jumbotron className = "headerJumbotron">
        <div className="py-5">
          <Container>
            
          </Container>
        </div>
      </Jumbotron>

      <Container>
        <Row>
          <div className="col-md-6 mb-5">
            <h3 className="mb-3">Creating a realtime digital breakdown experience.</h3>
            <p>When you breakdown in your vehicle, the current RSA (roadside assistance) experience is very analogue. This means customer's are left unsure when they will recieve help and what's wrong with their vehicle.
            </p> 
            <p>In the Digital RSA project we transformed the European RSA experience to allow customers to track the recovery service in real time on a live recovery map which could link to the FordPass app.
            </p> 
            <p>
               We also transformed the experience for the RSA provider so before they leave the 
               garage they have an idea of what service they need to provide to the customer, as we provide real them with real time diagnostics from the vehicle.
            </p>
          </div>
          <div className = "offset-md-2 col-md-4 col-sm-3">
          <img className = "projectPicture" alt ="roadside assistance app" src={fordVehicle} />
          </div>
        </Row>
      </Container>

      <Jumbotron className = "headerJumbotron">
        <div className="py-3">
          <Container>
            <Row>
              <div className="col-md-5">
               <h3>My Role</h3>
               <p> I was tasked with working in colloboration with "ARC" the RSA partner to map out the end to end digital breakdown experience 
                   taking into account all the technical requirements. 
               </p>
               <p> I was responsible for creating the entire end to end UX flow of the Digital RSA experience for Europe.</p>
               <p>
                 I was also leading the creation of the visuals for the live recovery map for the FordPass app on iOS and Android. 
               </p>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3>What i did</h3>
               <ul>
                 <li> Lead UI designer</li>
                 <li>Map out the UX flows</li>
                 <li>Research coordination</li>
                 <li>Executive presentations</li>
                 <li>Fostering relationships and understanding requirements with partners</li>
                 <li>iOS and Android Development support</li>
                 
               </ul> 
              </div>
            </Row>
          </Container>
        </div>
      </Jumbotron>

      <Container>
        <Row>
          <div className="col-md-4">
          <img className = "projectPicture" alt ="roadside assistance app" src={fordVehicle} />
          </div>
          <div className="offset-md-2 col-md-6">
            <h3>Understanding Technical Constraints</h3>
            <p>Before beginning any design work, I brought together PM, research, and engineering leaders together as part of a 5-day sprint. 
              With the goal of agreeing to a unified vision. What we could produce would rely heavily on what data ARC our RSA partner could provide as well as what data we can leverage from the vehicle.
            </p>
            <h5>Main insights</h5>
            <ul>
              <li>To confrom with GDPR users have to allow their data to be sent over to ARC to use the service</li>
              <li>Users that don't have the FordPass app installed can use this service</li>
              <li>ARC can provide realtime updates of the van location and status </li>
              <li>ARC are not able to provide the assigned breakdown engineer's name or phone number</li>
            </ul>
          </div>
        </Row>
      </Container>


     
</Styles>

)