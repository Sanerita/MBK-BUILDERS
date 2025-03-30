import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import heroImage from "../assets/hero-image.jpg";

// Component imports with error handling
const ServiceCard = React.lazy(() => import("../components/ServiceCard"));
const TestimonialCarousel = React.lazy(() => import("../components/TestimonialCarousel"));
const StatsCounter = React.lazy(() => import("../components/StatsCounter"));
const HeroSection = React.lazy(() => import("../components/HeroSection"));
const SectionHeader = React.lazy(() => import("../components/SectionHeader"));

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
  const services = [
    {
      title: "Residential Construction",
      description: "From dream homes to apartment complexes, we deliver quality residential spaces with attention to detail and timely completion.",
      icon: "home"
    },
    {
      title: "Commercial Buildings",
      description: "Office spaces, retail centers, and mixed-use developments designed for functionality and aesthetic appeal.",
      icon: "building"
    },
    {
      title: "Renovations & Remodeling",
      description: "Transform existing spaces with our expert renovation services, preserving structure while modernizing design.",
      icon: "tools"
    },
    {
      title: "Civil Engineering",
      description: "Infrastructure projects including roads, bridges, and utilities with precision engineering.",
      icon: "road"
    },
    {
      title: "Project Management",
      description: "End-to-end project oversight ensuring quality, budget adherence, and schedule compliance.",
      icon: "clipboard-check"
    },
    {
      title: "Sustainable Construction",
      description: "Eco-friendly building solutions incorporating green materials and energy-efficient designs.",
      icon: "leaf"
    }
  ];

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <HeroSection bgImage={heroImage}>
          <Container className="text-center text-white">
            <h1 className="display-4 fw-bold mb-3">Building Excellence in the Eastern Cape Since 2023</h1>
            <p className="lead mb-4">CIDB Grading: PE 1CE | B-BBEE Level 1 Contributor</p>
            <Button variant="warning" size="lg" className="px-4 py-2">Get a Free Quote</Button>
          </Container>
        </HeroSection>

        <ServicesSection>
          <Container>
            <SectionHeader 
              title="Our Core Services" 
              subtitle="Comprehensive construction solutions tailored to your needs"
            />
            <Row className="g-4">
              {services.map((service, index) => (
                <Col md={4} key={index}>
                  <ServiceCard service={service} />
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
            <Button variant="outline-light" size="lg" className="px-4 py-2">Contact Us Today</Button>
          </Container>
        </CtaSection>
      </React.Suspense>
    </>
  );
};

export default HomePage;