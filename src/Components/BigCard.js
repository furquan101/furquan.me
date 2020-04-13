import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import fordLogo from '../../src/Components/Assets/Img/FordLogo.svg';
import fordPass from '../../src/Components/Assets/Img/Fordpass.png';
import mustangImage from '../../src/Components/Assets/Img/Mustang.png';
import transitvan from '../../src/Components/Assets/Img/Transit.jpg';
import '../App.css';



const Styles = styled.div` 




@media only screen and (max-width: 768px) {

 .buttonStyling {

  display: block;
  width: 100% !important;
 }
  .cardStyling {
    margin-top: 3rem !important;
    margin-left: 1.6rem !important;
    margin-right: 1.6rem !important;

  }

  .projectLogo {
    display: none !important;
  }

  .cardTitleStyling {

    margin-top: 16px!important;
    font-size: 1.4em!important;
  }

  .cardBodyStyling {

    font-weight: 300;
    font-size: 0.9em !important;
    line-height: 150%;
  
  }
}

.buttonStyling {
  border-style: solid;
  border-width: 2px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 16px;
  font-family: roboto;
  width: 128px;
  height: 40px;

}

.buttonStyling:hover {
  background-color: inherit;
  color: #A346FF;
  border-color: #A346FF;
}


.cardImageStyle {

  max-width: 1080px;
  max-height: 1080px;


}
.cardStyling {
    margin-bottom: 3rem !important;
    border: none;
    background-color: #F7F7F7;
}


.cardTitleStyling {

  font-size: 28px;
  font-style: normal;
  font-weight: bold;
  margin-top: 100px;

}

.cardBodyStyling {

  font-weight: 300;
  font-size: 16px;
  line-height: 150%;

}

.projectLogo {
  width: 120px;
  height: 50px;

}

`;
export const BigCard = () => (

<Styles>
<Container>

<Card className = "cardStyling">
  <Row>
  <Col md={6}>
      <Card.Img className = "cardImageStyle" src = {fordPass}/>
    </Col>

    <Col md = {6}>
    <Card.Body>
    <Image className = "projectLogo float-right" src={fordLogo}  />
    <Card.Title className = "cardTitleStyling">Bringing live vehicle data into customer's hands</Card.Title>
    <Card.Text className = "cardBodyStyling">
      The Digital CoPilot is about putting customer's vehicle data into the FordPass App. 
    </Card.Text>
    <Button block className = "buttonStyling" variant="outline-dark">Read more</Button>
  </Card.Body>
    </Col>
  </Row>
</Card>

</Container>

</Styles>

)