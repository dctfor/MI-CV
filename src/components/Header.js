import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Header = () => (
    <Container>
        <Row className="align-items-center mb-4">
            <Col xs={12} md={3} className="text-center">
                <Image src="/perfil.webp" roundedCircle fluid style={{ maxWidth: '150px', height: 'auto' }} />
            </Col>
            <Col xs={12} md={9} className="text-center text-md-left">
                <h1 className="m-3">Christian Andrés López Valdez</h1>
                <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" href="https://www.linkedin.com/in/catfor/" target="_blank" className="m-3 d-flex align-items-center">
                        <FaLinkedin className="mx-1" /> LinkedIn
                    </Button>
                    <Button variant="dark" href="https://github.com/dctfor" target="_blank" className="m-3 d-flex align-items-center">
                        <FaGithub className="mx-1" /> GitHub
                    </Button>
                    <Button variant="secondary" href="mailto:calv.catfor@gmail.com" className="m-3 d-flex align-items-center">
                        <FaEnvelope className="mx-1" /> Email
                    </Button>
                    <Button variant="success" href="https://wa.me/527224119968" target="_blank" className="m-3 d-flex align-items-center">
                        <FaWhatsapp className="mx-1" /> Whats
                    </Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2>Intro</h2>
                <div className="card">
                    <div className="card-body">
                        <p>
                            A versatile Senior Developer with 8+ years of experience, specializing in being the go-to person for critical problem-solving across diverse technologies.
                        </p>
                        <p>
                            While my core expertise lies in Python, I pride myself on being a technical Swiss Army knife - someone who can jump into production issues, debug complex systems, and provide meaningful solutions regardless of the stack. My breadth of experience spans healthcare, logistics, education, and accounting industries, where I've consistently demonstrated the ability to understand, fix, and improve existing systems. Comfortable with both frontend and backend development, DevOps tasks, and team mentoring, but my true strength lies in troubleshooting and support.
                        </p>
                        <p>
                            I thrive in roles where adaptability and quick learning are valued over deep specialization in a single technology. Currently interested in remote positions where my problem-solving abilities and diverse technical background can make a significant impact.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Header;
