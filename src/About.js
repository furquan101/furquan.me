import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import profileRounded from '../src/Components/Assets/Img/profileRounded.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeedsAtHome from '../src/Components/Assets/Img/DeedsAtHome.png';
import Covid19 from '../src/Components/Assets/Img/Covid19.png';
import Yuumi from '../src/Components/Assets/Img/Yuumi.png';






const Styles = styled.div`


@media only screen and (max-width: 768px) {

    .headerStyle {
        font-size: 2.15rem !important;
    }

    .profilePicture {
        border-radius: 99em !Important;
        max-width: 135px !important;
        max-height: 135px !important;
    }

}


.headerJumbotron {

    background-color: #F7F7F7;

}
.headerStyle {
    font-family: Open Sans, sans-serif;
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 150%;
    color: black;
}

.subHeaderText {
    font-family: Open-Sans, sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;
    color: black;
    margin-bottom: 0.8rem !important;
}

.bodyHeaderText {
    font-family: Open-Sans, sans-serif;
    font-size: 1.05rem;
}

 .profilePicture {
     border-radius: 99em !Important;
     max-width: 250px;
     max-height: 250px;
 }



 .fancy-line {
     background: #9665FF;
     border-radius: 10px;
     height: 2px;
 }


 .TLDRHeader {
     font-family: Open Sans, sans-serif;
     font-weight: bold;
     font-size: 2.5rem;
     color: black;
 }

 .TLDRSubHeader {
     font-family: Roboto Mono, sans-serif;
     font-size: 1.75rem;
     line-height: 150%;
     color: black;
 }

 .TLDRBodyText {

    font-family: Open Sans, sans-serif;
    font-size: 1rem;
    line-height: 150%;
    color: black;
 }

 .seperator {
     background: #C4C4C4;
     height: 0.5px;
 }

 .sideProjectHeader {
     font-family: Open Sans, sans-serif;
     font-weight: bold;
     font-size: 2rem;
     letter-spacing: 0.015em;
     color: black;
     text-transform: uppercase;
 }

 .sideProjectSubHeader {
     font-family: Open Sans, sans-serif;
     font-weight: 600;
     font-size: 1.25rem;
     color: black;
 }


 .cardTitle {

    font-family: Roboto Mono, sans-serif; 
    color: #5100FF;
    text-transform: uppercase;
    font-size: 1.25rem;
    margin-bottom: 1rem;
 }


 .cardTitle:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.5em;
 }

 .cardBody {

    font-family:Open Sans, sans-serif; 
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 150%;
    margin-top: 16px;

 }

 .contactJumbotron {
    margin-top: 100px;
    background-color: #9665FF;
    margin-bottom: 0px;

 }
 .contactHeader {
     font-family: Open Sans, sans-serif;
     font-weight: bold;
     font-size: 2.1rem;
     color: white;
 }

 .contactLine {
     height: 2px;
     background-color: white;
     border-radius: 10px;
 }

 .contactText {
     font-family: Open Sans, sans-serif;
     font-size: 1.1rem;
     color: white;
 }
    `;


export const About = () => (

    
<Styles>



<Jumbotron className = "headerJumbotron">
        <div className="intro py-5">
          <Container>
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-12 col-md-7">
              <h1 className = "headerStyle"> Hi, I'm Furquan <span aria-label="waving hand" role="img">👋</span></h1>
                <p className="subHeaderText"> I'm a product designer designing global mobility soloutions for mega cities.
                </p><div className="row">
                  <div className="col-lg-6 col-6">
                    <hr className="fancy-line mt-2 mb-4" />
                  </div>
                </div>
                <div className ="bodyHeaderText">
                <p>Because I've been in the trenches as a designer and developer, I know all about the tech jargon that matters.</p>
                <p>Today, I'm a product designer at Ford Mobility in London, designing a brand new delivery network to combat congestion in cities.</p>
                <p>Catch me outside from work you will find me running with my local running club,  at a climbing wall or working on one of my side projects</p>
               </div>
              </div>
              <div className="col-6 col-sm-3 col-md-4 offset-md-1 col-lg-3 offset-lg-3 mb-3 mb-sm-0 text-right order-first order-sm-last">
                  <img className = "profilePicture" alt ="Furquan" src={profileRounded} />
              </div>
            </div>
          </Container>
        </div>
      </Jumbotron>
      <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6 mb-4">
            <h3 className = "TLDRHeader">TL;DR</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4">
            <h5 className="TLDRSubHeader">What</h5>
            <div className="TLDRBodyText">
            <p>I've been designing and developing global mobility soloutions for over 5 years at Ford Mobility. </p>
            <p>It started in 2015 when i started a degree apprenticeship at Ford and graduated with a first class honors. </p>
            </div>
            </div>
            <div className="col-md-4 col-lg-4">
            <h5 className="TLDRSubHeader">Where</h5>
            <div className = "TLDRBodyText">
            <p>I live in London, United Kingdom one of my favourite places in the world.</p>
            <p>I grew up in Essex, United Kingdom. We invented the Radio there.</p>
            </div>
            </div>
            <div className="col-md-4 col-lg-4">
            <h5 className="TLDRSubHeader">Wild</h5>
            <div className = "TLDRBodyText">
            <p> I love keeping up with FinTechs and have a strong interest in investing.</p>
            <p> I also love reading books, cooking and gaming. I'm currently playing a lot of League Of Legends.</p>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 my-5">
            <hr className="seperator"/>
            </div>
        </div>
        </div>

      


        <Container>
            <Row className ="justify-content-center">
                <div className="col-md-6 col-lg-3 mb-4">
                    <h1 className ="sideProjectHeader">Side Projects</h1>
                    <p className ="sideProjectSubHeader"> A neat collection of my side projects.</p>
                </div>
                <div className="col-md-6 col-lg-3  mb-4 col-10">
                    <Card className = "h-100">
                        <Card.Img variant="top" src={DeedsAtHome} />
                        <Card.Body className="mb-1">
                            <a className = "cardTitle" href="https://www.figma.com/community/file/834164719425301604/Deeds-At-Home" target="_blank" rel="noopener noreferrer"> Deeds At Home </a>
                            <Card.Text className = "cardBody">
                             Designing a personalised schedule for Ramadan during the lockdown filled with Islamic activities.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4 col-10">
                    <Card className = "h-100"> 
                        <Card.Img variant="top" src={Covid19} />
                        <Card.Body className="mb-1">
                            <a className = "cardTitle" href="https://www.covid19-live.co.uk/" target="_blank" rel="noopener noreferrer"> COVID-19 Live </a>
                            <Card.Text className = "cardBody">
                            Designing and developing a web app to allow you to understand the wider impact of COVID-19 on society.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6 col-lg-3 mb-4 col-10">
                    <Card className = "h-100">
                        <Card.Img variant="top" src={Yuumi} />
                        <Card.Body className="mb-1">
                            <a className = "cardTitle" href="https://www.youtube.com/watch?v=1fTNfQvhYso" target="_blank" rel="noopener noreferrer"> Yuumi Chatbot </a>
                            <Card.Text className = "cardBody">
                                Developing a chatbot to help people talk openly about their mental health, in a safe, open and free environment. 
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>    
                </Row> 
        </Container>

        <Jumbotron className="contactJumbotron">
        <Container>
            <Row>
            
            <div className="col-lg-6 md-12">
              <h3 className ="contactHeader">Say hello.</h3>
              </div>
            </Row>
                <Row>
                  <div className="col-lg-4 col-md-4">
                     <hr className="contactLine mt-2 mb-4"></hr>
                  </div>
                </Row>
                <Row>
                <div className="col-lg-6 col-12">
                    <p className="contactText">I'm always interested in new ideas, opportunities or hearing what you're working on, so drop us a message and say hello.</p>
                </div>
                </Row> 
                <Row>
                <div className="col-lg-6 col-12">
                    <Button href="mailto:furquan101@gmail.com" className = "buttonStyling" variant="outline-light">Say hello</Button>
                </div>
                </Row>
        </Container>
        </Jumbotron>
</Styles>

)