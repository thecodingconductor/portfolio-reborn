import React, {useContext} from 'react'
import NavContext from '../context/nav/navContext'
import {Container, Nav, Dropdown} from 'react-bootstrap'
import Menu from '../assets/icon-menu.svg';
import NavMobile from './NavMobile'
import {useHistory} from 'react-router-dom'

const Header = (props) => {

  const navContext = useContext(NavContext);

  const {mobileNavAction, projectsExpanded, navOpen} = navContext

  let history = useHistory();

  const openMobileHandler = () => {
    
    navOpen ? mobileNavAction(false) : mobileNavAction(true)
  }

  const returnHome = () => {
    history.push('/')
  }

  
  

    return (
      <Container fluid className="navbar-main-mobile">
          <Container className="navbar-left">
            <img src={Menu} className="menu-icons" alt="Mobile Menu Icon" onClick={() => openMobileHandler()}></img>
            <h4 className="desktop-title-left" onClick={returnHome}>Tristan Rais-Sherman</h4>
          </Container>
          
          {navOpen && 
            <NavMobile />}
          
          <Container className="navbar-right d-flex flex-row align-items-center">
             <p>Tristan Rais-Sherman</p>
              <Nav className="flex-row desktop-nav-wrapper justify-content-between">
                <Nav.Link className="desktop-nav-link">Projects</Nav.Link>
                <Nav.Link className="desktop-nav-link" href="mailto: tristan.raissherman@gmail.com">Contact</Nav.Link>
                <Nav.Link className="desktop-nav-link" href="https://www.twitch.tv/orchestraobsessed" target="_blank">Twitch</Nav.Link>
              </Nav>  
          </Container>
          
      </Container>
    )
}

export default Header


