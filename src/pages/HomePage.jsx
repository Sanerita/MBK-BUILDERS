import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import heroImage from "../assets/hero-image.jpg";
import { 
  FaHome, 
  FaBuilding, 
  FaTools, 
  FaRoad, 
  FaClipboardCheck, 
  FaLeaf,
  FaHardHat,
  FaTruck,
  FaPaintRoller,
  FaCity,
  FaTint,
  FaBolt
} from 'react-icons/fa';

// Components
import ServiceCard from "../components/ServiceCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import StatsCounter from "../components/StatsCounter";
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';

// Styled components
const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: #f8f9fa;
`;

const CtaSection = styled.section`
  padding: 4rem 0;
  background-color: #343a40;
  color: white;
  text-align: center;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Residential Construction",
      description: "From dream homes to apartment complexes, we deliver quality residential spaces with attention to detail and timely completion.",
      icon: <FaHome size={24} />,
      onClick: () => navigate('/services#residential')
    },
    {
      title: "Commercial Buildings",
      description: "Office spaces, retail centers, and mixed-use developments designed for functionality and aesthetic appeal.",
      icon: <FaBuilding size={24} />,
      onClick: () => navigate('/services#commercial')
    },
    {
      title: "Renovations & Remodeling",
      description: "Transform existing spaces with our expert renovation services, preserving structure while modernizing design.",
      icon: <FaTools size={24} />,
      onClick: () => navigate('/services#renovation')
    },
    {
      title: "Civil Engineering",
      description: "Infrastructure projects including roads, bridges, and utilities with precision engineering.",
      icon: <FaRoad size={24} />,
      onClick: () => navigate('/services#civil')
    },
    {
      title: "Project Management",
      description: "End-to-end project oversight ensuring quality, budget adherence, and schedule compliance.",
      icon: <FaClipboardCheck size={24} />,
      onClick: () => navigate('/services')
    },
    {
      title: "Sustainable Construction",
      description: "Eco-friendly building solutions incorporating green materials and energy-efficient designs.",
      icon: <FaLeaf size={24} />,
      onClick: () => navigate('/services')
    },
    {
      title: "Industrial Construction",
      description: "Specialized construction services for factories, warehouses, and industrial facilities.",
      icon: <FaHardHat size={24} />,
      onClick: () => navigate('/services')
    },
    {
      title: "Site Preparation",
      description: "Comprehensive land clearing, grading, and excavation services for your construction project.",
      icon: <FaTruck size={24} />,
      onClick: () => navigate('/services')
    },
    {
      title: "Interior Finishing",
      description: "High-quality interior work including drywall, flooring, painting, and trim installation.",
      icon: <FaPaintRoller size={24} />,
      onClick: () => navigate('/services')
    },
    {
      title: "Municipal Projects",
      description: "Public works construction including community centers, schools, and government buildings.",
      icon: <FaCity size={24} />,
      onClick: () => navigate('/services')
    },
    {
      title: "Plumbing Systems",
      description: "Complete plumbing installation and repair services for all types of buildings.",
      icon: <FaTint size={24} />,
      onClick: () => navigate('/services')
    },
    {
      title: "Electrical Installations",
      description: "Professional electrical wiring, lighting, and system installations meeting all safety codes.",
      icon: <FaBolt size={24} />,
      onClick: () => navigate('/services')
    }
  ];

  return (
    <>
      <HeroSection bgImage={heroImage}>
        <Container className="text-center text-white">
          <h1 className="display-4 fw-bold mb-3">Building Excellence in the Eastern Cape Since 2023</h1>
          <p className="lead mb-4">CIDB Grading: PE 1CE | B-BBEE Level 1 Contributor</p>
          <Button 
            variant="warning" 
            size="lg" 
            className="px-4 py-2"
            onClick={() => navigate('/contact')}
          >
            Get a Free Quote
          </Button>
        </Container>
      </HeroSection>

      <ServicesSection>
        <Container>
          <SectionHeader 
            title="Our Comprehensive Services" 
            subtitle="Full-spectrum construction solutions for all your building needs"
          />
          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} md={4} sm={6} xs={12}>
                <ServiceCard 
                  service={service} 
                  onClick={service.onClick}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </ServicesSection>

      <StatsCounter 
        projects={24}
        clients={18}
        years={1}
        awards={3}
      />

      <TestimonialCarousel />

      <CtaSection>
        <Container>
          <h2 className="mb-4">Ready to Start Your Project?</h2>
          <p className="mb-4">We offer complete construction solutions for projects of all sizes.</p>
          <Button 
            variant="outline-light" 
            size="lg" 
            className="px-4 py-2"
            onClick={() => navigate('/contact')}
          >
            Contact Us Today
          </Button>
        </Container>
      </CtaSection>
    </>
  );
};

export default HomePage;