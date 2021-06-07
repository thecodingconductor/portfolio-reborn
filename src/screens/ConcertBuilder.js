import React, {Fragment, useEffect} from 'react'
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ConcertBuilderFeature from '../assets/concertBuilderFeature.png'
import ConcertBuilderPage from '../assets/concert-builder-new.png'
import OrchesNationHome from '../assets/orchesNationHomeFeature.png'


const ConcertBuilder = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
       
        // eslint-disable-next-line
    }, [])
    
    return (
        <Fragment>
        <Container className="project-top-container" fluid>
        <h1 className="project-page-project-title">Concert Builder</h1>
            <div className="inner d-flex align-items-start justify-content-between">
               
                <div className="text-container">
                    
                    <p>Full-stack application designed to assist orchestra conductors to research, develop, and plan concerts.</p>
                    <p>Built with Vanilla Javascript, CSS, and HTML. Flask backend with REST API's.</p>
                </div>

                <div className="d-flex flex-column justify-content-between button-container">

                    <a href="https://www.concertbuilder.com" target="_blank" rel="noreferrer">
                        <Button className="visit-site-button">Visit Site</Button>
                    </a>
                    <a href="https://github.com/thecodingconductor/concert-builder-rebuild" target="_blank" rel="noreferrer">
                        <Button className="visit-code-button">Visit Code</Button>
                    </a>

                </div>
            </div>


        </Container>
        <Container className="project-middle-container" fluid>
            <div className="inner-middle">
                <img src={ConcertBuilderFeature} alt="Mars Rover Home" className="project-image-main concert-builder-image-main" />
                <div className="image-spacer concertbuilder-image-spacer"></div>
                <h2 className="Key Feature">Key Features</h2>
                <p className="feature">Vanilla Javascript</p>
                <p className="feature">CSS, HTML</p>
                <p className="feature">Flask</p>
                <img src={ConcertBuilderPage} alt="Mars Rover Favorites" className="project-image-bottom concert-builder-image-bottom" />
            </div>


        </Container>
        <Container className="project-bottom-container" fluid>
            <div className="inner-bottom">
                <h2>Next Project</h2>
                <h4>OrchesNation</h4>
                <Link to="/orchesnation">
                    <Container className="project-container" fluid>

                        <img src={OrchesNationHome} alt="OrchesNation" className="mars-rover-photo" />
                    </Container>
                </Link>
            </div>

        </Container>
    </Fragment>

    )
}

export default ConcertBuilder
