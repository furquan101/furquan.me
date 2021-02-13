import React from 'react';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ConverKitForm from 'convertkit-react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

 

const Styles = styled.div`

@media only screen and (max-width: 768px) {

  .newsHeader {
    font-size: 20px !important;
    
  }



  .newsTitle{
    font-size: 28px !important;

  }

  .newsBody {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px !important;
    line-height: 140%;
    /* or 45px */
  
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: black;
  }
}

.newsletter {
  background-color: #FEEAFC;
  color: white;
  border-radius: 0;
  margin-top: 50px;
  margin-bottom: 0px;
}

.newsHeader {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color:#4100FA;
}

.newsTitle{
  margin-top: 16px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 140%;
  /* identical to box height, or 76px */
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: black;
}

.jumbotron {
  padding-top: 2rem !important;
  padding-bottom: 3rem !important;
}
.newsBody {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 140%;
  /* or 45px */

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: black;
}


.ck-fm input {
  margin-top: 12px;
  width: 90%;
  padding: 16px;
  border-radius: 4px;
  border: 2px solid;
  border-color: black !important;
  color: black;
}


.ck-fm button {
  margin-top: 24px;
  width: 40%;
  height: 56px;
  background: none;
  border: 2px solid #4100FA;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 150%;
  /* or 30px */
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #4100FA;
  
}

.ck-fm button: hover {
  width: 40%;
  height: 56px;
  background: none;
  border: 2px solid #CDB6FF;
  box-sizing: border-box;
  border-radius: 10px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  /* or 30px */
  text-align: center;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #CDB6FF;
}


`;

export const NewsletterFooter = () => (
   <Styles>
  <Jumbotron className = "newsletter">
          <Container>
          <Row>
          <div className="col-xl-8 mt-5">
          <p className ="newsHeader">Newsletter</p>
          <h3 className="newsTitle"> Ready, Set, Grow
          </h3>
          <p className="newsBody">
           Want my monthly design snippets sent straight to your inbox?
          </p>
          </div>
          </Row>
          <Row>
          <div className="col-xl-5">
          <ConverKitForm className ="ck-fm"
            hideName={true}
            stack={false}
            emailPlaceholder="We saved a spot for your email!"
            submitText="Send"
            formId={2038658}
            newTab={true}
            />
            </div>
            </Row>
          </Container>
      </Jumbotron>
   </Styles>
)