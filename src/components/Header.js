import React, {useState} from 'react'
// import NavContext from '../context/nav/navContext'
import {Container, Nav, DropdownButton, Dropdown} from 'react-bootstrap'
import Menu from '../assets/icon-menu.svg';
import NavMobile from './NavMobile'
import {useHistory} from 'react-router-dom'
// import {CSSTransition} from 'react-transition-group'
import useDelayUnmount from '../hooks/useDelayUnmount'


const Header = (props) => {

  const [isMounted, setIsMounted] = useState(false);
  const showDiv = useDelayUnmount(isMounted, 250);

  const [dropDownShow, setDropDownShow] = useState(false)

  const showDropdown = e => {
    setDropDownShow(!dropDownShow)
  }

  const hideDropdown = e => {
    setDropDownShow(false)
  }

  let history = useHistory();


  const returnHome = () => {
    history.push('/')
  }



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
      
                <DropdownButton id="dropdown-basic-button" show={dropDownShow} className="desktop-nav-button" title="Projects" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                  <Dropdown.Item href="/concertbuilder" className="d-flex justify-content-start align-items-center">Concert Builder</Dropdown.Item>
                  <Dropdown.Item href="/orchesnation" className="d-flex justify-content-start align-items-center">OrchesNation</Dropdown.Item>
                  <Dropdown.Item href="/marsrover" className="d-flex justify-content-start align-items-center">Mars Rover</Dropdown.Item>
                  <Dropdown.Item href="#" className="d-flex justify-content-start align-items-center">Mars Rover</Dropdown.Item>
                </DropdownButton>
                <Nav.Link className="desktop-nav-link" href="mailto: tristan.raissherman@gmail.com">Contact</Nav.Link>
                <Nav.Link className="desktop-nav-link" href="https://www.twitch.tv/orchestraobsessed" target="_blank">Twitch</Nav.Link>
              </Nav>  
          </Container>
          
      </Container>
    )
}

export default Header


