import React, {useState} from 'react'
// import NavContext from '../context/nav/navContext'
import {Container, Nav, DropdownButton, Dropdown} from 'react-bootstrap'
import Menu from '../assets/icon-menu.svg';
import NavMobile from './NavMobile'
import {useHistory} from 'react-router-dom'
// import {CSSTransition} from 'react-transition-group'
import useDelayUnmount from '../hooks/useDelayUnmount'


const Header = (props) => {

  // const navContext = useContext(NavContext);
  // const {mobileNavAction, navOpen, testNavOpen} = navContext

  // const [navOpen, setNavOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const showDiv = useDelayUnmount(isMounted, 250);

  let history = useHistory();

  // const mountedStyle = {animation: "inAnimation 250ms ease-in"}
  // const unmountedStyle = {
  //   animation: "outAnimation 270ms ease-out",
  //   animationFillMode: "forwards"
  // }

  // const openMobileHandler = () => {
    
  //   navOpen ? mobileNavAction(false) : mobileNavAction(true)
  // }

  // const testOpenMobileHandler = () => {
  //   testNavOpen
  // }

  const returnHome = () => {
    history.push('/')
  }






  // const [state, show, hide] = useDelayUnmount();

    return (
      <Container fluid className="navbar-main-mobile">
          <Container className="navbar-left" fluid>
            <img src={Menu} className="menu-icons" alt="Mobile Menu Icon" onClick={() => setIsMounted(!isMounted)}></img>
            <h4 className="desktop-title-left" onClick={returnHome}>Tristan Rais-Sherman</h4>
          </Container>
          
          {showDiv && 
            <NavMobile  isMounted={isMounted} setIsMounted={setIsMounted}/>}
          
          <Container className="navbar-right d-flex flex-row align-items-center" fluid>
             <p className="mobile-title-right" onClick={returnHome}>Tristan Rais-Sherman</p>
              <Nav className="flex-row desktop-nav-wrapper justify-content-between">
      
                <DropdownButton id="dropdown-basic-button" className="desktop-nav-button" title="Projects">
                  <Dropdown.Item href="/concertbuilder">Concert Builder</Dropdown.Item>
                  <Dropdown.Item href="/orchesnation">OrchesNation</Dropdown.Item>
                  <Dropdown.Item href="/marsrover">Mars Rover</Dropdown.Item>
                </DropdownButton>
                <Nav.Link className="desktop-nav-link" href="mailto: tristan.raissherman@gmail.com">Contact</Nav.Link>
                <Nav.Link className="desktop-nav-link" href="https://www.twitch.tv/orchestraobsessed" target="_blank">Twitch</Nav.Link>
              </Nav>  
          </Container>
          
      </Container>
    )
}

export default Header


