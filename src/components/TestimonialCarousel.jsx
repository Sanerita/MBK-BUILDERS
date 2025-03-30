import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const TestimonialItem = styled.div`
  padding: 2rem;
  text-align: center;
`;

const TestimonialCarousel = () => {
  const testimonials = [
    { id: 1, name: "John Doe", text: "Great work!" },
    { id: 2, name: "Jane Smith", text: "Excellent service" }
  ];

  return (
    <Container className="my-5">
      <Carousel indicators={false}>
        {testimonials.map((testimonial) => (
          <Carousel.Item key={testimonial.id}>
            <TestimonialItem>
              <p>{testimonial.text}</p>
              <h5>{testimonial.name}</h5>
            </TestimonialItem>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default TestimonialCarousel;