// src/components/ProjectCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin-bottom: 1.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <StyledCard>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          <strong>Location:</strong> {project.location}
        </Card.Text>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Completed: {project.year}</small>
      </Card.Footer>
    </StyledCard>
  );
};

export default ProjectCard;