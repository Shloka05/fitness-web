
import React from 'react'
import styled from 'styled-components'
import TextInput from './TextInput';
// import { Button } from '@mui/material';
import Button from './Button';
const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
    font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
    font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;
export default function SignUp() {
  return (
    <div>
      <Container>
        <div>
            <Title>Welcome to Fittrack 👋</Title>
            <Span>Please Login with your details here</Span>
        </div>
        <div style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}>
             <TextInput 
                label = "Full name" 
                placeholder="Enter your full name"
            />
            <TextInput 
                label = "Email Address" 
                placeholder="Enter your email address"
            />
            <TextInput 
                label = "Password" 
                placeholder="Enter your password"
                password
            />
            <Button text="SignUp"/>
        </div>
      </Container>
    </div>
  )
}


