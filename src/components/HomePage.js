import React from 'react';
import {
  Container,
  Row
} from 'reactstrap';
import WelcomeCard from './WelcomeCard';

const HomePage = () => {
  const user = "Christian";
  return (
    <Row>
      <Container className="mt-5">
        <div className="text-center">
          <h1>Welcome, {user}!</h1>
        </div>
        <WelcomeCard />
      </Container>
    </Row>
  );
};

export default HomePage;
