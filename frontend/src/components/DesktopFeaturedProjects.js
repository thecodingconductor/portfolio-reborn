import React from 'react';
import {Container, Button} from 'react-bootstrap'
import ConcertBuilder from '../assets/concertBuilderDesktop.png'
import OrchesNation from '../assets/desktopOrchesNation.png'
import MarsRover from '../assets/desktopMarsRover.png'
import ArrowMobile from '../assets/arrow-mobile.svg'
import Can from '../assets/img-can.svg'

const DesktopFeaturedProjects = (props) => {

    
    const {history} = props.send
    

    const onClickHandler = (e) => {
        e.target.dataset.project === "concertbuilder" && history.push('/concertbuilder')
        e.target.dataset.project === "orchesnation" && history.push('/orchesnation')
        e.target.dataset.project === "marsrover" && history.push('/marsrover')
    }

    
    return (
       <Container className="desktop-featured-projects-container" fluid>
           <h1 className="featured-projects-text">
               Featured Projects

               <span className="underline-full-width"></span>
           
           </h1>
           
           <Container className="concert-builder-container d-flex" fluid>
              <Container className="desktop-project-left">
                <h4>Concert Builder</h4>
                <p>
                   Full-stack application designed to assist orchestra conductors to research, develop, and plan concerts.
                </p>
                <Container fluid className="view-project-button d-flex flex-row align-items-center justify-content-between">
                    <p className="view-project" data-project="concertbuilder" onClick={onClickHandler}>
                        VIEW PROJECT
                        <span className="line-through-work"></span>
                    </p>
                    <img src={ArrowMobile} alt="View Project" className="project-arrow" data-project="concertbuilder" onClick={onClickHandler}></img>
                </Container>
                <Container className="projects-tags-container d-flex flex-row justify-content-start" fluid>
                    <Button className="project-tag">Vanilla Javascript</Button>
                    <Button className="project-tag">Flask Backend</Button>
                </Container>
              </Container>
              <Container className="desktop-project-right">
                <img src={ConcertBuilder} alt="Concert Builder Home Page" className="concert-builder-image"></img>
              </Container> 
           </Container>

            <hr className="desktop-project-divider"></hr>

           <Container className="orchesnation-container d-flex" fluid>
              <Container className="desktop-project-left">
              <h4>OrchesNation</h4>
              <p>
                  Web application to assist orchestral professionals organize their contact lists, and view organizations' personnel. 
                </p>
                <Container fluid className="view-project-button d-flex flex-row align-items-center justify-content-between">
                    <p className="view-project" data-project="orchesnation" onClick={onClickHandler}>
                        VIEW PROJECT
                        <span className="line-through-work"></span>
                    </p>
                    <img src={ArrowMobile} alt="View Project" data-project="orchesnation" className="project-arrow" onClick={onClickHandler}></img>
                </Container>
                <Container className="projects-tags-container d-flex flex-row justify-content-start" fluid>
                    <Button className="project-tag-hooks project-tag">React Hooks</Button>
                    <Button className="project-tag">ExpressJS</Button>
                    <Button className="project-tag">MongoDB</Button>
                    <Button className="project-tag-rest project-tag">REST API</Button>
                </Container>
              </Container>
              <Container className="desktop-project-right">
              <img src={OrchesNation} alt="OrchesNation Home Page" className="orches-nation-image"></img>
              </Container> 
           </Container>

           <hr className="desktop-project-divider"></hr>

           <Container className="mars-rover-container d-flex" fluid>
              <Container className="desktop-project-left">
              <h4>Mars Rover</h4>
                <p>
                   User can view randomly generated photos from the Mars Rovers and save favorites.
                </p>
                <Container fluid className="view-project-button d-flex flex-row align-items-center justify-content-between">
                    <p className="view-project" data-project="marsrover" onClick={onClickHandler}>
                        VIEW PROJECT
                        <span className="line-through-work"></span>
                    </p>
                    <img src={ArrowMobile} alt="View Project" className="project-arrow" data-project="marsrover" onClick={onClickHandler}></img>
                </Container>
                <Container className="projects-tags-container d-flex flex-row justify-content-start" fluid>
                <Button className="project-tag">React Hooks</Button>
                    <Button className="project-tag">Sass</Button>
                </Container>
              </Container>
              <Container className="desktop-project-right">
              <img src={MarsRover} alt="Mars Rover Home Page" className="mars-rover-image"></img>

              </Container> 
           </Container>

           <hr className="desktop-project-divider"></hr>

          
           <Container className="view-all-projects-container" fluid>
                <img src={Can} alt="Can" className="can-image"></img>
                <Container className="can-spacer" fluid>

                </Container>
                <Container className="view-projects-selector d-flex align-items-center justify-content-between" fluid>
                    <div className="view-project d-flex align-items-center justify-content-center">
                        <p className="view-project">
                            VIEW ALL PROJECTS
                            <span className="line-through-work bottom-projects-line"></span>
                        </p>
                    </div>
                    <img src={ArrowMobile} alt="View Project" className="project-arrow"></img>
                </Container>
           </Container> 
       </Container>
    )
}

export default DesktopFeaturedProjects
