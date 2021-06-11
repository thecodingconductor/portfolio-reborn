import React, {useEffect, useContext, useRef} from 'react'
import {Container, Button} from 'react-bootstrap'
import Headphones from '../assets/img-headphones.svg'
import FeaturedProjects from '../components/FeaturedProjects'
import DesktopFeaturedProjects from '../components/DesktopFeaturedProjects'
import GetInTouch from '../components/GetInTouch'
import NavContext from '../context/nav/navContext'


const HomeScreen = (props) => {

    const navContext = useContext(NavContext);
    const { mobileNavAction} = navContext;

    useEffect(() => {
        mobileNavAction(false)
        // eslint-disable-next-line
    }, [])

    const featuredProjects = useRef(null)
    const desktopFeaturedProjects = useRef(null)
    const desktopHeadphones = useRef(null)
    


    const executeScroll = (e) => {
        console.log(e.target)

        e.target.classList.contains('desktop-view-work') ? 
        
        window.scrollTo({
            behavior: "smooth",
            top: desktopFeaturedProjects.current.offsetTop
          }) : window.scrollTo({
            behavior: "smooth",
            top: featuredProjects.current.offsetTop
          });
    }

    return (
        
            <>
           
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
            
            <Container className="desktop-about-me-headphones-container" ref={desktopHeadphones}>
                <Container className="desktop-headphones-container">
                    <img src={Headphones} alt="Headphones" className="headphones-image"></img>
                </Container>
                <Container className="desktop-about-me-container">
                    <p className="about-me-text">
                        Thanks for stopping by. I am a self-taught front-end web developer based in New Haven, CT. 
                        I am a classically trained orchestral conductor, music producer, cellist, and guitarist.
                    </p>
                    <Container className="desktop-view-work-container">
                        <Button className="view-work-button view-project desktop-view-work" onClick={executeScroll}>
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
                <Button className="view-work-button view-project" onClick={executeScroll}>
                    View My Work
                    <span className="line-through-work"></span>
                </Button>
            </Container>
            <Container className="featured-projects-container" fluid ref={featuredProjects}>
                <FeaturedProjects send={props}/>
            </Container>
            <Container className="desktop-featured-projects-container" fluid ref={desktopFeaturedProjects}>
                <DesktopFeaturedProjects send={props}/>
            </Container>

            <GetInTouch />
          </>
      
    )
}

export default HomeScreen