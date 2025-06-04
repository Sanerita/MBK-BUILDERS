import React from 'react';
import { Container, Row, Col, Tab, Tabs, Badge, Button } from 'react-bootstrap';
import styled from 'styled-components';
import teamImage from "../assets/team.jpg";
import SectionHeader from '../components/SectionHeader';
import { FaHardHat, FaUsers, FaShieldAlt, FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AboutContainer = styled.div`
  padding: 5rem 0;
  background-color: #f9f9f9;
  
  .styled-list {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
      padding-left: 1.5rem;
      position: relative;
      
      &::before {
        content: '✓';
        color: ${props => props.theme.colors.accent || '#ffd700'};
        position: absolute;
        left: 0;
        font-weight: bold;
      }
    }
  }
  
  .tab-content {
    background: white;
    border-radius: 0 0 8px 8px;
    padding: 2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .nav-tabs {
    border-bottom: none;
    
    .nav-link {
      color: ${props => props.theme.colors.textDark || '#333'};
      border: none;
      padding: 1rem 1.5rem;
      font-weight: 600;
      position: relative;
      
      &:hover {
        color: ${props => props.theme.colors.primary || '#000'};
      }
      
      &.active {
        color: ${props => props.theme.colors.primary || '#000'};
        background: white;
        border: none;
        
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: ${props => props.theme.colors.accent || '#ffd700'};
        }
      }
    }
  }
  
  .cert-badge {
    background: ${props => props.theme.colors.primary || '#000'};
    color: white;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
    height: 100%;
    transition: transform 0.3s;
    
    &:hover {
      transform: translateY(-5px);
    }
    
    .badge-icon {
      font-size: 2.5rem;
      color: ${props => props.theme.colors.accent || '#ffd700'};
      margin-bottom: 1rem;
    }
  }
`;

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <AboutContainer>
      <Container>
        <SectionHeader
          title="About MBK Builders"
          subtitle="Our Story, Values, and Commitment to Excellence"
        />

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img src={teamImage} alt="MBK Builders Team" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <h3 className="mb-4">Our Story</h3>
            <p className="mb-4">Founded in 2023 in Butterworth, MBK Builders has quickly established itself as a trusted name in Eastern Cape construction, delivering quality projects with precision and care.</p>
            <ul className="styled-list">
              <li>Registered with CIDB (PE 1CE)</li>
              <li>B-BBEE Level 1 Contributor</li>
              <li>Fully insured and compliant</li>
              <li>Local workforce development</li>
            </ul>
          </Col>
        </Row>

        <Tabs defaultActiveKey="mission" className="mb-5">
          <Tab eventKey="mission" title="Our Mission">
            <div className="p-4">
              <h4 className="mb-4">Building with Purpose</h4>
              <p>To deliver innovative, cost-effective construction services while fostering local job creation and sustainable development in the Eastern Cape region.</p>
              <div className="d-flex align-items-center mt-4">
                <FaLightbulb size={24} className="me-3 text-warning" />
                <p className="mb-0">Innovation in every project we undertake</p>
              </div>
            </div>
          </Tab>
          <Tab eventKey="values" title="Our Values">
            <div className="p-4">
              <h4 className="mb-4">Core Principles</h4>
              <Row>
                <Col md={6} className="mb-4">
                  <div className="d-flex align-items-start">
                    <FaHardHat size={24} className="me-3 text-warning mt-1" />
                    <div>
                      <h5>Quality Craftsmanship</h5>
                      <p>We never compromise on materials or workmanship.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="d-flex align-items-start">
                    <FaUsers size={24} className="me-3 text-warning mt-1" />
                    <div>
                      <h5>Community Focus</h5>
                      <p>We prioritize local hiring and supplier development.</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mb-4">
                  <div className="d-flex align-items-start">
                    <FaShieldAlt size={24} className="me-3 text-warning mt-1" />
                    <div>
                      <h5>Safety First</h5>
                      <p>Rigorous safety protocols on all job sites.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Tab>
        </Tabs>

        <Row className="g-4 mt-5">
          <Col md={4}>
            <div className="cert-badge">
              <div className="badge-icon">
                <FaHardHat />
              </div>
              <h5>CIDB Registered</h5>
              <p>PE 1CE grading for general building works</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="cert-badge">
              <div className="badge-icon">
                <FaShieldAlt />
              </div>
              <h5>Fully Insured</h5>
              <p>Comprehensive liability and worker's compensation</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="cert-badge">
              <div className="badge-icon">
                <FaUsers />
              </div>
              <h5>B-BBEE Level 1</h5>
              <p>Committed to economic transformation</p>
            </div>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
            Get in Touch With Us
          </Button>
        </div>
      </Container>
    </AboutContainer>
  );
};

export default AboutPage;