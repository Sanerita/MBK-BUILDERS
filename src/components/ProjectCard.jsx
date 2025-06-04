import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }

  .card-img-top {
    height: 200px;
    object-fit: cover;
    background-color: #f8f9fa;
  }

  .card-body {
    padding: 1.25rem;
  }

  .card-title {
    font-weight: 600;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.primary || '#2c3e50'};
  }

  .card-text {
    color: #555;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  .card-footer {
    background-color: white;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0.75rem 1.25rem;
  }
`;

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!project) {
    return (
      <StyledCard>
        <Card.Body>
          <Card.Text>Project data not available</Card.Text>
        </Card.Body>
      </StyledCard>
    );
  }

  return (
    <StyledCard>
      <div style={{ position: 'relative', height: '200px' }}>
        {!imageLoaded && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f8f9fa'
          }}>
            <Spinner animation="border" variant="secondary" size="sm" />
          </div>
        )}
        <Card.Img
          variant="top"
          src={project.image}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
          alt={project.title || 'Project image'}
          loading="lazy"
        />
      </div>
      <Card.Body>
        <Card.Title>{project.title || 'Untitled Project'}</Card.Title>
        {project.location && (
          <Card.Text>
            <strong>Location:</strong> {project.location}
          </Card.Text>
        )}
        {project.description && (
          <Card.Text>{project.description}</Card.Text>
        )}
      </Card.Body>
      {project.year && (
        <Card.Footer>
          <small className="text-muted">
            {project.completed ? 'Completed' : 'Expected completion'}: {project.year}
          </small>
        </Card.Footer>
      )}
    </StyledCard>
  );
};

export default ProjectCard;