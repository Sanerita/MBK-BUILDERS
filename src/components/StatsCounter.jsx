import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { FaHardHat, FaUsers, FaCalendarAlt, FaAward } from 'react-icons/fa';

const StatsSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.primary || '#1a1a1a'}, 
    ${({ theme }) => theme.colors.primaryDark || '#000000'});
  color: ${({ theme }) => theme.colors.secondary || '#ffffff'};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==');
  }

  .stat-item {
    padding: 2rem;
    position: relative;
    z-index: 1;

    .stat-icon {
      font-size: 3.5rem;
      color: ${({ theme }) => theme.colors.accent || '#ffd700'};
      margin-bottom: 1.5rem;
      transition: all 0.3s ease;
    }

    .stat-number {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.colors.accent || '#ffd700'};
    }

    .stat-label {
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      opacity: 0.9;
    }
  }
`;

const StatsCounter = ({ projects, clients, years, awards }) => {
  return (
    <StatsSection>
      <Container>
        <Row>
          <Col lg={3} md={6} className="stat-item">
            <div className="stat-icon">
              <FaHardHat />
            </div>
            <div className="stat-number">
              <CountUp end={projects} duration={3} />+
            </div>
            <div className="stat-label">Projects</div>
          </Col>
          
          <Col lg={3} md={6} className="stat-item">
            <div className="stat-icon">
              <FaUsers />
            </div>
            <div className="stat-number">
              <CountUp end={clients} duration={3} />+
            </div>
            <div className="stat-label">Clients</div>
          </Col>
          
          <Col lg={3} md={6} className="stat-item">
            <div className="stat-icon">
              <FaCalendarAlt />
            </div>
            <div className="stat-number">
              <CountUp end={years} duration={3} />
            </div>
            <div className="stat-label">Years</div>
          </Col>

          <Col lg={3} md={6} className="stat-item">
            <div className="stat-icon">
              <FaAward />
            </div>
            <div className="stat-number">
              <CountUp end={awards} duration={3} />+
            </div>
            <div className="stat-label">Awards</div>
          </Col>
        </Row>
      </Container>
    </StatsSection>
  );
};

export default StatsCounter;