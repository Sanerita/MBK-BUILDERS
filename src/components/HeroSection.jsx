import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), 
              url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  color: white;
  text-align: center;
  padding: 4rem 0;

  /* Mobile-first approach for background attachment */
  background-attachment: scroll;
  
  @media (min-width: 768px) {
    background-attachment: fixed;
  }

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
    font-size: 2.2rem; /* Smaller default for mobile */
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    line-height: 1.2;
    
    @media (min-width: 768px) {
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }
  }

  .lead {
    font-size: 1.2rem; /* Smaller default for mobile */
    margin-bottom: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    line-height: 1.4;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }

  .btn {
    padding: 0.6rem 1.5rem; /* Smaller button on mobile */
    font-size: 1rem;
    font-weight: 600;
    border-radius: 50px;
    transition: all 0.3s ease;
    
    @media (min-width: 768px) {
      padding: 0.75rem 2rem;
      font-size: 1.1rem;
    }
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  }

  /* Adjust height for mobile */
  @media (max-width: 576px) {
    min-height: 70vh;
    padding: 3rem 0;
    background-position: 60% center; /* Better image cropping on mobile */
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