import React, {useState} from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Avatar} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../utils/Themes';
import Logo from '../utils/images/Logo.jpg'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuRounded } from "@mui/icons-material";

// import { useDispatch } from "react-redux";

const Mobileicon = styled.div`
  color: white;
  display: none;
  &:hover {
    color: lightgray;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const MobileMenu = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 90%;
  padding: 12px 40px 24px 40px;
  background-color: #333;
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Show or hide based on isOpen */
  padding: 20px;
  z-index: 1000; /* Ensure it's above other content */
  transition: transform 0.3s ease-in-out;

  & a {
    display: block;
    padding: 10px;
    color: white;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      background-color: #444;
    }
  }
  @media (min-width: 768px) {
    display: none; /* Hide the mobile menu on larger screens */
  }
`;
const NavItems = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const UserContainer = styled('div')`
   width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  padding: 0 6px;
`;

const TextButton = styled(Button)`
  color: white;
  font-size: 14px;
  &:hover {
    color: lightgray;
  }
`;
export default function Navbar() {
  // const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  return (
   
    <AppBar position="static" sx={{ backgroundColor: '#000000' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <Box 
      style={{ 
        textDecoration: 'none', 
        display: 'flex', 
        // Space between logo and menu
        alignItems: 'center', // Align all items vertically centered
        width: '100%' // Ensure it takes up full width
      }}
    >
      <Mobileicon sx={{ color: 'white' }} onClick={() => setisOpen(!isOpen)}>
        <MenuRounded />
      </Mobileicon>
      <Link to="/" style={{ display: 'flex', alignItems: 'center',textDecoration: 'none', marginLeft: '10px'}}>
      <Box 
          component="img" 
          src={Logo} 
          alt="Logo" 
          sx={{ height: 60, width: 60, marginRight: 2 }} // Adjust size and spacing
        />
      <Typography
          variant="h6"
          component="div"
          sx={{
            // flexGrow: 1,
            color: 'white',
            '&:hover': {
              color: '#6a6d72', // Change color on hover (you can use any color)
              cursor: 'pointer', 
              fontFamily: 'Host Grotesk, sans-serif', 
              fontSize: '20px',
              fontWeight: '700px'
            },
          }}
        >
          FITTRACK
        </Typography>
        </Link>
        </Box>
        <MobileMenu isOpen={isOpen}>
 
          <Link to="/">Dashboard</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/tutorials">Tutorials</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
       
        </MobileMenu>

        <NavItems>
        <Box sx={{ display: 'flex', gap: 2 }}>
        <Link to ='/'><Button color="inherit" sx={{ fontSize: '16px', color: 'white', '&:hover': { backgroundColor: '#6a6d72' } }}>Home</Button></Link>
        <Link to="/workouts"><Button color="inherit" sx={{ fontSize: '16px', color: 'white', '&:hover': { backgroundColor: '#6a6d72' } }}>Workouts</Button></Link>
        <Link to="/tutorials"><Button color="inherit" sx={{ fontSize: '16px',color: 'white', '&:hover': { backgroundColor: '#6a6d72' } }}>Tutorials</Button></Link>
        <Link to="/blogs"><Button color="inherit" sx={{ fontSize: '16px',color: 'white', '&:hover': { backgroundColor: '#6a6d72' } }}>Blog</Button></Link>
        <Link to="/contact"><Button color="inherit" sx={{ fontSize: '16px',color: 'white', '&:hover': { backgroundColor: '#6a6d72' } }}>Contact</Button></Link>
        </Box>
        </NavItems>
        
        
        
        <UserContainer>
          <Avatar/>
          <TextButton>Logout</TextButton>
        </UserContainer>
      </Toolbar>
    </AppBar>
  
  )
}
