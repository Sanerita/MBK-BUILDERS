import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const ServiceCardContainer = styled(Card)`
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  overflow: hidden;
  background: white;
  margin-bottom: 1.5rem;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  .card-body {
    padding: 2.5rem;
    text-align: center;
  }

  .service-icon {
    color: ${props => props.theme.colors.accent || '#ffd700'};
    font-size: 3rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary || '#000000'};
  }

  .card-text {
    color: ${props => props.theme.colors.textDark || '#555555'};
    line-height: 1.6;
  }
`;

const ServiceCard = ({ service }) => {
  return (
    <ServiceCardContainer>
      <Card.Body>
        <div className="service-icon">
          {service.icon}
        </div>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.Body>
    </ServiceCardContainer>
  );
};

export default ServiceCard;