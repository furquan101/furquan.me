import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { LinkContainer } from 'react-router-bootstrap';
import RSAHeader from '../src/Components/Assets/Img/RSAHeader.jpg';
import RSAGif from '../src/Components/Assets/Img/RSA.gif';
import UXFlow from '../src/Components/Assets/Img/RSAflow.png'
import CallingRSA1 from '../src/Components/Assets/Img/CallingRSA1.jpg';
import CallingRSA2 from '../src/Components/Assets/Img/CallingRSA2.jpg';
import CallingRSA3 from '../src/Components/Assets/Img/CallingRSA3.jpg';
import RecoveryRSAMap1 from '../src/Components/Assets/Img/RecoveryRSAMap1.jpg';
import RecoveryRSAMap2 from '../src/Components/Assets/Img/RecoveryRSAMap2.jpg';
import RecoveryRSAMap3 from '../src/Components/Assets/Img/RecoveryRSAMap3.jpg';
import Userresearch from '../src/Components/Assets/Img/Research.jpg';
import FinalMockup1 from '../src/Components/Assets/Img/DigitalRSA.png';
import FinalMockup2 from  '../src/Components/Assets/Img/RSAHand.png';
import FinalMockup3 from  '../src/Components/Assets/Img/RSAGoldIphone.png';
import DigitalRSAUsers from  '../src/Components/Assets/Img/DigitalRSAUsers.gif';


const Styles = styled.div`

@media only screen and (max-width: 768px) {

  .tagHeader {
    font-size: 34px !important;
  }

  .tagStyling {
    margin-top: 8px;
  }
  .headerCopy {
    font-size: 1.7rem !Important;
  }

  
  .headerCopy {
    font-size: 1.5rem !important;
    
  }

  .subHeaderCopy{
    font-size: 1rem !important;
  }

  .bodyCopy {
    font-size: 0.98rem !important;
  }
    


 .myRoleHeaderCopy {
   font-size: 1.5rem !important;
 }

 .myRoleBodyCopy {
   font-size: 0.98rem !Important;
 }

 .whatIDidCopy {
  font-size: 0.98rem !Important;
 }

 .researchCopy {
  font-size: 0.98rem !Important;
 }

 .researchListCopy {
  font-size: 0.98rem!Important;
 }

 .uxFlowBodyCopy {
  font-size: 0.98rem !Important;w
 }

 .legalBodyCopy {
  font-size: 0.98rem!Important;
 }

 .takeawayHeaderCopy {
  font-size: 1.5rem !Important;
 }

 .headerJumbotronImage{
  height: auto !Important;
  margin-bottom: 0px!important;
}

 .userResearchPicture {
  height:auto;
  max-width:100% !important;
  border-readius:4px;

 }

 .myRoleHeader {
   margin-bottom: 50px!Important;
 }

 .projectPicture{
  height:auto !important;
  width:100% !important;
  border-radius: 4px;
}

 .flowProjectPicture {
  max-height:50vh !important;
  max-width:82vw !important;

 }

 .callingRSAImage {
  height:auto !important;
  width:100% !important;
  border-radius: 4px;

}

 .finalSoloutionImage {
  height:auto !important;
  max-width:100% !important;

 }

 .nextProjectSubHeaderCopy {
   font-size: 1.9rem !Important;
 }

}




.headerJumbotronImage {
  max-width: 100%; 
  height: auto;
  margin-bottom: 20px;
}

  .projectPicture{
     max-height: 340px;
     max-width:100%;
     border-radius: 4px;
  }

  .tagHeader{
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 150%;
    margin-bottom: 20px;
    color: black;
  }

  .tagStyling {
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: black;
    margin-right: 12px;
    border-color: black;
    border-width: 1.5px;
  }

  .tagStyling:hover {
    background-color: white;
    font-weight: 600;
    color:#5D12FF;
    border-color: #5D12FF;
    transition: 0.2s ease-in;
  }

  .tagStyling:focus {
    color: white !important;
    background-color: #5D12FF!important;
    border-color: none !important;
    border-width: 1.5px !important;
    font-weight: 600;
  }



  .flowProjectPicture {
     height:auto;
     max-width:100%;
     border-radius: 4px;

  }

  .userResearchPicture {
    height:auto;
    max-width:100%;
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
    font-size: 1.15rem;
    font-weight: 700;
    color: black;
    text-transform: uppercase;
  }

  .subHeaderListBodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.06rem;
    color: black;
    list-style-type: disc;
    line-height: 2rem;
    padding-left: 15px;
  }

  .bodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.06rem;
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
    font-size: 1.05rem;
    color: #202020;

  }

  .researchListCopy {
    font-family: Open Sans, sans-serif;
    font-size: 0.95rem;
    color: #202020;
    list-style-type: disc;
    padding-left: 15px;

  }

  .uxFlowBodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: #202020;

  }

  .uxFlowListStyle {
    padding-left: 15px;
  }

  .callingRSAImage {
    height: auto;
    width: 100%;
    border-radius: 4px;

  }

  .explorationImage {

    max-height:100vh;
    max-width:70vw;
    border-radius: 4px;

  }

  .legalBodyCopy {
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    color: #202020;
  }

  .legalListStyle {
    padding-left: 15px;
  }

  .finalSoloutionImage {
    height: auto;
    max-width:100%;
    border-radius: 4px;
  }

  .takeawayJumbotron {
    background-color: #F7F7F7;
    margin-top: 50px;
  }

  .takeawayHeaderCopy {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 150%;
  
  }

  .takeawayLine {
    border-top: 2px solid;
    color: black;
  }

  .takeawayListStyle {
    padding-left: 15px;
  }

  .takeawayListText {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    letter-spacing: 0.015em;
    color: #000000;

  }

  .nextProjectHeader {
    margin-top: 50px;
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

    .mt-6 {
      margin-top: 60px;
    }
    .mt-8 {
      margin-top: 80px;
    }

}

 
    `;


export const RSA = () => (

    
<Styles>

      <Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="roadside assistance app" src={RSAHeader} />
        <div className="mb-5"> </div>
      </Container-fluid>
    

     <Container>
       <Row>
       <div className="col-xl-12">
         <h1 className="tagHeader">FordPass Digital RSA</h1>
        </div>
       <div className="col-xl-12">
       <Button href = "#impact" className = "tagStyling shadow-none" variant="outline-dark">Impact</Button>
       <Button href="#wireframes" className = "tagStyling shadow-none" variant="outline-dark">Wireframes</Button>
       <Button href="#research" className = "tagStyling shadow-none" variant="outline-dark">User Research</Button>
       <Button href="#finalsoloution"className = "tagStyling shadow-none" variant="outline-dark">Final Soloution</Button>
       <Button href="https://www.ford.co.uk/owner/owner-services/fordpass"className = "tagStyling shadow-none" variant="outline-dark" target="_blank">FordPass Website</Button>

       </div>
       </Row>
       <hr className = "mt-4 solid"></hr>
     </Container>

      <Container>
        <Row className="mt-5">
          <div className="col-md-5 col-xl-6 mb-5">
            <h3 className="headerCopy">Project Overview</h3>
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4">When you breakdown in your vehicle, the current RSA (roadside assistance) experience is very analogue. This means customer's are often left unsure when they will recieve help and what's wrong with their vehicle.
            </p> 
            <h5 className="subHeaderCopy"> Solution</h5>
            <p className="bodyCopy mb-4"> The goal of the Digital RSA project was to improve the breakdown experience in Europe by making it live, dynamic and digital. We used live data from the modem of the vehicle and added the feature to the FordPass app.  </p>
            <h5 className="subHeaderCopy">Impact</h5>
            <ul className ="subHeaderListBodyCopy">
            <li>Digital RSA has helped with breakdowns for <b>2000+ customers</b>. </li>
             <li> Digital RSA has been rolled out globally to <b>30+ countries</b>.</li>
              <li>Customer satisfaction for roadside assistance increased by <b>1.2X</b>.</li>
              <li>FordPass is being used globally by over <b>9 million+ customers</b>.</li>
            </ul>
          </div>
          <div className = "offset-xl-1 col-xl-5 col-md-7 col-sm-12 col-xs-12">
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
               <h3 className="myRoleHeaderCopy">What I Did</h3>
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
        <a id = "research">
        <Row className="mb-5">
          <div className = "col-md-12 col-lg-7 col-xl-7 ">
            <img className = "mb-4 userResearchPicture" alt ="Furquan conducting user research" src={Userresearch} />
          </div>
          <div className = "col-lg-5 col-xl-5">
            <h3 className="headerCopy mb-3">User Research Insights</h3>
            <p className="researchCopy mb-4">I conducted user interviews with vehicle owners in the UK and Germany to understand customer pain points and goals.</p>
            <h5>Key Insights</h5>
            <ul className="researchListCopy">
            <li className="mb-3">Customers find the breakdown experience "frustrating" due to a lack of communication, transparency and understanding of what's hapenning.</li>
            <li className="mb-3">Customers want to make sure they can get back on the road as quick as possible.</li>
            <li className="mb-3">Safety is really important for customers  just like Maslow's Hierarchy Of Needs.  </li>
            </ul>
          </div>
        </Row>
      </a>

        <Row>
        <div className="col">
          <h3 className="mt-3 headerCopy mb-3">Mapping the UX Flow</h3>
          <div className="uxFlowBodyCopy">
          <p>I worked directly with our RSA partner ARC to map the end to end experience when you breakdown. Depending on whether you have the FordPass app installed and you have internet available on your phone you will seek a different experience.  
          </p>
          <ul className="uxFlowListStyle">
          <li className="mt-3">
            Based on our research users told us they usually phone up roadside assistance directly and seek assistance there. 
          </li>
          <li className="mt-3">
            To allow users to continue a flow they’re familiar we text users a magic link after they finish their phone call with the RSA provider. 
          </li>
          <li className="mt-3">
           The magic link we send takes users to the FordPass app showcasing the live recovery map with realtime status updates on the breakdown experience. 
          </li>
          <li className="mt-3">
           The map allows the user to see if an engineer has been assigned to them, how far away the engineer is and estimated time of arrival
           on a "Uber" stlye map.
          </li>
          </ul>
          </div>
          </div>
          </Row>

          <Row>
           <div className="col">
            <img loading="lazy" className="flowProjectPicture mt-4" align="center" alt ="roadside assistance app" src={UXFlow} />
           </div>
         </Row>
        
      <a id ="wireframes">
       <Row>
         <div className="col">
         <h3 className="mt-8 headerCopy">Exploring Design Concepts</h3>
         </div>
       </Row>

       <Row>
       <div className="col mt-4 subHeaderCopy">
        <h5>Calling Roadside Assistance Exploration:</h5>
       </div>
       </Row>

       <Row className="mx-auto">
         <div className="col-lg-4">
          <img loading="lazy" className ="callingRSAImage"  alt ="roadside assistance app" src={CallingRSA1} />
          </div>
          <div className="col-lg-4">
          <img loading="lazy"  className ="callingRSAImage" alt ="roadside assistance app" src={CallingRSA2} />
          </div>
          <div className="col-lg-4">
          <img loading="lazy" className ="callingRSAImage" alt ="roadside assistance app" src={CallingRSA3} />
          </div>
        </Row>

        <Row>
       <div className="col mt-4 subHeaderCopy">
        <h5>Live Recovery Map Exploration:</h5>
       </div>
       </Row>

       <Row className="mx-auto">
         <div className="col-lg-4">
          <img loading="lazy"  className ="callingRSAImage"  alt ="roadside assistance app" src={RecoveryRSAMap1} />
          </div>
          <div className="col-lg-4">
          <img loading="lazy"  className ="callingRSAImage" alt ="roadside assistance app" src={RecoveryRSAMap2} />
          </div>
          <div className="col-lg-4">
          <img loading="lazy" className ="callingRSAImage" alt ="roadside assistance app" src={RecoveryRSAMap3} />
          </div>
        </Row>
        </a>

      

        <Row>
        <div className="col">
         <div className="mb-5">
            <h3 className="mt-8 headerCopy">Legal And Technical Design Challenges</h3>
            <h5 className="mt-5 subHeaderCopy">No personal information displayed (Legal)</h5>
            <ul className="legalListStyle">
            <li className="legalBodyCopy mt-3">
            On the live recovery map we wanted the experience to feel more human, we tried to do this by providing a name and photo of the engineer and vehicle (2A). 
           </li>
           <li className="legalBodyCopy mt-3">
            Due to technical constraints we wasn't able to fetch certain data from “ARC”. 
            We couldn't provide the exact vehicle make and model for the rescue van the name, picture and phone number of the engineer. 
          </li>
          <li className="legalBodyCopy mt-3">
            I removed this from the design and used the word "engineer" instead. 
            We also wasn't able to provide a direct phone number to call the engineer, however having a number to call the roadside assistance was still very important to include (2B, 2C).
          </li>
          </ul>
            <h5 className="mt-5 subHeaderCopy">GDPR and sending personal data (Legal)</h5>
          <ul className="legalListStyle">
            <li className="legalBodyCopy mt-3">
             To get the best breakdown experience possible we send over the fault code of the vehicle to the RSA provider and the location of the vehicle. This allows the RSA company to assist users in the best way possible if they already know the problem with your vehicle before they leave the garage. 
            </li>
            <li className="legalBodyCopy mt-3">The legal team wanted us to make it clear to the user we are sending their data to an external partner, so i changed the hierarchy of the screens to fit this in and making the user understand sending over their data is going to get them a faster recovery experience. (1B, 1C).
            </li>
          </ul>
            <h5 className="mt-5 subHeaderCopy">Gathering vehicle data (Technical)</h5>
          <ul className="legalListStyle">
            <li className="legalBodyCopy mt-3">Before you call the RSA provider you have to confirm details about your vehicle. We thought displaying the vehicle error would be useful so the user has more transparency of what's hapenning.
             However after working with our vehicle data engineer we wasn't able to provide the fault code of the car (1A).
            </li>
          </ul>
          </div>
          </div>
          </Row>
          <a id ="finalsoloution">
         <Row>
          <div className="col">
           <h3 className="headerCopy mt-4 mb-4">Final Solution</h3>
           <p className="legalBodyCopy">When creating the final solution we wanted to bring the designs more in brand and consistent with the FordPass app. To do this on the live recovery map we made the card consistent with the ones found on the “Find” map. 
           </p>
           <p className="legalBodyCopy"> 
              The cards are smaller and found on the bottom of the map making them easy for the user to interact with and continue the flow. 
              This also helped a lot with the hierarchy of the screen, making it a lot easier to see the recovery map.
          </p>

         </div>
         </Row>
        <Row className="mb-5">
         <div className="col">
         <img loading="lazy" className="finalSoloutionImage" alt ="Final soloution" src={FinalMockup1} />
         </div>
        </Row>
        <Row className="mb-5">
         <div className="col">
         <img loading="lazy" className="finalSoloutionImage" alt ="Final soloution" src={FinalMockup2} />
         </div>
        </Row>
        <Row className="mb-5">
         <div className="col">
         <img loading="lazy" className="finalSoloutionImage" alt ="Final soloution" src={FinalMockup3} />
         </div>
        </Row>
        
        <Row>
        <div className="col-12 mb-5">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/3EW41viWZfw" allowfullscreen></iframe>
        </div>
        </div>
      </Row>
      </a>
      <a id="impact">
      <Row>
          <div className="col">
           <h3 className="headerCopy mt-5 mb-3">Showcasing Impact</h3>
           <p className="legalBodyCopy">Upon release of the Digital RSA project in Europe, user growth has picked up signficantly and is only growing faster with more FordPass users being added daily on the app.
           </p>
         </div>
         </Row>
         <Row className="mb-5">
         <div className="col-12">
         <img loading="lazy" className="finalSoloutionImage" alt ="Final soloution" src={DigitalRSAUsers} />
         </div>
         </Row>
       </a> 
      </Container>

      <Jumbotron className="takeawayJumbotron">
        <Container>
            <Row>
            
            <div className="col-lg-6 md-12">
              <h3 className ="takeawayHeaderCopy">My Key Takeaways</h3>
              </div>
            </Row>
                <Row>
                  <div className="col-lg-4 col-md-4">
                     <hr className="takeawayLine mt-2 mb-4"></hr>
                  </div>
                </Row>
                <Row>
                <div className="col-lg-8 col-12">
                  <ul className="takeawayListStyle">
                    <li className="takeawayListText mt-2">When you breakdown it’s not a homogenous experience for everyone, so focusing on improving one common area of the breakdown experience worked out really well.
                    </li>
                    <li className="takeawayListText mt-3">I would like to make data driven design decisions to understand how customers are engaging with RSA providers when they breakdown.
                    </li>
                    <li className="takeawayListText mt-3">Working closely with the development team and the RSA partner from the start of the project helped me understand what we could acheive to design a live breakdown experience.
                    </li>
                  </ul>
                </div>
                </Row> 
        </Container>
        </Jumbotron>

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
                <div className="col-12">
                    <LinkContainer to = "/FordPassPro"> 
                    <Button className = "buttonStyling" variant="outline-light">View Project</Button>
                    </LinkContainer>
                </div>
                </Row>
        </Container>
        </Jumbotron>


     
</Styles>

)