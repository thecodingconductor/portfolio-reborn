import React, {} from 'react'
import {Nav} from 'react-bootstrap';

const ProjectsExpanded = ({isProjectsMounted}) => {

    const collapsedStyles = {
        animation: "projectsExpand 700ms ease-in"
    };

    const expandedStyles = {
        animation: "projectsCollapse 700ms ease-out",
        animationFillMode: "forwards"
    }


    return (
        <Nav className="flex-column projects-expanded-container" style={isProjectsMounted ? collapsedStyles : expandedStyles}>
            <Nav.Link className="projects-nav-link" href="/concertbuilder">Concert Builder</Nav.Link>
            <Nav.Link className="projects-nav-link" href="/orchesnation">OrchesNation</Nav.Link>
            <Nav.Link className="projects-nav-link" href="/marsrover">Mars Rover</Nav.Link>
        </Nav>
    )
}

export default ProjectsExpanded
