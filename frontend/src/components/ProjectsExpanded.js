import React, {useContext} from 'react'
import {Container, Nav} from 'react-bootstrap';
import NavContext from '../context/nav/navContext'

const ProjectsExpanded = () => {
    return (
        <Nav className="flex-column projects-expanded-container">
            <Nav.Link className="projects-nav-link">Concert Builder</Nav.Link>
            <Nav.Link className="projects-nav-link">OrchesNation</Nav.Link>
            <Nav.Link className="projects-nav-link">Mars Rover</Nav.Link>
            
        </Nav>
    )
}

export default ProjectsExpanded
