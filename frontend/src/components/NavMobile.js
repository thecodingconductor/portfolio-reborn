import React, {useContext} from 'react'
import {LinkContainer, Link} from 'react-router-bootstrap'
import {Container, Nav} from 'react-bootstrap';
import NavClose from '../assets/icon-close.svg'
import MobileNavFooter from '../components/MobileNavFooter'
import NavContext from '../context/nav/navContext'
import ProjectsExpanded from '../components/ProjectsExpanded'


const NavMobile = () => {

    const navContext = useContext(NavContext)

    const {mobileNavAction, expandProjects, projectsExpanded, navOpen} = navContext

    const closeMobileHandler = () => {
        navOpen ? mobileNavAction(false) : mobileNavAction(true)
    }

    const projectsHandler = () => {
        projectsExpanded ? expandProjects(false) : expandProjects(true)
    }

    return (
        <Container className="mobile-nav-container" fluid>
            <Container className="nav-content-wrapper d-flex flex-column align-items-center">
                <Container className="header-nav-overlay d-flex align-items-center justify-content-between" fluid>
                    <Container className="mobile-close-container">
                        <img src={NavClose} alt="Close Mobile Nav" className="close-mobile-nav" onClick={() => closeMobileHandler()}></img>
                    </Container>
                    <Container className="mobile-nav-title-container">
                        <h4 className="mobile-nav-title">Tristan Rais-Sherman</h4>
                    </Container>
                </Container>
                <Container className="mobile-nav-link-container">
                    <Nav className="flex-column mobile-nav-link-wrapper">
                        <Nav.Link className="mobile-nav-link" onClick={() => projectsHandler()}>Projects</Nav.Link>
                            {projectsExpanded && 
                                <ProjectsExpanded />
                            }
                        <Nav.Link className="mobile-nav-link">Contact</Nav.Link>
                        <Nav.Link className="mobile-nav-link">Twitch</Nav.Link>
                        <Nav.Link className="mobile-nav-link">Conductor Site</Nav.Link>
                    </Nav>
                </Container>
                <Container className="mobile-nav-footer">
                    <MobileNavFooter />
                </Container>
            </Container>
                
        
        </Container>
    )
}

export default NavMobile
