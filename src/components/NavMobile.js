import React, {useContext, useState} from 'react'
import {Container, Nav} from 'react-bootstrap';
import NavClose from '../assets/icon-close.svg'
import MobileNavFooter from '../components/MobileNavFooter'
import NavContext from '../context/nav/navContext'
import ProjectsExpanded from '../components/ProjectsExpanded'
import useLockBodyScroll from '../hooks/useLockBodyScroll'
import {useHistory} from 'react-router-dom'
import useDelayUnmount from '../hooks/useDelayUnmount'


const NavMobile = ({isMounted, setIsMounted}) => {

    useLockBodyScroll();


    const navContext = useContext(NavContext)

    const {expandProjects, projectsExpanded} = navContext

 
    // const projectsHandler = () => {
    //     projectsExpanded ? expandProjects(false) : expandProjects(true)
    // }

    let history = useHistory();

    const returnHome = () => {
        history.push('/')
      }


    const mountedStyle = { animation: "inAnimation 500ms ease-in"}
    const unMountedStyle = {
        animation: "outAnimation 500ms ease-out",
        animationFillMode: "forwards"
    }

    const [isProjectsMounted, setIsProjectsMounted] = useState(false);
    const showDiv = useDelayUnmount(isProjectsMounted, 250);


    return (

       

        <Container className="mobile-nav-container" fluid style={isMounted ? mountedStyle: unMountedStyle}>
            <Container className="nav-content-wrapper d-flex flex-column align-items-center">
                <Container className="header-nav-overlay d-flex align-items-center justify-content-between" fluid>
                    <Container className="mobile-close-container">
                        <img src={NavClose} alt="Close Mobile Nav" className="close-mobile-nav" onClick={() => setIsMounted(!isMounted)}></img>
                    </Container>
                    <Container className="mobile-nav-title-container">
                        <h4 className="mobile-nav-title" onClick={returnHome}>Tristan Rais-Sherman</h4>
                    </Container>
                </Container>
                <Container className="mobile-nav-link-container">
                    <Nav className="flex-column mobile-nav-link-wrapper">
                        <Nav.Link className="mobile-nav-link" onClick={() => setIsProjectsMounted(!isProjectsMounted)}>Projects</Nav.Link>
                            {showDiv && 
                                <ProjectsExpanded isProjectsMounted={isProjectsMounted} setIsProjectsMounted={setIsProjectsMounted}/>
                            }
                        <Nav.Link className="mobile-nav-link" href="mailto: tristan.raissherman@gmail.com"> Contact</Nav.Link>
                        <Nav.Link className="mobile-nav-link" href="https://www.twitch.tv/orchestraobsessed" rel="noreferrer" target="_blank">Twitch</Nav.Link>
                        <Nav.Link className="mobile-nav-link" href="https://www.tristanraissherman.com" rel="noreferrer" target="_blank">Conductor Site</Nav.Link>
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
