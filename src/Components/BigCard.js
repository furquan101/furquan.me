import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import fordLogo from '../../src/Components/Assets/Img/FordLogo.svg';
import mustangImage from '../../src/Components/Assets/Img/Mustang.png';
import '../App.css';



const Styles = styled.div` 

@media only screen and (max-width: 768px) {
  .cardStyling {
    margin: 0px !important;

  }
}

.cardStyling {

    border: none;
    background-color: #F7F7F7;
}

.projectLogo {
  width: 120px;
  height: 50px;

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

`;
export const BigCard = () => (

<Styles>
<Container>

<Card className = "cardStyling">
  <Row>
    <Col md = "6">
      <Card.Img src = {mustangImage}/>
    </Col>

    <Col md = "6">
    <Card.Body>
    <Image className = "projectLogo float-right" src={fordLogo}  />
    <Card.Title className = "cardTitleStyling">Bringing vehicle data into customer's hands</Card.Title>
    <Card.Text className = "cardBodyStyling">
      For the first time customers will be able to view real time vehcile data their cars produce. 
      The Digital CoPilot is about putting customer's vehicle data into the FordPass App. 
    </Card.Text>
    <Button variant="primary">Learn More</Button>
  </Card.Body>
    </Col>






  </Row>
</Card>

</Container>

</Styles>

)