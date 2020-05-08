import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LinkContainer } from 'react-router-bootstrap'
import RSAHeader from '../src/Components/Assets/Img/RSAHeader.png'
import RSAGif from '../src/Components/Assets/Img/RSA.gif';
import UXFlow from '../src/Components/Assets/Img/RSAflow.png'
import Exploration1 from '../src/Components/Assets/Img/Exploration1.png';
import Exploration2 from '../src/Components/Assets/Img/Exploration2.png';
import Userresearch from '../src/Components/Assets/Img/Research.jpg'
import FinalMockup1 from '../src/Components/Assets/Img/RSAGoldIphone.png'
import FinalMockup2 from  '../src/Components/Assets/Img/RSAHand.png'
import FinalMockup3 from  '../src/Components/Assets/Img/DigitalRSA.png'


const Styles = styled.div`

@media only screen and (max-width: 768px) {
  .headerCopy {
    font-size: 1.7rem !Important;
  }
  .projectPicture{
    max-height:90vh !important;
    max-width:90vw !important;
    border-radius: 4px;
 }

 .userResearchPicture {
  max-height:95vh !important;
  max-width:100vw !important;
  border-readius:4px;

 }

 .flowProjectPicture {
  max-height:50vh !important;
  max-width:100vw !important;

 }

}

.headerJumbotronImage {
  width: 100%; 
  height: 400px;
  max-height: 20%;
}

  .projectPicture{
     max-height:50vh;
     max-width:50vw;
     border-radius: 4px;
  }

  .flowProjectPicture {
     max-height:100vh;
     max-width:70vw;
     border-radius: 4px;

  }

  .userResearchPicture {
    max-height:100vh;
    max-width:36vw;
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
    font-size: 1.05rem;
    line-height: 26px;
    color: #202020;
  }

  .myRoleHeader {
    background-color: #7A56FF;
    margin-top: 50px;
    margin-bottom: 100px;

  }

   .myRoleHeaderCopy {
    font-family: Open Sans, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    
  }

  .myRoleBodyCopy {
    text-decoration:none;
    font-size: 1.1rem;
    font-family: Open Sans, sans-serif;
    color: white;
    list-style-type: none;
  }

  .whatIDidCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: white;
    list-style-type: disc;
    line-height: 2rem;
    padding-left: 15px;

  }
  
  .researchCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: #202020;

  }

  .researchListCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: #202020;
    list-style-type: disc;
    padding-left: 15px;

  }

  .uxFlowBodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: #202020;

  }

  .explorationImage {

    max-height:100vh;
    max-width:90vw;
    border-radius: 4px;

  }

  .legalBodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: #202020;

  }

  .nextProjectHeader {
    margin-top: 100px;
    background-color: #7A56FF;
    margin-bottom: 0px;
  }

  .nextProjectHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 150%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .nextProjectSubHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2.55rem;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #FFFFFF;
      }

}

 
    `;


export const RSA = () => (

    
<Styles>

      <Container-fluid>
        <img className = "headerJumbotronImage" alt ="roadside assistance app" src={RSAHeader} />
        <div className="mb-5"> </div>
      </Container-fluid>

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
            2 Android and iOS developers. We partnered with “ARC Europe” who deliver roadside assistance experiences.
            </p>
          </div>
          <div className = "offset-md-1 col-lg-5 col-md-4">
          <img className = "projectPicture" alt ="roadside assistance app" src={RSAGif} />
          </div>
        </Row>
      </Container>

      <Jumbotron className = "myRoleHeader">
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
               <ul className="whatIDidCopy">
                 <li> Lead UI designer</li>
                 <li>Map out the UX flows</li>
                 <li>Research coordination</li>
                 <li>Executive presentations</li>
                 <li>Fostering relationships and understanding requirements with partners</li>
                 <li>iOS and Android Development and QA support</li>
                 
               </ul> 
              </div>
            </Row>
          </Container>
      </Jumbotron>

      <Container>

        <Row className="mb-5">
          <div className = "mx-auto col-md-4">
            <img className = "userResearchPicture" alt ="Furquan conducting user research" src={Userresearch} />
          </div>
          <div className = "offset-md-3 col-md-5">
            <h3 className="headerCopy mb-2">User Research Insights</h3>
            <p className="researchCopy mb-4">I conducted user research with vehicle owners in the UK and Germany to understand the current breakdown experience, customer pain points and goals.</p>
            <ul className="researchListCopy">
            <li className="mb-3">The current breakdown experience is "frustrating" due to a lack of communication, transparency and understanding of what's hapenning.</li>
            <li className="mb-3">Customers want to make sure they can get back on the road as quick as possible.</li>
            <li className="mb-3">Safety is really important for customers  just like Maslow's Hierarchy Of Needs.  </li>
            </ul>
          </div>
        </Row>
      

        <Row>
        <div className="col">
          <h3 className="headerCopy mb-3">Mapping the UX Flow</h3>
          <div className="uxFlowBodyCopy">
          <p>I worked directly with our RSA partner ARC to map out how the end to end experience looks like when you breakdown. Depending on whether you have the FordPass app installed and you have data available on your phone you will seek a different experience.  
            The flow also maps out what part of the flow “ARC” is handles and what part Ford handles. 
          </p>
          <p>
          Based on our research users told us they usually phone up roadside assistance directly and seek assistance there. 
          I wanted to allow users to continue a flow they’re familiar and enchance it. We do this by texting users a magic link after they finish their phone call with the RSA provider. 
          </p>
          <p>
          The magic link takes them to the FordPass app showcasing the live recovery map with realtime status updates on the breakddown experience. The map allows the user to see if an engineer has been assigned to them, how far away the engineer is and estimated time of arrival
          on a "Uber" stlye map.
          </p>
          </div>
          </div>
          </Row>

          <Row>
            <div className="col">
            <img className="flowProjectPicture mt-4" align="center" alt ="roadside assistance app" src={UXFlow} />
           </div>
         </Row>
        
     
       <Row>
         <div className="col">
         <h3 className="mt-5 headerCopy">Exploring Design Concepts</h3>
         </div>
       </Row>

        <Row className="mx-auto">
          
          <img  className ="explorationImage" align="center" alt ="roadside assistance app" src={Exploration1} />
        
        </Row>

        <Row className="mx-auto">
         <div className="col">
          <img className ="explorationImage" align="center" alt ="roadside assistance app" src={Exploration2} />
         </div>
        </Row>

        <Row>
        <div className="col">

         <div className="mb-5">
            <h3 className="headerCopy">Legal And Technical Design Challenges</h3>
            <p className="mt-3 legalBodyCopy">
            Working with our external partner "ARC" meant i had to take into consideration the technical constraints from both Ford and ARC as the designs evolved.
            </p>
            <h5 className="mt-5 subHeaderCopy">No personal information DISPLAYED</h5>
            <p className="legalBodyCopy">
            On the live recovery map we wanted the experience to feel more human, we tried to do this by providing a name and photo of the engineer and vehicle (2A). 
            However due to technical constraints we wasn't able to fetch this data from “ARC”. This meant we couldn't provide the exact vehicle make and model for the rescue van, and the name and picture of the engineer. 
            </p>
            <p className="legalBodyCopy">
            We removed this from the design and used the word "engineer" instead. We also wasn't able to provide a direct phone number to call the engineer, however having a number to call the roadside assistance was still very important to include (2B, 2C).
            </p>
            <h5 className="mt-5 subHeaderCopy">GDPR and sending personal data</h5>
            <p className="legalBodyCopy">
             To get the best breakdown experience possible we send over the fault code of the vehicle to the RSA provider and the location of the vehicle. This allows the RSA company to assist users in the best way possible if they already know the problem with your vehicle before they leave the garage. 
            </p>
            <p className="legalBodyCopy">The legal team wanted us to make it clear to the user we are sending their data to an external partner, so i changed the hierarchy of the screens to fit this in and making the user understand sending over their data is going to get them a faster recovery experience. (1B, 1C).</p>
            <h5 className="mt-5 subHeaderCopy">Gathering vehicle data</h5>
            <p className="legalBodyCopy">Before you call the RSA provider you have to confirm details about your vehicle. We thought displaying the vehicle error would be useful so the user has more tranparency of what's hapenning.
             However after working with our vehicle data engineer we wasn't able to provide the fault code of the car (1A)</p>
          </div>
          </div>
          </Row>
      

         <Row>
           <h3 className="headerCopy mb-3">Refinement</h3>
           <p className="legalBodyCopy">When creating the final soloution we wanted to bring the designs more in brand and consistent with the FordPass app. To do this on the live recovery map we made the card consistent with the ones found on the “Find” map. 
           </p>
           <p className="legalBodyCopy"> 
              The cards are smaller and found on the bottom of the map making them easy for the user to interact with and continue the flow. 
              This also helped a lot with the hierarchy of the screen, making it a lot easier to see the recovery map.
          </p>
         </Row>
         <Row>
         <h3 className="headerCopy mt-5 mb-3">Final Soloution</h3>
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

      <Jumbotron className="nextProjectHeader">
        <Container>
            <Row>
            
            <div className="col-lg-6 md-12">
              <h3 className ="nextProjectHeaderCopy">Next Project</h3>
              </div>
            </Row>
                <Row>
                <div className="col-lg-6 col-12">
                    <p className="nextProjectSubHeaderCopy">FordPass Pro</p>
                </div>
                </Row> 
                <Row>
                <div className="col-lg-6 col-12">
                    <LinkContainer to = "/About"> 
                    <Button className = "buttonStyling" variant="outline-light">View Project</Button>
                    </LinkContainer>
                </div>
                </Row>
        </Container>
        </Jumbotron>


     
</Styles>

)