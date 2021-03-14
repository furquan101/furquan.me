import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FPPHeader from '../src/Components/Assets/Img/FPPHeader.jpg';
import FPPPhone from '../src/Components/Assets/Img/FordPassPro.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FPPCover from '../src/Components/Assets/Img/FPPCover.jpg';
import FPPIcons from '../src/Components/Assets/Img/iconlib.jpg';



const Styles = styled.div`


@media only screen and (max-width: 768px) {

  .projectTitle {
    font-family: Open Sans, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: black;
  }

  .playlistCopy{
    font-family: Open Sans, sans-serif;
    font-size: 1.1rem;
    font-weight: black;
    color: black;
  }

}




.projectTitle {
  font-family: Open Sans, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
}


.tagHeader{
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 150%;
  margin-bottom: 12px;
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


.playlistCopy{
  font-family: Open Sans, sans-serif;
  font-size: 1.4rem;
  font-weight: 550;
  color: black;
}

.headerJumbotronImage {
    max-width: 100%; 
    height: auto;
    margin-bottom: 20px;
  }

  .projectPicture {
      max-width: 100%;
      height:
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
  
  .subHeaderListCopy {
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
    font-size: 1.05rem;
    line-height: 26px;
    color: #202020;
  }

  .myRoleHeader {
    background-color: #2E2E2E;
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

  .FPPIcons {
    max-width: 100%;
  }

`;




export const FordPassPro = () => (

<Styles>

<Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="CV Vehicles" src={FPPHeader} />
        <div className="mb-5"> </div>
</Container-fluid>


<Container>
       <Row>
       <div className="col-xl-12">
         <h1 className="tagHeader">FordPass Pro</h1>
        </div>
       <div className="col-xl-12">
       <Button href = "#impact" className = "tagStyling shadow-none" variant="outline-dark">Impact</Button>
       <Button href="#background" className = "tagStyling shadow-none" variant="outline-dark">Background</Button>
       <Button href="#video" className = "tagStyling shadow-none" variant="outline-dark">Video</Button>
       <Button href="https://www.ford.co.uk/commercial-vehicles/discover/innovation/fordpass-pro"className = "tagStyling shadow-none" variant="outline-dark" target="_blank">Product Website</Button>

       </div>
       </Row>
       <hr className = "mt-4 solid"></hr>
  </Container>

<Container>
        <Row className="mt-5">
          <div className="col-md-5 col-xl-5 mb-5">
           <a id="background">
            <h3 className="headerCopy">Project Overview</h3>
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4">Small business owners find it difficult to keep track of the servicing, health and security of their vehicles, whilst managing their business. Even though their fleets are a core component in keeping their business running the vehicles are often overlooked.
            </p> 
            <h5 className="subHeaderCopy"> Solution</h5>
            <p className="bodyCopy mb-4"> We wanted to allow fleet managers to manage their health, security and  maintenace of their fleet whilst on the move through a mobile app. The  app release date was pegged to the launch of the new Transit Connect. </p>
            <a id="impact">
            <h5 className="subHeaderListCopy">Impact</h5>
            <ul className ="subHeaderListBodyCopy">
              <li>Released the app globally to <b>35+ markets</b>.</li>
              <li>App has over <b>1 million+ users</b>.</li>
              <li>Managing small fleets globally <b>1 million+ vehicles</b>.</li>
              <li>Released the app from inception to completion.</li>
            </ul>
          </a>
          </a>
          </div>
          <div className = "offset-xl-1 col-xl-6 col-md-7 col-sm-12 col-xs-12">
          <img className = "projectPicture" alt ="fordpass pro image" src={FPPCover} />
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
                 I led the creation of the visuals for the Account section and Find A Dealer on iOS and Android.
               </p>
               <p> I was responsible for creating the design system for the entire project.</p>
               <p> I created a new set of icons for the app.
               </p>
               <p> I led user interviews and usability tests in Europe. </p>
               </div>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3 className="myRoleHeaderCopy">What I Did</h3>
               <ul className="whatIDidCopy">
                 <li>UI designer</li>
                 <li>UX Research</li>
                 <li>Design System Manager</li>
                 <li>Research coordination</li>
                 <li>Executive presentations to CEO</li>
                 <li>iOS and Android Development and QA support</li>
                 
               </ul> 
              </div>
            </Row>
          </Container>
      </Jumbotron>

      <Container>
      <Row>
        <div className="col-xl-12 mb-5">
        <h1 className="headerCopy">Icon Creation</h1>
        <img className = "mt-3 FPPIcons" alt ="fpp icons" src={FPPIcons} />

        </div>
      </Row>
      <a id="video">
       <Row>
        <div className="col-12 mb-5">
        <h1 className="headerCopy">Video Of FordPass Pro</h1>
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="mt-3 embed-responsive-item" src="https://www.youtube.com/embed/ic9rSj-ztoo" allowfullscreen></iframe>
        </div>
        </div>
      </Row>
      </a>
      </Container>


 </Styles>


)

