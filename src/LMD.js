import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import LMDPorter from '../src/Components/Assets/Img/LMDPorter.png';
import LMDHeader from '../src/Components/Assets/Img/LMDHeader.jpg'


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
            On this project i was the design lead. I was working with 1 UX designer 1 UI designer and 2 iOS developers, 2 product managers.
            </p>
          </div>
          <div className = "offset-xl-1 col-xl-6 col-md-7 col-sm-12 col-xs-12">
          <img className = "projectPicture" alt ="roadside assistance app" src={LMDPorter} />
          </div>
        </Row>
 </Container>


<Container>
  <Row>
    <div className="col-12 mb-5">
    <div class="embed-responsive embed-responsive-16by9">
    <iframe style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlTMQsZWUR7Y57FRPdkBx2g%2FLMD-work%3Fnode-id%3D5%253A2787%26viewport%3D1219%252C20%252C0.3333852291107178%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowFullScreen />
    </div>
    </div>
    </Row>
  </Container>
      

      
</Styles>
)