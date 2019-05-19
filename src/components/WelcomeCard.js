import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const WelcomeCard = () => {
  return (
    <div>
      <Card id="welcomeCard" className="mx-auto" >
        <CardImg src="assets/images/christian_pool.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>
            <h5>My name is Christian</h5>
          </CardTitle>
          <CardSubtitle>
            <p>Developer & Entrepreneur from South Florida</p>
          </CardSubtitle>
          <CardText>This is a sample React Application on Google Cloud using the React Slingshot as a starter for this application</CardText>
          <Link className="btn btn-primary" to="/calendar">Calendar</Link>
        </CardBody>
      </Card>
    </div >
  )
}

export default WelcomeCard;
