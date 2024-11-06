import React from 'react';
import { Container, Accordion, Badge, ListGroup } from 'react-bootstrap';
import { useState } from 'react';

const experiences = [
    {
        company: 'Truelogic Software',
        role: 'Sr Python Developer (Remote Engineer)',
        duration: 'July 2021 - Present',
        details: [
            'Migration of technology in several Python projects, from versions 2.7 to recent versions like Python 3.8 - 3.11',
            'Development of backend and frontend, databases, integrations with internal systems and Zoho',
            'Support in DevOps activities with technologies related to AWS (S3, ECR, K8s, ECS, Redshift), Jenkins, New Relic, Gitbucket, Prometheus, and Okta',
            'Database Administrator activities, providing support for table updates and corrections in productive information',
            'Mentorship to Junior developers to improve in various areas',
            'Design and implementation of scalable and sustainable software architectures',
            'Implementation of unit tests and test automation'
        ],
        skills: ['Python', 'AWS', 'Airflow', 'Jira', 'Bitbucket', 'Gitlab', 'Terraform', 'Docker', 'React', 'Jenkins', 'PostgreSQL', 'Redshift', 'REST APIs', 'New Relic', 'Prometheus', 'Kubernetes', 'DevOps', 'Zoho', 'Unit Testing', 'AWS S3']
    },
    {
      company: 'Distillery México',
      role: 'Sr. Developer (Remote Engineer)',
      duration: 'January 2024 - August 2024',
      details: [
        'Design and development of a predictive scheduling service with pandas and numpy.',
        'Implementation of machine learning models to improve projection accuracy by 15%.',
        'Performance optimization in simulations with vectorization and parallel processing techniques.'
      ],
      skills: ['Python', 'Pandas', 'Numpy', 'Scikit-Learn', 'REST APIs', 'TensorFlow', 'Machine Learning', 'Optimization']
    },
    {
        company: 'Telsis Comunicaciones',
        role: 'Freelance',
        duration: 'May 2010 - August 2023',
        details: [
            'Development of desktop applications using Java/Django/PHP with MariaDB as database',
            'Development of modules for integration between third-party systems',
            'Implementation of structured cabling systems for internal networks',
            'Configuration and administration of internal networks and mail servers',
            'Administration of cPanel/WHM for website management and server configuration',
            'Implementation of security solutions and surveillance systems',
            'Generation of automated reports in Excel and PDF using VisualBasic'
        ],
        skills: ['Java', 'Django', 'PHP', 'MariaDB', 'Network Administration', 'cPanel', 'WHM', 'VisualBasic', 'System Integration', 'Field Engineer', 'Alarm Systems', 'CCTV' ]
    },
    {
        company: 'Reina Madre, Clínicas de la Mujer',
        role: 'Sr. Developer / Project Manager / Team Lead',
        duration: 'September 2019 - July 2021',
        details: [
            'Backend and frontend development in multiple healthcare software projects',
            'Administration of in-house GitLab for source code version control',
            'Implementation of integrations with internal systems and Zoho',
            'Design and implementation of scalable and sustainable software architectures',
            'Implementation of unit tests and test automation',
            'Technical guidance to colleagues and feasibility of planning and processes',
            'Process analysis and efficiency improvements in software development'
        ],
        skills: ['Full-stack Development', 'GitLab', 'Zoho Integration', 'REST APIs', 'Healthcare Software', 'Unit Testing', 'Software Architecture']
    },
    {
        company: 'STO Consulting',
        role: 'Developer',
        duration: 'June 2018 - August 2019',
        details: [
            'Maintenance of projects based on Java 8, Spring, Hibernate, MyBatis, C#/.Net, and MySQL',
            'Training of aspirants/trainees in development and project management',
            'Validation and optimization of source code using profiling and debugging tools',
            'Participation in support and maintenance of developed systems',
            'Review and correction of technical documentation',
            'Creation of unit and integration tests for projects'
        ],
        skills: ['Java', 'Spring', 'Hibernate', 'MyBatis', 'Bootstrap', 'Linux - Centos', 'Mentoring', 'Scripting', 'PrimeFaces', 'iVend', 'Oracle Fusion', 'SAP Bussiness One', 'C#', '.NET', 'REST APIs', 'MySQL', 'Git', 'Technical Training']
    },
    {
        company: 'Bit Technologies',
        role: 'Developer',
        duration: 'September 2016 - May 2018',
        details: [
            'Development of internal project modules using Rest APIs with .Net and PHP',
            'Development and maintenance of scripts in MSSQL and MySQL',
            'Creation of reports using JasperReports and Crystal Reports',
            'Development and implementation of third-party frameworks',
            'Help Desk ticket resolution and technical support',
            'Analysis of change implementation processes'
        ],
        skills: ['.Net', 'C#', 'ASP Classic', 'PHP', 'REST APIs', 'MSSQL', 'JQuery', 'Boostrap', 'MySQL', 'JasperReports', 'Crystal Reports', 'Syncfusion', 'Technical Support']
    }
  ];
const Experience = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredExperiences = experiences
        .filter(exp => 
            exp.details.some(detail => detail.toLowerCase().includes(searchTerm.toLowerCase())) ||
            exp.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .sort((a, b) => new Date(b.duration.split(' - ')[1]) - new Date(a.duration.split(' - ')[1]));

    return (
        <Container className="my-5">
            <h2>Experiencia Laboral</h2>
            <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control mb-3"
            />
            <Accordion >
                {filteredExperiences.map((exp, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>
                            <div>
                                <strong>{exp.role}</strong> en {exp.company} <br />
                                <small className="text-muted">{exp.duration}</small>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush">
                                {exp.details.map((detail, idx) => (
                                    <ListGroup.Item key={idx}>{detail}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            <div className="mt-3">
                                {exp.skills.map((skill, idx) => (
                                    <Badge pill bg="secondary" key={idx} className="mx-1">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Container>
    );
};
  
export default Experience;
  

