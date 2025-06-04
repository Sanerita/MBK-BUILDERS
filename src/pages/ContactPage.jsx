import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import PageHeader from '../components/PageHeader';

const StyledContact = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  padding: 4rem 0;
  
  .contact-info {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    padding: 2rem;
    border-radius: 8px;
    height: 100%;
    
    h3 {
      color: ${props => props.theme.colors.accent};
      margin-bottom: 1.5rem;
    }
    
    p {
      margin-bottom: 1.5rem;
    }
    
    .contact-item {
      margin-bottom: 1rem;
      
      i {
        color: ${props => props.theme.colors.accent};
        margin-right: 0.5rem;
        width: 20px;
        text-align: center;
      }
    }
  }
  
  .contact-form {
    background: ${props => props.theme.colors.primary};
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    .form-control {
      background-color: #222;
      border: 1px solid #444;
      color: ${props => props.theme.colors.secondary};
      
      &:focus {
        border-color: ${props => props.theme.colors.accent};
        box-shadow: 0 0 0 0.25rem rgba(255, 215, 0, 0.25);
      }
    }
    
    .btn-submit {
      background-color: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.primary};
      font-weight: bold;
      border: none;
      padding: 0.75rem 2rem;
      
      &:hover {
        background-color: #e6c200;
      }
    }
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await emailjs.send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        formData,
        'your_user_id' // Replace with your EmailJS user ID
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', err);
    }
  };

  return (
    <StyledContact>
      <Container>
        <PageHeader 
          title="Contact MBK Builders" 
          subtitle="Get in touch for your construction needs in Eastern Cape"
        />
        
        <Row className="mt-5">
          <Col md={5} className="mb-4 mb-md-0">
            <div className="contact-info">
              <h3>Our Office</h3>
              <p>We're ready to take on your construction projects throughout the Eastern Cape region.</p>
              
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>2544 Cuba Township, Butterworth, 4960</span>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>065 975 2025</span>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>angambuwako@icloud.com</span>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-certificate"></i>
                <span>CIDB Grading: PE 1CE</span>
              </div>
            </div>
          </Col>
          
          <Col md={7}>
            {submitted ? (
              <Alert variant="success">
                Thank you for your message! We'll get back to you soon.
              </Alert>
            ) : (
              <div className="contact-form">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <div className="text-center">
                    <Button type="submit" className="btn-submit">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </StyledContact>
  );
};

export default ContactPage;