import React from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import styled from 'styled-components';
// import teamImage from "../assets/team.jpg";

const AboutPage = () => {
  return (
    <AboutContainer>
      <Container>
        <SectionHeader
          title="About MBK Builders"
          subtitle="Our Story, Values, and Commitment to Excellence"
        />

        <Row className="align-items-center mb-5">
          {/* <Col md={6}>
            <img src={teamImage} alt="MBK Builders Team" className="img-fluid rounded" />
          </Col> */}
          <Col md={6}>
            <h3>Our Story</h3>
            <p>Founded in 2023 in Butterworth, MBK Builders has quickly established itself as a trusted name in Eastern Cape construction...</p>
            <ul className="styled-list">
              <li>Registered with CIDB (PE 1CE)</li>
              <li>B-BBEE Level 1 Contributor</li>
              <li>Fully insured and compliant</li>
            </ul>
          </Col>
        </Row>

        <Tabs defaultActiveKey="mission" className="mb-4">
          <Tab eventKey="mission" title="Our Mission">
            <div className="p-4">
              <h4>Building with Purpose</h4>
              <p>To deliver innovative, cost-effective construction services while fostering local job creation and sustainable development...</p>
            </div>
          </Tab>
          <Tab eventKey="values" title="Our Values">
            {/* Tab content... */}
          </Tab>
          <Tab eventKey="team" title="Our Team">
            {/* Team members... */}
          </Tab>
        </Tabs>

        <CertificationsSection>
          {/* Certifications badges... */}
        </CertificationsSection>
      </Container>
    </AboutContainer>
  );
};

export default AboutPage;