import React from 'react';
import {Container, Button} from 'react-bootstrap'
import ConcertBuilder from '../assets/concertBuilderHome.png'
import OrchesNation from '../assets/orchesNationHome.png'
import MarsRover from '../assets/marsRoverHome.png'
import ArrowMobile from '../assets/arrow-mobile.svg'
import Can from '../assets/img-can.svg'
import Bubbles from './Bubbles';
const FeaturedProjects = (props) => {


    const {history} = props.send
    

    const onClickHandler = (e) => {
        e.target.dataset.project === "concertbuilder" && history.push('/concertbuilder')
        e.target.dataset.project === "orchesnation" && history.push('/orchesnation')
        e.target.dataset.project === "marsrover" && history.push('/marsrover')
    }

    return (
       <>
           <h1 className="featured-projects-text">
               Featured Projects

               <span className="underline-full-width"></span>
           
           </h1>
           
           <Container className="concert-builder-container" fluid>
                
               <h4>Concert Builder</h4>
               <p>
                   Full-stack application designed to assist orchestra conductors to research, develop, and plan concerts.
               </p>
               <img src={ConcertBuilder} alt="Concert Builder Home Page" className="concert-builder-image"></img>
                <Container fluid className="view-project-button d-flex flex-row align-items-center justify-content-between">
                    <p className="view-project" data-project="concertbuilder" onClick={onClickHandler}>
                        VIEW PROJECT
                        <span className="line-through-work"></span>
                    </p>
                    <img src={ArrowMobile} alt="View Project" className="project-arrow"></img>
                </Container>
                <Container className="projects-tags-container" fluid>
                    <Button className="project-tag">Vanilla Javascript</Button>
                    <Button className="project-tag">Flask Backend</Button>
                </Container>
           </Container>

           <hr className="mobile-project-divider"></hr>

           <Container className="orchesnation-container" fluid>
                <h4>OrchesNation</h4>
                <p>
                  Web application to assist orchestral professionals organize their contact lists, and view organizations' personnel. 
                </p>
                <img src={OrchesNation} alt="OrchesNation Home Page" className="orches-nation-image"></img>
                <Container fluid className="view-project-button d-flex flex-row align-items-center justify-content-between">
                    <p className="view-project" data-project="orchesnation" onClick={onClickHandler}>
                        VIEW PROJECT
                        <span className="line-through-work"></span>
                    </p>
                    <img src={ArrowMobile} alt="View Project" className="project-arrow"></img>
                </Container>
                <Container className="projects-tags-container" fluid>
                    <Button className="project-tag">React Hooks</Button>
                    <Button className="project-tag">ExpressJS, MongoDB</Button>
                    <Button className="project-tag">REST API</Button>
                </Container>
           </Container>

           <hr className="mobile-project-divider"></hr>

           <Container className="mars-rover-container" fluid>
                <h4>Mars Rover</h4>
                <p>
                    Front-end application for viewing random images from the Mars Rovers.
                </p>
                <img src={MarsRover} alt="Mars Rover Home Page" className="mars-rover-image"></img>
                <Container fluid className="view-project-button d-flex flex-row align-items-center justify-content-between">
                    <p className="view-project" data-project="marsrover" onClick={onClickHandler}>
                        VIEW PROJECT
                        <span className="line-through-work"></span>
                    </p>
                    <img src={ArrowMobile} alt="View Project" className="project-arrow"></img>
                </Container>
                <Container className="projects-tags-container d-flex flex-column align-items-start" fluid>
                    <Button className="project-tag">React Hooks</Button>
                    <Button className="project-tag">Sass</Button>
                </Container>
           </Container>
           <Container className="view-all-projects-container" fluid>
                <Bubbles />
                <img src={Can} alt="Can" className="can-image"></img>
                <Container fluid style={{ height: '300px'}}>

                </Container>
               
               
           </Container>
       </>
    )
}

export default FeaturedProjects
