import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  padding: 8rem 0;
  display: flex;
  align-items: center;
`;

const HeroSection = ({ bgImage, children }) => {
  return (
    <HeroContainer $bgImage={bgImage}>
      {children}
    </HeroContainer>
  );
};

export default HeroSection;