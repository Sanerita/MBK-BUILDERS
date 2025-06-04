import React, { useState, useEffect } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import ProjectGallery from '../components/ProjectGallery';
import SectionHeader from '../components/SectionHeader';
import { useNavigate } from 'react-router-dom';

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

  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
`;

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'municipal', label: 'Municipal' }
  ];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filterParam = params.get('filter');
    if (filterParam && categories.some(cat => cat.id === filterParam)) {
      setActiveFilter(filterParam);
    }

    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        // Simulated data - replace with actual API call
        const simulatedData = [
          {
            id: 1,
            title: "Butterworth Residential Complex",
            type: "Residential",
            size: "2,400 sqm",
            duration: "8 months",
            images: ["/images/project1.jpg"],
            description: "12-unit residential complex with modern amenities",
            category: "residential"
          },
          {
            id: 2,
            title: "East London Office Park",
            type: "Commercial",
            size: "5,200 sqm",
            duration: "12 months",
            images: ["/images/project2.jpg"],
            description: "Modern office space development",
            category: "commercial"
          },
          {
            id: 3,
            title: "Mthatha Municipal Building",
            type: "Municipal",
            size: "3,800 sqm",
            duration: "10 months",
            images: ["/images/project3.jpg"],
            description: "Government administration building",
            category: "municipal"
          },
          {
            id: 4,
            title: "Port Alfred Luxury Villas",
            type: "Residential",
            size: "1,800 sqm",
            duration: "6 months",
            images: ["/images/project4.jpg"],
            description: "Beachfront luxury villa development",
            category: "residential"
          }
        ];
        
        await new Promise(resolve => setTimeout(resolve, 500));
        setProjects(simulatedData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (categoryId) => {
    setActiveFilter(categoryId);
    window.history.pushState(null, '', `?filter=${categoryId}`);
  };

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
              onClick={() => handleFilterClick(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {isLoading ? (
          <div className="loading-spinner">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <ProjectGallery projects={filteredProjects} />
        )}

        <div className="text-center mt-5">
          <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
            Request Project Consultation
          </Button>
        </div>
      </Container>
    </ProjectsContainer>
  );
};

export default ProjectsPage;