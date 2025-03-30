import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const StyledNavbar = styled(Navbar)`
  background-color: ${({ theme }) => theme.colors.primary || '#000000'};
  padding: 1rem 0;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  .navbar-brand {
    color: ${({ theme }) => theme.colors.secondary || '#FFFFFF'};
    font-weight: 700;
    font-size: 1.8rem;
    letter-spacing: 1px;
    
    span {
      color: ${({ theme }) => theme.colors.accent || '#FFD700'};
      font-weight: 700;
    }
  }
  
  .nav-link {
    color: ${({ theme }) => theme.colors.secondary || '#FFFFFF'};
    margin: 0 0.75rem;
    font-weight: 500;
    font-size: 1.1rem;
    position: relative;
    padding: 0.5rem 0;
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent || '#FFD700'};
      
      &::after {
        width: 100%;
      }
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.accent || '#FFD700'};
      transition: width 0.3s ease;
    }
  }
  
  .contact-cta {
    background-color: ${({ theme }) => theme.colors.accent || '#FFD700'};
    color: ${({ theme }) => theme.colors.primary || '#000000'};
    border-radius: 4px;
    padding: 0.5rem 1.2rem;
    margin-left: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #e6c200;
      transform: translateY(-2px);
    }
    
    svg {
      margin-right: 0.5rem;
    }
  }
`;

const CompanyNavbar = () => {
  return (
    <StyledNavbar expand="lg" variant="dark" fixed="top" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          MBK<span>Builders</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/" eventKey="1">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" eventKey="2">About</Nav.Link>
            <Nav.Link as={Link} to="/services" eventKey="3">Services</Nav.Link>
            <Nav.Link as={Link} to="/projects" eventKey="4">Projects</Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              eventKey="5"
              className="contact-cta d-flex align-items-center"
            >
              <FontAwesomeIcon icon={faPhone} />
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default CompanyNavbar;