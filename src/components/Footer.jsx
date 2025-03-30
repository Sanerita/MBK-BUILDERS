// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  padding: 3rem 0;
  margin-top: 2rem;

  .footer-heading {
    color: ${props => props.theme.colors.accent};
    font-weight: bold;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  .contact-item {
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;

    svg {
      color: ${props => props.theme.colors.accent};
      margin-right: 0.75rem;
      margin-top: 0.25rem;
    }
  }

  .social-links {
    a {
      color: ${props => props.theme.colors.secondary};
      font-size: 1.5rem;
      margin-right: 1rem;
      transition: color 0.3s;

      &:hover {
        color: ${props => props.theme.colors.accent};
      }
    }
  }

  .copyright {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.5rem;
    margin-top: 2rem;
    text-align: center;
    font-size: 0.9rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="footer-heading">MBK Builders</h3>
            <p>Building Visions, Crafting Excellence in the Eastern Cape region since 2023.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>

          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="footer-heading">Quick Links</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
              <li><a href="/projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a></li>
              <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h3 className="footer-heading">Contact Info</h3>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>2544 Cuba Township, Butterworth, 4960</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>065 975 2025</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>angambuwako@icloud.com</span>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faClock} />
              <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="copyright">
            <p>© {new Date().getFullYear()} MBK Builders (Pty) Ltd. All Rights Reserved. | CIDB Grading: PE 1CE</p>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;