import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



const Styles = styled.div` 

@media only screen and (min-width: 768px) {

  .cardPadding {
    padding:0;
  }

}
@media only screen and (max-width: 768px) {

 .buttonStyling {

  display: block;
  width: 100% !important;
 }
  .cardStyling {
    margin-top: 3rem !important;
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
  transition: 0.2s ease-in;
}



.cardStyling {
    margin-bottom: 3rem !important;
    border: none;
    background-color: #F7F7F7;

}

.cardImage {
  border-radius:0px;
}

.card:hover {
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, .1);
  transform: scale(1.02);
  transition: 0.3s cubic-bezier(.215, .61, .355, 1);
}


.cardTitleStyling {
  font-family: Apercu Pro Bold,Helvetica, Arial, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: bold;
  margin-top: 100px;

}

.cardBodyStyling {
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

}

.projectLogo {
  width: 120px;
  height: 50px;

}



`;
export const BigCard = props =>(

<Styles>
<Container className="cardPadding">
<Card className = "mx-2 mb-5">
  <Row>
  <Col md={6}>
      <Card.Img className ="cardImage" src = {props.imgCardLarge}/>
    </Col>
    <Col md = {6}>
    <Card.Body>
    <Image className = "projectLogo float-right" src={props.imgProjectLogo}  />
    <Card.Title className = "cardTitleStyling">
      {props.cardTitleName} 
    </Card.Title>
    <Card.Text className = "cardBodyStyling">
    {props.cardBodyText} 
    </Card.Text>
    <Button block className = "buttonStyling" variant="outline-dark">Read more</Button>
  </Card.Body>
    </Col>
  </Row>
</Card>
</Container>
</Styles>

)