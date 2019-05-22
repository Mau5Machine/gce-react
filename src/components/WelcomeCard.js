import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import christianPic from '../assets/images/christian_pool.jpg';

const WelcomeCard = () => {
  return (
    <div>
      <Card id="welcomeCard" className="mx-auto" >
        <CardImg src={christianPic} alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <h5>My name is Christian</h5>
          </CardTitle>
          <CardSubtitle>
            <p>Developer & Entrepreneur from South Florida</p>
          </CardSubtitle>
          <CardText>This is a sample React Application on Google Cloud using the React Slingshot as a starter for this application</CardText>
        </CardBody>
      </Card>
    </div >
  )
}

export default WelcomeCard;
