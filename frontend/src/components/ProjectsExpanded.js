import React from 'react'
import {Nav} from 'react-bootstrap';

const ProjectsExpanded = () => {
    return (
        <Nav className="flex-column projects-expanded-container">
            <Nav.Link className="projects-nav-link" href="/concertbuilder">Concert Builder</Nav.Link>
            <Nav.Link className="projects-nav-link" href="/orchesnation">OrchesNation</Nav.Link>
            <Nav.Link className="projects-nav-link" href="/marsrover">Mars Rover</Nav.Link>
            
        </Nav>
    )
}

export default ProjectsExpanded
