// src/components/ServiceDetail.jsx
import React from 'react';
import { Accordion } from 'react-bootstrap';
import styled from 'styled-components';

const ServiceCard = styled.div`
  border: none;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  .accordion-header {
    background-color: ${({ theme }) => theme.colors.primary || '#000000'};
    
    button {
      color: ${({ theme }) => theme.colors.secondary || '#FFFFFF'};
      font-weight: 600;
      font-size: 1.1rem;
      
      &:not(.collapsed) {
        background-color: ${({ theme }) => theme.colors.primary || '#000000'};
        color: ${({ theme }) => theme.colors.accent || '#FFD700'};
      }
    }
  }
  
  .accordion-body {
    background-color: ${({ theme }) => theme.colors.secondary || '#FFFFFF'};
    color: ${({ theme }) => theme.colors.textDark || '#333333'};
    
    ul {
      padding-left: 1.5rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const ServiceDetail = ({ service, eventKey }) => {
  return (
    <ServiceCard>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{service.title}</Accordion.Header>
        <Accordion.Body>
          <p>{service.description}</p>
          {service.details && (
            <ul>
              {service.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
          {service.image && (
            <img 
              src={service.image} 
              alt={service.title} 
              className="img-fluid rounded mt-3"
            />
          )}
        </Accordion.Body>
      </Accordion.Item>
    </ServiceCard>
  );
};

export default ServiceDetail;