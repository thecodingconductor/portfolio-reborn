import React, {useState, useContext, useEffect} from 'react'
import NavContext from '../context/nav/navContext'
import {Container} from 'react-bootstrap'
import Menu from '../assets/icon-menu.svg';
import NavMobile from './NavMobile'

const Header = () => {

  const navContext = useContext(NavContext);

  const {mobileNavAction, projectsExpanded, navOpen} = navContext

  const openMobileHandler = () => {
    
    navOpen ? mobileNavAction(false) : mobileNavAction(true)
  }

    return (
      <Container fluid className="navbar-main d-flex flex-row align-items-center justify-content-between">
          <Container className="navbar-left">
            <img src={Menu} alt="Mobile Menu Icon" onClick={() => openMobileHandler()}></img>
          </Container>
          {navOpen && 
            <NavMobile />}
          {/* <NavMobile /> */}
          <Container className="navbar-right d-flex flex-row align-items-center justify-content-center">
             <p>Tristan Rais-Sherman</p>
          </Container>
          
      </Container>
    )
}

export default Header
