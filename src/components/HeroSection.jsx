import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), 
              url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  color: white;
  text-align: center;
  padding: 4rem 0;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  .lead {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .btn {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  }
`;

const HeroSection = ({ bgImage, children }) => {
  return (
    <HeroContainer $bgImage={bgImage}>
      <Container className="hero-content">
        {children}
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;