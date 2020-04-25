import React from 'react'
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import profileRounded from '../src/Components/Assets/Img/profileRounded.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Styles = styled.div`

 .profilePicture {
     border-radius: 99em !Important;
     width: 100px;
     height: 150px;
 }

    `;


export const About = () => (

    
<Styles>



<Jumbotron mb-0>
        <div className="intro py-5">
          <Container>
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-12 col-md-7">
              <h1> Hi, I'm Furquan <span aria-label="waving hand" role="img">👋</span></h1>
                <p className="lead"> I'm a product designer designing global mobility soloutions for mega cities.
                </p><div className="row">
                  <div className="col-lg-6 col-6">
                    <hr className="fancy-line mt-2 mb-4" />
                  </div>
                </div>
                <p>Because I've been in the trenches as a designer and developer, I know all about the tech jargon that matters.</p>
                <p>Today, I'm product designer at Ford Mobility in London, designing a brand new delivery network to combat congestion cities.</p>
                <p>Catch me outside from work you will find me running with my local running club <span aria-label="running man" role="img">🏃🏽‍♂️</span>,  at a climbing wall <span aria-label="climbing" role="img">🧗🏽‍♂️</span>  or working on one of my side projects</p>
               
              </div>
              <div className="col-6 col-sm-3 col-md-4 offset-md-1 col-lg-3 offset-lg-3 mb-3 mb-sm-0 text-right order-first order-sm-last">
                  <img src={profileRounded} />
              </div>
            </div>
          </Container>
        </div>
      </Jumbotron>
      <div className="container mt-5">
        <div className="row">
            <div className="col-lg-6 mb-4">
            <h3>TL;DR</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-lg-4">
            <h5>What</h5>
            <p>I've been designing and developing global mobility soloutions for over 5 years at Ford Mobility. It started in 2015 when i started a degree apprenticeship at Ford and graduated with a first class honors. </p>
            </div>
            <div className="col-md-4 col-lg-4">
            <h5>Where</h5>
            <p>I live in London, United Kingdom one of my faviourte places in the world. and our fluffy scottish-straight <a href="https://instagram.com/mikastgram">cat</a>, Mika.</p>
            <p>I grew up in Essex, United Kingdom. We invented the flat white there.</p>
            </div>
            <div className="col-md-4 col-lg-4">
            <h5>Wild</h5>
            <p>Outside from work you will find me running with my local running club <span aria-label="running man" role="img">🏃🏽‍♂️</span>,  at a climbing wall <span aria-label="climbing" role="img">🧗🏽‍♂️</span>  or working on one of my side projects</p>
            <p> I also love reading books, cooking and gaming.</p>
            <p>I'm an <a href="https://twitter.com/ow" target="_blank">avid Twitter user</a>, and joined the service in 2008. I didn't get my short username until much later, but that's a story for in person.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 my-5">
            <hr />
            </div>
        </div>
        </div>

        <Container>
            <Row>
            <div className="col-lg-6">
                <h3>Side Projects</h3>
            </div>
            </Row>
            <Row>
            
                <div className="col-md-4 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Deeds At Home</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>COVID19 Live</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="col-md-4 col-lg-4">
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Yuumi Chatbot</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    
                    

                    
                
            </Row>
            
        </Container>
        <Jumbotron>
        <Container>
            <div className="col-lg-6">
            <Row>
                <h3> You can say hello and contact me.</h3>
            </Row>
                <Row>
                  <div className="col-lg-6 col-6">
                    <hr className="fancy-line mt-2 mb-4" />
                  </div>
                </Row>
                <Row>
                    <p>I'm always interested in new ideas, opportunities or hearing what you're working on, so  drop us a message and say hello.</p>
                </Row>
            </div>
            <Button href="mailto:furquan101@gmail.com" className = "buttonStyling" variant="outline-dark">Say hello</Button>
        </Container>
        </Jumbotron>
            
            
     
       






</Styles>

)