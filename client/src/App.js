import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {lightTheme} from './utils/Themes';
import {ThemeProvider} from 'styled-components';
import Authentication from './Pages/Authentication';
import Navbar from './components/Navbar';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;
const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`;
export default function App() {
  const[user, setUser] = useState(true);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
       {user? (
        <Container>
          <Navbar/>
        </Container>
       ):(
        <Container>
        <Authentication/>
      </Container>
       )}
      
      
      </BrowserRouter>
    </ThemeProvider>
  )
}
