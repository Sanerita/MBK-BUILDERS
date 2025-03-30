// src/components/PageHeader.jsx
import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  p {
    color: ${props => props.theme.colors.textDark};
    font-size: 1.2rem;
  }
`;

const PageHeader = ({ title, subtitle }) => {
  return (
    <Container>
      <HeaderContainer>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </HeaderContainer>
    </Container>
  );
};

export default PageHeader;