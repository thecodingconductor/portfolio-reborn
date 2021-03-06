import React, {Fragment, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import OrchesNationHome from '../assets/desktopOrchesNationHome.png'
import OrchesNationFeature from '../assets/desktopOrchesNationFeature.png'
import MarsRoverHome from '../assets/desktopMarsRover.png'


const OrchesNation = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
       
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
        <Container className="project-top-container" fluid>
        <h1 className="project-page-project-title">OrchesNation</h1>
            <div className="inner d-flex align-items-start justify-content-between">
               
                <div className="text-container">
                   
                    <p>Web application to assist orchestral professionals organize their contact lists, and view organizations' personnel.</p>
                    <p>Full Stack Application built with React, Node.js, Express, MongoDB, and REST API's.</p>
                </div>

                <div className="d-flex flex-column justify-content-between button-container">

                    <a href="https://www.orchesnation.com" target="_blank" rel="noreferrer">
                        <Button className="visit-site-button">Visit Site</Button>
                    </a>
                    <a href="https://github.com/thecodingconductor/peopleBook" target="_blank" rel="noreferrer">
                        <Button className="visit-code-button">Visit Code</Button>
                    </a>

                </div>
            </div>


        </Container>
        <Container className="project-middle-container" fluid>
            <div className="inner-middle">
                <img src={OrchesNationHome} alt="Mars Rover Home" className="project-image-main concert-builder-image-main" />
                <div className="image-spacer concertbuilder-image-spacer"></div>
                <h2 className="Key Feature">Key Features</h2>
                <p className="feature">React Hooks</p>
                <p className="feature">ExpressJS, MongoDB</p>
                <p className="feature">REST API's</p>
                <img src={OrchesNationFeature} alt="Mars Rover Favorites" className="project-image-bottom concert-builder-image-bottom" />
            </div>


        </Container>
        <Container className="project-bottom-container" fluid>
            <div className="inner-bottom">
                <h2>Next Project</h2>
                <h4>Mars Rover</h4>
                <Link to='/marsrover'>
                    <Container className="project-container" fluid>

                        <img src={MarsRoverHome} alt="Mars Rover Home" className="mars-rover-photo next-project-image" />
                    </Container>
                </Link>
            </div>



        </Container>
    </Fragment>

    )
}

export default OrchesNation
