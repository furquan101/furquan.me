import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { LinkContainer } from 'react-router-bootstrap';



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
    font-size: 1.27rem!important;
  }

  .cardBodyStyling {
    font-family: Open Sans, sans-serif;
    font-weight: 300;
    font-size: 1rem !important;
    line-height: 150%;
  
  }
}

.buttonStyling {
  border-style: solid;
  border-width: 2px;
  border-radius: 3px;
  font-weight:600;
  font-size: 1rem;
  font-family: Open Sans, sans-serif;
  width: 128px;
  height: 40px;

}

.buttonStyling:hover {
  background-color: white;
  font-weight: 600;
  color:#5D12FF;
  border-color: #5D12FF;
  transition: 0.2s ease-in;
}


.buttonStyling:focus{
    color: white !important;
    background-color: #5D12FF!important;
    border-color: white !important;
    border-width: 1.5px !important;
    font-weight: 600;
}



.cardStyling {
    margin-bottom: 3rem !important;
    border: none;
    background-color: #F7F7F7;

}

.cardImage {
  border-radius:0px;
  max-height:100%;
  max-width: 100%;
}

.card:hover {
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, .1);
  transform: scale(1.02);
  transition: 0.3s cubic-bezier(.215, .61, .355, 1);
}


.cardTitleStyling {
  font-family: Open Sans, sans-serif;
  font-size: 1.55rem;
  font-style: normal;
  font-weight: bold;
  margin-top: 100px;

}

.cardBodyStyling {
  color: #202020;
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 24px;

}

.projectLogo {
  width: auto;
  height: auto;

}



`;
export const BigCard = props =>(

<Styles>
<LinkContainer to= {props.cardLink}>
<Container className="cardPadding">
<Card className = "mx-2 mb-5">
  <Row>
  <div className ="col-lg-6">
      <Card.Img className ="cardImage" src = {props.imgCardLarge} alt="projects i've worked on"/>
    </div>
    <div className ="col-lg-6">
    <Card.Body>
    <Image className = "projectLogo float-right" src={props.imgProjectLogo} alt ="project logo" />
    <Card.Title className = "cardTitleStyling">
      {props.cardTitleName} 
    </Card.Title>
    <Card.Text className = "cardBodyStyling mb-3">
    {props.cardBodyText} 
    </Card.Text>
    <LinkContainer to= {props.cardLink}>
    <Button block className = "buttonStyling shadow-none" variant="outline-dark">Read more</Button>
    </LinkContainer>
  </Card.Body>
    </div>
  </Row>
</Card>
</Container>
</LinkContainer>
</Styles>

)