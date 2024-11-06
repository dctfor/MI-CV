import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const certifications = [
  'Python (Basic) - HackerRank, 2024',
  'Rest API (Intermediate) - HackerRank, 2024',
  'Scrum Fundamentals Certified - SCRUMstudy, 2024',
];

const Certifications = () => (
  <Container className="my-5">
    <h2>Certifications <span role="img" aria-label="scroll">📜</span></h2>
    <ListGroup>
      {certifications.map((cert, index) => (
        <ListGroup.Item key={index}>{cert}</ListGroup.Item>
      ))}
    </ListGroup>
  </Container>
);

export default Certifications;
