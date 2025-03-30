import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectGallery from '../components/ProjectGallery';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Butterworth Residential Complex",
      type: "Residential",
      size: "2,400 sqm",
      duration: "8 months",
      images: ["project1-1.jpg", "project1-2.jpg"],
      description: "12-unit residential complex with modern amenities..."
    },
    // Add 6-8 projects...
  ];

  return (
    <ProjectsContainer>
      <Container>
        <SectionHeader
          title="Our Portfolio"
          subtitle="Recent projects showcasing our quality and expertise"
        />

        <ProjectFilter />
        
        <ProjectGallery projects={projects} />

        <ClientLogos />
      </Container>
    </ProjectsContainer>
  );
};

export default ProjectsPage;