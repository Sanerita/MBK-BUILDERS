import React, { useState } from 'react';
import { Container, Accordion, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ServiceDetail from '../components/ServiceDetail';
import { FaHome, FaBuilding, FaTools, FaRoad } from 'react-icons/fa';
import SectionHeader from "../components/SectionHeader";
import { useNavigate } from 'react-router-dom';

const ServicesContainer = styled.div`
  padding: 5rem 0;
  
  .filter-btn {
    margin: 0 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.primary || '#000000'};
    color: ${({ theme }) => theme.colors.secondary || '#FFFFFF'};
    border: 2px solid ${({ theme }) => theme.colors.primary || '#000000'};
    font-weight: 600;
    
    &:hover, &.active {
      background-color: ${({ theme }) => theme.colors.accent || '#FFD700'};
      color: ${({ theme }) => theme.colors.primary || '#000000'};
      border-color: ${({ theme }) => theme.colors.accent || '#FFD700'};
    }
  }
  
  .service-icon {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.accent || '#FFD700'};
    margin-right: 1rem;
  }
`;

const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  
  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description: "Complete home building services from foundation to finishing touches.",
      details: [
        "Custom home construction",
        "Townhouse developments",
        "Home extensions",
        "Structural renovations"
      ],
      type: "residential",
      icon: <FaHome />
    },
    {
      id: 2,
      title: "Commercial Construction",
      description: "Professional commercial building solutions for businesses.",
      details: [
        "Office buildings",
        "Retail spaces",
        "Industrial facilities",
        "Mixed-use developments"
      ],
      type: "commercial",
      icon: <FaBuilding />
    },
    {
      id: 3,
      title: "Renovation Services",
      description: "Transforming existing spaces into modern, functional areas.",
      details: [
        "Kitchen remodeling",
        "Bathroom renovations",
        "Whole-house makeovers",
        "Structural upgrades"
      ],
      type: "renovation",
      icon: <FaTools />
    },
    {
      id: 4,
      title: "Civil Works",
      description: "Infrastructure and public works construction services.",
      details: [
        "Road construction",
        "Bridge building",
        "Drainage systems",
        "Public utilities"
      ],
      type: "civil",
      icon: <FaRoad />
    }
  ];

  const serviceTypes = [
    { id: 'all', label: 'All Services' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Renovations' },
    { id: 'civil', label: 'Civil Works' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.type === activeFilter);

  return (
    <ServicesContainer>
      <Container>
        <SectionHeader
          title="Our Construction Services"
          subtitle="Comprehensive solutions for all your building needs"
        />

        <div className="text-center mb-5">
          <ButtonGroup>
            {serviceTypes.map((type) => (
              <Button
                key={type.id}
                className={`filter-btn ${activeFilter === type.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(type.id)}
              >
                {type.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        <Row>
          <Col lg={8} className="mx-auto">
            <Accordion defaultActiveKey="0">
              {filteredServices.map((service, index) => (
                <ServiceDetail 
                  key={service.id}
                  service={service}
                  eventKey={index.toString()}
                />
              ))}
            </Accordion>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
            Get a Free Quote
          </Button>
        </div>
      </Container>
    </ServicesContainer>
  );
};

export default ServicesPage;