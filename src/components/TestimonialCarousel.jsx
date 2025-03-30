import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const TestimonialSection = styled.div`
  padding: 4rem 0;
  background-color: ${props => props.theme.colors.secondary};
  
  .carousel-item {
    padding: 2rem;
    text-align: center;
  }
  
  .testimonial-text {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 2rem;
  }
  
  .client-name {
    color: ${props => props.theme.colors.accent};
    font-weight: bold;
  }
  
  .client-title {
    color: ${props => props.theme.colors.textDark};
    font-style: italic;
  }
`;

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: "MBK Builders delivered exceptional quality on our home renovation. Their attention to detail and professionalism was outstanding.",
      name: "John Smith",
      title: "Homeowner, Butterworth"
    },
    {
      id: 2,
      text: "We've worked with many contractors, but MBK's commercial construction team stands out for their reliability and craftsmanship.",
      name: "Sarah Johnson",
      title: "Business Owner, East London"
    },
    // Add more testimonials as needed
  ];

  return (
    <TestimonialSection>
      <Container>
        <h2 className="text-center mb-5">Client Testimonials</h2>
        <Carousel indicators={false}>
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id}>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="client-name">{testimonial.name}</p>
              <p className="client-title">{testimonial.title}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </TestimonialSection>
  );
};

export default TestimonialCarousel;