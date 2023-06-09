import React, { useContext } from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthProvider';

export default function NavBar() {

  const { user, setUser} = useContext(AuthContext)

  const navigate = useNavigate()
  const handleLogOut = () => {
    setUser({...user, name: '', email: '', isAuthenticated: false})
    navigate('/login')
  }
  
  return (
    <Navbar className='inactive' bg="secondary" expand="lg">
      <Container>
        <Navbar.Brand>
          <NavLink className={'inactiveLink'} to='/marvel'>Asociaciones</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='nav-container'>
            <Nav className="me-auto">
              <NavLink className={({ isActive }) => isActive ? "custom-link nav-link activelink" : "custom-link nav-link inactiveLink"} to='/marvel'>Marvel</NavLink>
              <NavLink className={({ isActive }) => isActive ? "custom-link nav-link activelink" : "custom-link nav-link inactiveLink"} to='/dc'>DC</NavLink>
              <NavLink className={({ isActive }) => isActive ? "custom-link nav-link activelink" : "custom-link nav-link inactiveLink"} to='/search'>Search</NavLink>
            </Nav>
            <Nav className='nav-logOut'>
              <div className='register-style'>
                <Navbar.Text>{user.name}</Navbar.Text>
                <Navbar.Text className='email-style'>{user.email}</Navbar.Text>
              </div>
              <Button 
                className='button-logOut-style' 
                variant='danger'
                onClick={handleLogOut}
              >
                <span>LogOut</span>
              </Button>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



