// src/components/StatsCounter.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { FaHardHat, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const StatsSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.primary || '#000000'};
  color: ${({ theme }) => theme.colors.secondary || '#FFFFFF'};
  text-align: center;
  
  .stat-item {
    padding: 2rem;
    
    .stat-icon {
      font-size: 3rem;
      color: ${({ theme }) => theme.colors.accent || '#FFD700'};
      margin-bottom: 1rem;
    }
    
    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      font-size: 1.2rem;
      opacity: 0.9;
    }
  }
`;

const StatsCounter = ({ projects, clients, years }) => {
  return (
    <StatsSection>
      <Container>
        <Row>
          <Col md={4} className="stat-item">
            <div className="stat-icon">
              <FaHardHat />
            </div>
            <div className="stat-number">
              <CountUp end={projects} duration={3} />
              <span>+</span>
            </div>
            <div className="stat-label">Projects Completed</div>
          </Col>
          
          <Col md={4} className="stat-item">
            <div className="stat-icon">
              <FaUsers />
            </div>
            <div className="stat-number">
              <CountUp end={clients} duration={3} />
              <span>+</span>
            </div>
            <div className="stat-label">Satisfied Clients</div>
          </Col>
          
          <Col md={4} className="stat-item">
            <div className="stat-icon">
              <FaCalendarAlt />
            </div>
            <div className="stat-number">
              <CountUp end={years} duration={3} />
            </div>
            <div className="stat-label">Years Experience</div>
          </Col>
        </Row>
      </Container>
    </StatsSection>
  );
};

export default StatsCounter;