import React from 'react'
import {Container} from 'react-bootstrap'
import Menu from '../assets/icon-menu.svg';
import NavMobile from './NavMobile'

const Header = () => {
    return (
      <Container fluid className="navbar-main d-flex flex-row align-items-center justify-content-between">
          <Container className="navbar-left">
            <img src={Menu} alt="Mobile Menu Icon"></img>
          </Container>
          <NavMobile />
          <Container className="navbar-right d-flex flex-row align-items-center justify-content-center">
             <p>Tristan Rais-Sherman</p>
          </Container>
          
      </Container>
    )
}

export default Header
