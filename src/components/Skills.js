import React from 'react';
import { Container, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';

const technicalSkills = {
  // Programming Languages
  languages: [
    'Python 2.7/3.x',
    'Java 6/7/8',
    'ReactJS',
    'VueJS',
    'PHP',
    'C#',
    'JavaScript/jQuery',
    'VisualBasic'
  ],
  
  // Frameworks & Libraries
  frameworks: [
    'Django',
    'FastAPI',
    'Flask',
    'Alembic',
    'Scikit',
    'Tensorflow',
    'OpenCV',
    'Yolo',
    'CodeIgniter',
    'Pandas',
    'Pydantic',
    'SQLAlchemy',
    'Spring',
    'Hibernate',
    'MyBatis/iBatis',
  ],
  
  // Cloud & DevOps
  devops: [
    'AWS',
    'GCP',
    'Docker',
    'DockerCompose',
    'Jenkins',
    'Terraform',
    'EKS',
    'ECR',
    'BitBucket',
    'GitLab',
    'NewRelic',
    'Datadog',
    'Protheus',
    'Grafana'
  ],
  
  // Databases
  databases: [
    'MySQL',
    'Postgresql',
    'MSSQL',
    'RedShift',
    'Neo4J'
  ],
  
  // Integration & APIs
  integration: [
    'REST APIs',
    'SOAP',
    'Webhooks',
    'Twilio',
    'SendGrid',
    'GraphQL'
  ],
  
  // Business Tools
  businessTools: [
    'Zoho Creator',
    'Zoho Flows',
    'Zoho CRM',
    'Zoho Analytics',
    'Microsoft365',
    'Confluence',
    'Jira'
  ],
  
  // System Administration
  sysAdmin: [
    'cPanel',
    'WHM',
    'XAMP',
    'Server Management',
    'SSH',
    'sFTP/FTP',
    'SRE'
  ],
  
  // Methodologies
  methodologies: [
    'Kanban',
    'Extreme Programming',
    'Scrum'
  ],
  
  // Soft Skills
  softSkills: [
    'Technical Training',
    'Project Management',
    'Team Leadership',
    'Problem Solving',
    'Production Debugging',
    'System Migration',
    'Legacy System Maintenance',
    'General Documentation',
    'Technical Recruitment'
  ],
  
  // Domain Knowledge
  domainKnowledge: [
    'Healthcare Systems',
    'Colposcopy Systems',
    'Accounting Systems',
    'Financial Systems',
    'Help Desk Support',
    'Basic Networking',
    'Multimedia Integration'
  ]
  };

const skills = Object.entries(technicalSkills).map(([category, skills]) => ({
  category,
  skills
}));

const badgeColors = {
  languages: '#cc4629',
  frameworks: '#29cc46',
  devops: '#2946cc',
  databases: '#cc2981',
  integration: '#8129cc',
  businessTools: '#29cc81',
  sysAdmin: '#81cc29',
  methodologies: '#cc4629',
  softSkills: '#2981cc',
  domainKnowledge: '#cc2981'
};

const Skills = () => (
  <Container className="my-5">
  <h2>Habilidades
    <div>
      <OverlayTrigger
        placement="right"
        overlay={
          <Tooltip id="tooltip-info">
            Even though I have a tech or skill listed here, it might be self-learned rather than acquired through a job.
          </Tooltip>
        }
      >
        <span><FaInfoCircle className="ml-2" /></span>
      </OverlayTrigger>
    </div>
  </h2>

  {skills.map((skillGroup, index) => (
    <div key={index} className="mb-3">
    <h4>{skillGroup.category}</h4>
    {skillGroup.skills.map((skill, idx) => (
      <Badge 
      key={idx} 
      pill 
      style={{ backgroundColor: badgeColors[skillGroup.category] }} 
      className="mx-1 custom-badge"
      >
      {skill}
      </Badge>
    ))}
    </div>
  ))}
  </Container>
);

export default Skills;
