import React, { useState } from 'react';
import { Container, Accordion, ButtonGroup, Button } from 'react-bootstrap';
import ServiceDetail from '../components/ServiceDetail';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  
  .filter-btn {
    margin: 0 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.primary || '#000000'};
    color: ${({ theme }) => theme.colors.secondary || '#FFFFFF'};
    border: 1px solid ${({ theme }) => theme.colors.accent || '#FFD700'};
    
    &:hover, &.active {
      background-color: ${({ theme }) => theme.colors.accent || '#FFD700'};
      color: ${({ theme }) => theme.colors.primary || '#000000'};
      border-color: ${({ theme }) => theme.colors.accent || '#FFD700'};
    }
  }
`;

const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
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
      image: "/images/residential.jpg"
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
      image: "/images/commercial.jpg"
    },
    // Add more services with types...
  ];

  const serviceTypes = [
    { id: 'all', label: 'All Services' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'renovation', label: 'Renovations' },
    // Add more types as needed
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.type === activeFilter);

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Our Construction Services</h1>
      
      <FilterContainer>
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
      </FilterContainer>

      <Accordion defaultActiveKey="0">
        {filteredServices.map((service, index) => (
          <ServiceDetail 
            key={service.id}
            service={service}
            eventKey={index.toString()}
          />
        ))}
      </Accordion>
    </Container>
  );
};

export default ServicesPage;