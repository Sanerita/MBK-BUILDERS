import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';
import ProjectGallery from '../components/ProjectGallery';
import SectionHeader from '../components/SectionHeader';

const ProjectsContainer = styled.div`
  padding: 5rem 0;
  background-color: #f8f9fa;
  
  .filter-btn {
    margin: 0 0.5rem 0.5rem;
    border: 2px solid ${props => props.theme.colors.primary || '#000'};
    color: ${props => props.theme.colors.primary || '#000'};
    background: transparent;
    font-weight: 600;
    
    &:hover, &.active {
      background: ${props => props.theme.colors.primary || '#000'};
      color: white;
    }
  }
`;

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Butterworth Residential Complex",
      type: "Residential",
      size: "2,400 sqm",
      duration: "8 months",
      images: ["project1.jpg"],
      description: "12-unit residential complex with modern amenities",
      category: "residential"
    },
    {
      id: 2,
      title: "East London Office Park",
      type: "Commercial",
      size: "5,200 sqm",
      duration: "12 months",
      images: ["project2.jpg"],
      description: "Modern office space development",
      category: "commercial"
    },
    // Add 4-6 more projects...
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'municipal', label: 'Municipal' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsContainer>
      <Container>
        <SectionHeader
          title="Our Portfolio"
          subtitle="Recent projects showcasing our quality and expertise"
        />

        <div className="text-center mb-5">
          {categories.map(category => (
            <Button
              key={category.id}
              variant="outline-dark"
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        <ProjectGallery projects={filteredProjects} />

        <div className="text-center mt-5">
          <Button variant="primary" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </Container>
    </ProjectsContainer>
  );
};

export default ProjectsPage;