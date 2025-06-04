import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

const GalleryContainer = styled.div`
  margin: 2rem 0;
  
  .project-item {
    margin-bottom: 2rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
  
  .project-image-container {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    height: 250px;
    background: #f5f5f5;
  }
  
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
  
  .project-title {
    color: ${({ theme }) => theme.colors.primary || '#000000'};
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .project-meta {
    color: ${({ theme }) => theme.colors.textDark || '#333333'};
    font-size: 0.9rem;
    
    span {
      margin-right: 1rem;
      
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const ProjectItem = ({ project }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  return (
    <Col md={6} lg={4} className="project-item">
      <div ref={ref} className="project-image-container">
        {inView && (
          <img
            src={project.images[0]}
            alt={project.title}
            className="project-image"
            loading="lazy"
          />
        )}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <div className="project-meta">
        <span>{project.type}</span>
        <span>{project.size}</span>
        <span>{project.duration}</span>
      </div>
    </Col>
  );
};

const ProjectGallery = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-5">
        <p>No projects to display.</p>
      </div>
    );
  }

  return (
    <GalleryContainer>
      <Row>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Row>
    </GalleryContainer>
  );
};

export default ProjectGallery;