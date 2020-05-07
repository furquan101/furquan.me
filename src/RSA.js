import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import fordVehicle from '../src/Components/Assets/Img/Fordpass.png';
import RSAGif from '../src/Components/Assets/Img/RSA.gif';
import UXFlow from '../src/Components/Assets/Img/RSAflow.png'
import Exploration1 from '../src/Components/Assets/Img/Exploration1.png';
import Exploration2 from '../src/Components/Assets/Img/Exploration2.png';
import Userresearch from '../src/Components/Assets/Img/Research.jpg'
import FinalMockup1 from '../src/Components/Assets/Img/RSAGoldIphone.png'
import FinalMockup2 from  '../src/Components/Assets/Img/RSAHand.png'
import FinalMockup3 from  '../src/Components/Assets/Img/DigitalRSA.png'


const Styles = styled.div`

  .projectPicture{
     max-width: 800px;
     max-height: 450px;
     border-radius: 4px;
  }

  .userResearchPicture {
    max-width: 600px;
    max-height: 305px;
    border-radius: 4px;

  }

  .headerCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.9rem;
    font-weight: bold;
    color: black;
    
  }

  .subHeaderCopy{
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: black;
    text-transform: uppercase;
  }

  .bodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 0.95rem;
    line-height: 26px;
    color: #202020;
  }

  .myRoleHeader {
    background-color: #9665FF;

  }

   .myRoleHeaderCopy {
    font-family: Open Sans, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    
  }

  .myRoleBodyCopy {

    text-decoration:none;
    font-family: Open Sans, sans-serif;
    color: white;
    list-style-type: none;
  }

}

 
    `;


export const RSA = () => (

    
<Styles>



<Jumbotron className = "headerJumbotron">
        <div className="mb-5"> </div>
      </Jumbotron>

      <Container>
        <Row className="mt-5">
          <div className="col-md-6 mb-5">
            <h3 className="headerCopy">Project Overview</h3>
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4">When you breakdown in your vehicle, the current RSA (roadside assistance) experience is very analogue. This means customer's are often left unsure when they will recieve help and what's wrong with their vehicle.
            </p> 
            <h5 className="subHeaderCopy"> Goal</h5>
            <p className="bodyCopy mb-4"> The goal of the Digital RSA project was to improve the breakdown experience in Europe by making it live and digital. We would use live data from the modem of the vehicle to achieve this goal. </p>
            <h5 className="subHeaderCopy">The Team</h5>
            <p className="bodyCopy">
            On this project i was working with a UX designer, Product Manager.
            2 Android developers and iOS developers. We partnered with “ARC Europe” who deliver roadside assistance experiences.
            </p>
          </div>
          <div className = "offset-1 col-lg-5 col-md-4">
          <img className = "projectPicture" alt ="roadside assistance app" src={RSAGif} />
          </div>
        </Row>
      </Container>

      <Jumbotron className = "myRoleHeader">
        <div className="py-2">
          <Container>
            <Row>
              <div className="col-md-5">
               <h3 className="myRoleHeaderCopy">My Role</h3>
               <div className="myRoleBodyCopy">
               <p>
                 I led the creation of the visuals for the live recovery map for FordPass on iOS and Android. 
               </p>
               <p> I was responsible for creating the entire end to end UX flow of the Digital RSA experience for Europe.</p>
               <p> I was tasked with working in colloboration with "ARC Europe" the RSA partner to design the end to end digital breakdown experience.
               </p>
               </div>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3 className="myRoleHeaderCopy">What i did</h3>
               <ul className="myRoleBodyCopy">
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

        <Row className="mb-5">
          <div className = "col-md-5">
            <img className = "userResearchPicture" alt ="Furquan conducting user research" src={Userresearch} />
          </div>

          <div className = "offset-md-2 col-md-5">
            <h3>User Research Insights</h3>
            <p>I conducted user research to understand the current breakdown experience, customer pain points and goals.</p>
            <p>Customers find the current breakdown experience frustrating due to the lack of communication and understanding of what's hapenning</p>
            <p>Safety of vehicle is really important for customers, just like Maslow's Hierarchy Of Needs, safety is one of the most important aspects for vehicle ownership.   </p>
            <p>Customers want to make sure they can get back on the road as quick as possible</p>

          </div>
        </Row>

        <Row>
       
        <h3>Mapping the UX Flow</h3>
        <p>I worked directly with our RSA partner ARC to map out how the end to end experience looks like when you breakdown. Depending on whether you have the FordPass app installed and you have data available on your phone you will seek a different experience.  
           The flow maps out what part of the flow “ARC” is handles and what part Ford handles. 
        </p>
        <p>
        Based on our research users told us they usually phone up roadside assistance directly and seek assistance there. 
        I wanted to allow users to continue a flow they’re familiar and enchance it by adding the digital touch. We do this by texting users a magic link after they finish their phone call with the RSA provider. 
        </p>
        <p>
        The magic link takes them to the FordPass app showcasing the live recovery map with realtime status updates on the breakddown experience. The map allows the user to see if an engineer has been assigned to them, how far away the engineer is and estimated time of arrival
        on a "Uber" stlye map.
        </p>
        <img align="center" alt ="roadside assistance app" src={UXFlow} />
        </Row>
     
       <Row>
         <h3>Exploring Designs</h3>
       </Row>

        <Row>
          <img align="center" alt ="roadside assistance app" src={Exploration1} />
        </Row>

        <Row>
          <img align="center" alt ="roadside assistance app" src={Exploration2} />
        </Row>

        <Row>

        <div className="mb-5">
            <h3>Technology and Legal Design Constraints</h3>
            <p>
              I was working with our external partner "ARC" to provide the RSA service, which meant i had to take into consideration the technical constraints they posed as the designs evolved. 
            </p>
            <p>Before you call the RSA provider you have to confirm your details. However after working with our vehicle data engineer we wasn't able to provide the fault code of the car (1A)</p>
            <p> Due to the nature of the personal data we was handling, the legal team wanted us to make it clear to the user we are sending their data to an external partner, so i changed the hierarchy of the screens to fit this in. (1B, 1C).</p>
            <p>
             On the live recovery map we wanted the experience to feel more human, we tried to do this by providing a name and photo of the engineer and vehicle (2A). However due to technical constraints we wasn't able to provide the exact vehicle make and model for the rescue van, and a picture of the engineer. 
             We removed this from the design and used the word "engineer" instead.
             We also wasn't able to provide a direct phone number to call the engineer, however having a number to call the roadside assistance was still very important to include (2B, 2C).
            </p>
          </div>

          </Row>
          <Row>
            <div className="col-md-10">
            <h5>Main insights</h5>
                <ul>
                  <li>To confrom with GDPR users have to allow their data to be sent over to ARC to use the service</li>
                  <li>Users that don't have the FordPass app installed can use this service</li>
                  <li>ARC can provide realtime updates of the van location and status </li>
                  <li>ARC are not able to provide the assigned breakdown engineer's name or phone number</li>
                </ul>
              </div>
         </Row>

         <Row>
           <h3>Final Design</h3>
         </Row>

        <Row className="mb-5">
        <img alt ="Final soloution" src={FinalMockup1} />
        </Row>
        <Row className="mb-5">
        <img alt ="Final soloution" src={FinalMockup2} />
        </Row>
        <Row className="mb-5">
        <img alt ="Final soloution" src={FinalMockup3} />
        </Row>
      </Container>


     
</Styles>

)