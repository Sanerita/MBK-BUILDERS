// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.primary || '#1a1a1a'};
  color: ${props => props.theme.colors.secondary || '#ffffff'};
  padding: 4rem 0 2rem;
  margin-top: 4rem;

  .footer-heading {
    color: ${props => props.theme.colors.accent || '#ffd700'};
    font-weight: 700;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    position: relative;
    padding-bottom: 0.75rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: ${props => props.theme.colors.accent || '#ffd700'};
    }
  }

  .contact-item {
    margin-bottom: 1.25rem;
    display: flex;
    align-items: flex-start;
    line-height: 1.6;

    svg {
      color: ${props => props.theme.colors.accent || '#ffd700'};
      margin-right: 1rem;
      margin-top: 0.25rem;
      font-size: 1.1rem;
    }
  }

  .social-links {
    margin-top: 1.5rem;
    
    a {
      color: ${props => props.theme.colors.secondary || '#ffffff'};
      font-size: 1.5rem;
      margin-right: 1.25rem;
      transition: all 0.3s ease;
      
      &:hover {
        color: ${props => props.theme.colors.accent || '#ffd700'};
        transform: translateY(-3px);
      }
    }
  }

  .quick-links {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.8rem;
      
      a {
        color: ${props => props.theme.colors.secondary || '#ffffff'};
        text-decoration: none;
        transition: all 0.3s ease;
        display: inline-block;
        
        &:hover {
          color: ${props => props.theme.colors.accent || '#ffd700'};
          transform: translateX(5px);
        }
      }
    }
  }

  .copyright {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 2rem;
    margin-top: 3rem;
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-5 mb-md-0">
            <h3 className="footer-heading">MBK Builders</h3>
            <p>Building Visions, Crafting Excellence in the Eastern Cape region since 2023.</p>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-5 mb-md-0">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="quick-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>

          <Col lg={6} md={12}>
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
              <span>angambuwako@mbkbuilders.co.za</span>
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