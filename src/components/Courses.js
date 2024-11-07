import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const courses = [
  'Learn DevOps: Infrastructure Automation With Terraform - Udemy, 2023',
  'A ReactJs Course - Udemy, 2022',
  'SoftSkills Course - Udemy, 2021',
  'Docker for beginners - DevOps - Udemy, 2021',
  'Selenium WebDriver w/ Docker, Jenkins & AWS - Udemy, 2021',
  'Software Architecture - Udemy, 2022',
  'TypeScript decorators - Udemy, 2022',
  'Data Science: Python for Data Analysis - Udemy, 2024',
];

const Courses = () => (
  <Container className="my-5">
    <h2>Courses  <span role="img" aria-label="books">📚</span></h2>
    <ListGroup>
      {courses.map((course, index) => (
        <ListGroup.Item key={index}>{course}</ListGroup.Item>
      ))}
    </ListGroup>
  </Container>
);

export default Courses;
