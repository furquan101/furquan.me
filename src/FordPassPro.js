import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Button from'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import FPPHeader from '../src/Components/Assets/Img/FPPHeader.jpg';
import FPPPhone from '../src/Components/Assets/Img/FordPassPro.jpg';
import Jumbotron from 'react-bootstrap/Jumbotron';
import FPPCover from '../src/Components/Assets/Img/FPPCover.jpg';



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

`;




export const FordPassPro = () => (

<Styles>

<Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="roadside assistance app" src={FPPHeader} />
        <div className="mb-5"> </div>
</Container-fluid>



<Container>
      <Row>
      <div className = "col-xl-8 mb-1">
        <h1 className="projectTitle">Managing your fleet health and security remotely</h1>
      </div>
      </Row>
        <Row className="mt-5">
          <div className="col-md-5 col-xl-5 mb-5">
            <h3 className="headerCopy">Project Overview</h3>
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4">Small business owners find it difficult to keep track of the servicing, health and security of their vehicles, whilst managing their business. Even though their fleets are a core component in keeping their business running the vehicles are often overlooked.
            </p> 
            <h5 className="subHeaderCopy"> Solution</h5>
            <p className="bodyCopy mb-4"> We wanted to allow fleet managers to manage their health, security and  maintenace of their fleet whilst on the move through a mobile app. The  app release date was pegged to the launch of the new Transit Connect. </p>
            <h5 className="subHeaderCopy">Impact</h5>
            <p className="bodyCopy">
            On this project i was working with 3 UX designers, 3 UI designers.
            10 Android and iOS developers, 2 product managers.
            </p>
          </div>
          <div className = "offset-xl-1 col-xl-6 col-md-7 col-sm-12 col-xs-12">
          <img className = "projectPicture" alt ="roadside assistance app" src={FPPCover} />
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
        <div className="col-12 mb-5">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ic9rSj-ztoo" allowfullscreen></iframe>
        </div>
        </div>
      </Row>
      </Container>

      <Container>
       <Row>
       <div className="col-xl-12 mb-5 mt-5">
        <p className="playlistCopy">Music brings back great memories. To remember my favourite times on FordPass Pro, i made a playlist of my faviourte songs. Put on your headphones, hit play, and read enjoy!</p>
      </div>
        <div className="col-xl-12  mb-5">
        <div class="embed-responsive embed-responsive-21by9">
        <iframe src="https://open.spotify.com/embed/playlist/0PLsYp6gqF3RPMOuq0ag99" width="300" height="380" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        </div>
      </Row>
</Container>


 </Styles>


)

