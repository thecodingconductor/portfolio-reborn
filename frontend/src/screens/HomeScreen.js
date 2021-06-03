import React, {useEffect, useContext, useRef} from 'react'
import {Container, Button} from 'react-bootstrap'
import Header from '../components/Header'
import Headphones from '../assets/img-headphones.svg'
import FeaturedProjects from '../components/FeaturedProjects'
import DesktopFeaturedProjects from '../components/DesktopFeaturedProjects'
import GetInTouch from '../components/GetInTouch'
import NavContext from '../context/nav/navContext'


const HomeScreen = () => {

    const navContext = useContext(NavContext);
    const {navOpen} = navContext;


    // const mainContainer = useRef(null)



    // useEffect(() => {
    //     if(navOpen) {
    //        mainContainer.current.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = ''
    //     }
    // }, [navOpen])

    return (
        <Container className="main-body-container">
            <Header />
            <Container className="main-title-container" fluid>
                <h1 className="main-title">Front-end developer, 
                <span className="text-line-conductor">conductor,
                    <span className="line-through-conductor"></span>
                </span>
                <span className="text-line-streamer">streamer,
                    <span className="line-through-streamer"></span>
                </span>
                <br></br>and seltzer addict.</h1>
            </Container>
            
            <Container className="desktop-about-me-headphones-container">
                <Container className="desktop-headphones-container">
                    <img src={Headphones} alt="Headphones" className="headphones-image"></img>
                </Container>
                <Container className="desktop-about-me-container">
                    <p className="about-me-text">
                        Thanks for stopping by. I am a self-taught front-end web developer based in New Haven, CT. 
                        I am a classically trained orchestral conductor, music producer, cellist, and guitarist.
                    </p>
                    <Container className="desktop-view-work-container">
                        <Button className="view-work-button view-project">
                            View My Work
                            <span className="line-through-work"></span>
                        </Button>
            </Container>
                </Container>
            </Container>

            <Container className="headphones-container">
                <img src={Headphones} alt="Headphones" className="headphones-image"></img>
            </Container>
            <Container className="headphone-spacer">

            </Container>
            <Container className="about-me-container">
                <p className="about-me-text">
                    Thanks for stopping by. I am a self-taught front-end web developer based in New Haven, CT. 
                    I am a classically trained orchestral conductor, music producer, cellist, and guitarist.
                </p>
            </Container>
            <Container className="view-work-container">
                <Button className="view-work-button view-project">
                    View My Work
                    <span className="line-through-work"></span>
                </Button>
            </Container>
            <FeaturedProjects />
            <DesktopFeaturedProjects />
            <GetInTouch />
          
        </Container>
    )
}

export default HomeScreen
