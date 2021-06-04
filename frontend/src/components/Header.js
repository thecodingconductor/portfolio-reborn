import React, {useState, useContext, useEffect} from 'react'
import NavContext from '../context/nav/navContext'
import {Container, Nav, Dropdown} from 'react-bootstrap'
import Menu from '../assets/icon-menu.svg';
import NavMobile from './NavMobile'

const Header = () => {

  const navContext = useContext(NavContext);

  const {mobileNavAction, projectsExpanded, navOpen} = navContext

  const openMobileHandler = () => {
    
    navOpen ? mobileNavAction(false) : mobileNavAction(true)
  }

    return (
      <Container fluid className="navbar-main-mobile">
          <Container className="navbar-left">
            <img src={Menu} className="menu-icons" alt="Mobile Menu Icon" onClick={() => openMobileHandler()}></img>
            <h4 className="desktop-title-left">Tristan Rais-Sherman</h4>
          </Container>
          
          {navOpen && 
            <NavMobile />}
          
          <Container className="navbar-right d-flex flex-row align-items-center">
             <p>Tristan Rais-Sherman</p>
              <Nav className="flex-row desktop-nav-wrapper justify-content-between">
                <Nav.Link className="desktop-nav-link">Projects</Nav.Link>
                <Nav.Link className="desktop-nav-link">Contact</Nav.Link>
                <Nav.Link className="desktop-nav-link">Twitch</Nav.Link>
              </Nav>  
          </Container>
          
      </Container>
    )
}

export default Header


