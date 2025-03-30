import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';
import heroImage from "../assets/hero-image.jpg";
import ServiceCard from "../components/ServiceCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import StatsCounter from "../components/StatsCounter";
import HeroSection from '../components/HeroSection'; // Adjust path as needed

const HomePage = () => {
  const services = [
    {
      title: "Residential Construction",
      description: "From dream homes to apartment complexes, we deliver quality residential spaces with attention to detail and timely completion.",
      icon: "home"
    },
    // Add 4-5 more services...
  ];

  return (
    <>
      <HeroSection bgImage={heroImage}>
        <Container>
          <h1>Building Excellence in the Eastern Cape Since 2023</h1>
          <p className="lead">CIDB Grading: PE 1CE | B-BBEE Level 1 Contributor</p>
          <Button variant="gold" size="lg">Get a Free Quote</Button>
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
  projects={24}  // Update with your actual project count
  clients={18}   // Update with your actual client count
  years={1}      // Update with years in operation
/>

      <TestimonialCarousel />

      <CtaSection>
        <Container>
          <h2>Ready to Start Your Project?</h2>
          <Button variant="outline-light" size="lg">Contact Us Today</Button>
        </Container>
      </CtaSection>
    </>
  );
};

export default HomePage;