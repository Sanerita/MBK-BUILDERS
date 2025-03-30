import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCardContainer = styled(Card)`
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};

  &:hover {
    transform: translateY(-5px);
  }

  .card-body {
    padding: 2rem;
  }

  .service-icon {
    color: ${props => props.theme.colors.accent};
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const ServiceCard = ({ service }) => {
  return (
    <ServiceCardContainer>
      <Card.Body className="text-center">
        <div className="service-icon">
          <FontAwesomeIcon icon={service.icon} />
        </div>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.Body>
    </ServiceCardContainer>
  );
};

export default ServiceCard;