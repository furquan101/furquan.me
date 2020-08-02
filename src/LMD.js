import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LMDPorter from '../src/Components/Assets/Img/LMDPorter.png';
import LMDHeader from '../src/Components/Assets/Img/LMDHeader.jpg'
import LMDMultiModal from '../src/Components/Assets/Img/MultiModal.png'
import LMDPersona from '../src/Components/Assets/Img/LMDPersona.png'
import Jumbotron from 'react-bootstrap/Jumbotron';


const Styles = styled.div`

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
  font-weight: 600;
  color: black;
  text-transform: uppercase;
}

.bodyCopy {
  font-family: Open Sans, sans-serif;
  font-size: 1.08rem;
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

.projectBackgroundHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 28px;
  color: black;
}

.projectBackgroundSubHeader {
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 28px;
/* or 140% */

}

.projectBackgroundBody {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.15rem;
  line-height: 24px;
  /* or 120% */
  color: #202020;
  }
   

`;

export const LMD = () => (

<Styles>

<Container-fluid>
        <img className = "headerJumbotronImage" 
        alt ="last mile delivery in action" src={LMDHeader} />
        <div className="mb-5"> </div>
</Container-fluid>

<Container>
        <Row className="mt-5">
          <div className="col-md-5 col-xl-5 mb-5">
            <h3 className="headerCopy">Project Overview</h3>
            <h5 className="mt-4 subHeaderCopy">Problem</h5>
            <p className="bodyCopy mb-4">Porters delivering parcels around the city need a way to understand what deliveries and collections they need to carry out whilst on the move so that they can drop off parcels and complete their job.
            </p> 
            <h5 className="subHeaderCopy"> Goal</h5>
            <p className="bodyCopy mb-4"> The goal of the project was to design a mobile app for porters to allow them to see their deliveries and collections for the day. The project had a limited budget which meant we had to start delivering parcels as soon as possible to start earning revenue. </p>
            <h5 className="subHeaderCopy">The Team</h5>
            <p className="bodyCopy">
            On this project i was the <b>design lead </b>. I was working with 1 UX designer 1 UI designer and 2 iOS developers, 2 product managers.
            </p>
          </div>
          <div className = "offset-xl-1 col-xl-6 col-md-7 col-sm-12 col-xs-12">
          <img className = "projectPicture" alt ="roadside assistance app" src={LMDPorter} />
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
               Since 2019 I've been leading a team of product designers responsible for designing, realising the vision and scaling for the Last Mile Delivery project.
               </p>
               <p> Our team works with partners and stakeholders across the globe and of every discipline.</p>
               </div>
              </div>
              <div className="offset-md-2 col-md-5">
               <h3 className="myRoleHeaderCopy">What I Did</h3>
               <ul className="whatIDidCopy">
                 <li>Lead the product vision and strategy </li>
                 <li>Lead the visual design for the entire iOS app. </li>
                 <li>Design System Manager</li>
                 <li>Research coordination</li>
                 <li>Executive presentations to CEO</li>
                 <li>Establishing and documenting patterns and best practices</li>
                 
               </ul> 
              </div>
            </Row>
          </Container>
      </Jumbotron>

<Container>
  <Row>
  <div className="col-12">
    <h1 className ="projectBackgroundHeader">Last Mile Delivery Background</h1>
    <h5 className="mt-5 projectBackgroundSubHeader">Congestion In Cities Is Getting Worse</h5>
    <p className="projectBackgroundBody">Congestion in mega cities is getting worse every year. This results in an increase in journey times and worsening air polloution in the city.
       90% of road space in London is taken up for transporting goods.
    </p>
    <h5 className="mt-4 projectBackgroundSubHeader">A new way of delivering parcels</h5>
    <p className="projectBackgroundBody">The Last Mile Delivery (LMD) project aims to help ease congestion off the roads and save the envionment by delivering parcels with a innovative multi modal solution. 
    We do this breaking down the journey of a parcel in the last mile using pedestrian porters and cyclists teamed up with vans.
    </p>
    <h5 className="mt-4 projectBackgroundSubHeader">Multi Modal Delivery explained </h5>
    <p className="projectBackgroundBody">Traditionally parcels are delivered using one van and one driver. 
    The LMD multi modal soloution allows you to deliver parcels with one van with multiple porters and cyclists sharing the <b>same</b> van.
    </p>
    <p className="projectBackgroundBody">This allows us to increase delivery efficiency and take more delivery vans off the road. This helps reduce  congestion in cities and improve air pollution.
    </p>
  </div>
  </Row>
  
  <Row>
  <div className="col-12">
  <img className = "mt-5 headerJumbotronImage" alt ="last mile delivery in action" src={LMDMultiModal} />
  </div>
  </Row>
</Container>


<Container>
  <Row>
    <div className="col-12 mt-5">
    <h2>Field Research</h2>
    </div>
    </Row>
    <Row>
    <div className="col-xl-6 mb-5 mt-3">
      <h4>Building empathy with our users</h4>
      <p>It’s important as a designer to build empathy with our end users. By experiencing the delivery process first hand by becoming a porter allowed me to do this and understand the pain points. 
      </p>
      <h4>Key Porter Pain Points</h4>
    </div>
    <div className="col-xl-6 mb-5">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kaArF7nRKbQ" allowfullscreen></iframe>
        </div>
    </div>
    </Row>
    <Row>
    <div className="col-12">
    <h2>LMD Porter Persona</h2>
    </div>
    <div className="col-12">
    <img className = "mt-2 headerJumbotronImage" alt ="last mile delivery in action" src={LMDPersona} />
    </div>
  </Row>
  </Container>

      


<Container>
<Row>
  <div className="col-12 mt-3">
  <h1>Prototype</h1>
  </div>
  </Row>
  <Row>
    <div className="col-12 mt-3">
    <div class="embed-responsive embed-responsive-16by9">
    <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlTMQsZWUR7Y57FRPdkBx2g%2FLMD-work%3Fnode-id%3D5%253A2787%26viewport%3D1219%252C20%252C0.3333852291107178%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowFullScreen />
    </div>
    </div>
  </Row>
  </Container>


  <Container>
  <Row>
    <div className="col-12 mt-5">
    <h2>Usability Testing On Live App</h2>
    </div>
    </Row>
    <Row>
    <div className="col-xl-6 mb-5 mt-3">
      <h4>Delivering dummy parcels around London</h4>
      <p>It’s important as a designer to build empathy with our end users. By experiencing the delivery process first hand by becoming a porter allowed me to do this and understand the pain points. 
      </p>
      <h4>Key Findings</h4>
    </div>
    <div className="col-xl-6 mb-5">
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ToAujFEx51c" allowfullscreen></iframe>
        </div>
    </div>
    </Row>
    <Row>
    <div className="col-12 mt-5">
      <h3>Usability Findings Deck</h3>
    </div>
    </Row>

    <Row>
    <div className="col-12 mt-3">
    <div class="embed-responsive embed-responsive-16by9">
    <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fei9zfrIrEN9SoAWb3jAsPT%2FLMD-Usability-Findings%3Fnode-id%3D49%253A0%26viewport%3D536%252C156%252C0.03257698565721512%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowFullScreen />
    </div>
    </div>
  </Row>
  </Container>
      
      
</Styles>
)