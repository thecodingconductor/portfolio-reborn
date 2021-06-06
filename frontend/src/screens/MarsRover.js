import React, {Fragment, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import MarsRoverHome from '../assets/desktopMarsRoverHome.png'
import MarsRoverFavorites from '../assets/desktopMarsRoverFavorites.png'
import ConcertBuilderFeature from '../assets/concertBuilderFeature.png'


const MarsRover = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
       
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
        <Container className="project-top-container" fluid>
            <div className="inner d-flex align-items-center justify-content-between">
                <div className="text-container">
                    <h1 className="project-page-project-title">Mars Rover</h1>
                    <p>Front-end web application built with React and interacting with 3rd party NASA API's.</p>
                    <p>User can view randomly generated photos from the Mars Rovers and save favorites.</p>
                </div>

                <div className="d-flex flex-column justify-content-between button-container">

                    <a href="https://www.marsroverphotos.com" target="_blank" rel="noreferrer">
                        <Button className="visit-site-button">Visit Site</Button>
                    </a>
                    <a href="https://github.com/thecodingconductor/react-mars-rover" target="_blank" rel="noreferrer">
                        <Button className="visit-code-button">Visit Code</Button>
                    </a>

                </div>
            </div>


        </Container>
        <Container className="project-middle-container" fluid>
            <div className="inner-middle">
                <img src={MarsRoverHome} alt="Mars Rover Home" className="project-image-main concert-builder-image-main" />
                <div className="image-spacer concertbuilder-image-spacer"></div>
                <h2 className="Key Feature">Key Features</h2>
                <p className="feature">Vanilla Javascript</p>
                <p className="feature">CSS, HTML</p>
                <p className="feature">Flask</p>
                <img src={MarsRoverFavorites} alt="Mars Rover Favorites" className="project-image-bottom concert-builder-image-bottom" />
            </div>


        </Container>
        <Container className="project-bottom-container" fluid>
            <div className="inner-bottom">
                <h2>Next Project</h2>
                <h4>Concert Builder</h4>
                <Link to="/concertbuilder">
                    <Container className="project-container" fluid>

                        <img src={ConcertBuilderFeature} alt="Concert Builder" className="mars-rover-photo" />
                    </Container>
                </Link>
            </div>

        </Container>
    </Fragment>

    )
}

export default MarsRover
