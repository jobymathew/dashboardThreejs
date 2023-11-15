// Contact.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh; 
  padding-top: 20px; /* Top padding */
`;

const FormBox = styled.div`
  margin-top: 40px;
  background-color: rgba(0, 0, 0, 0.7); /* Transparent black */
  padding: 40px; 
  border-radius: 10px;
  text-align: center;
  width: 600px; 
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: white; 
`;

const FormInput = styled.input`
  width: calc(100% - 20px); /* 100% width with a bit of padding */
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: black; /* Black background */
  color: white; 
`;

const TextArea = styled.textarea`
  width: calc(100% - 20px); 
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: black; /* Black background */
  color: white; 
`;

const SubmitButton = styled.button`
  background-color: #ff6b6b; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  cursor: pointer;
`;

const Message = styled.p`
  margin-top: 15px;
  color: white; /* White text */
  font-family: Arial, sans-serif;
`;

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <ContactContainer>
      <FormBox>
        <form onSubmit={handleSubmit}>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <FormInput type="text" id="firstName" name="firstName" required />

          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <FormInput type="text" id="lastName" name="lastName" required />

          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput type="email" id="email" name="email" required />

          <FormLabel htmlFor="country">Country</FormLabel>
          <FormInput type="text" id="country" name="country" required />

          <FormLabel htmlFor="message">Your Message</FormLabel>
          <TextArea id="message" name="message" rows={4} required />

          <SubmitButton type="submit">Submit</SubmitButton>
        </form>

        {submitted ? <Message>Thank you! We will get back to you.</Message> : <Message />}
      </FormBox>
    </ContactContainer>
  );
};

export default Contact;
