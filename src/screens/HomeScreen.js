import React, {useEffect, useContext, useRef, useState} from 'react'
import {Container, Button} from 'react-bootstrap'
import Headphones from '../assets/headphones-only.svg'
import Papers from '../assets/img-fpo-1.svg'
import FeaturedProjects from '../components/FeaturedProjects'
import DesktopFeaturedProjects from '../components/DesktopFeaturedProjects'
import GetInTouch from '../components/GetInTouch'
import NavContext from '../context/nav/navContext'
import useInterval from '../hooks/useInterval'
import ArrowDown from '../assets/arrowdown.svg'


const HomeScreen = (props) => {

    const navContext = useContext(NavContext);
    const { mobileNavAction } = navContext;

    useEffect(() => {
        mobileNavAction(false)
        // eslint-disable-next-line
    }, [])

    const featuredProjects = useRef(null)
    const desktopFeaturedProjects = useRef(null)
    const desktopHeadphones = useRef(null)


    


    const executeScroll = (e) => {
        
        e.target.classList.contains('desktop-view-work') ? 
        
        window.scrollTo({
            behavior: "smooth",
            top: desktopFeaturedProjects.current.offsetTop
          }) : 
          
        window.scrollTo({
            behavior: "smooth",
            top: featuredProjects.current.offsetTop
          });
    }

    const openConductorPage = () => {
        window.open('https://www.tristanraissherman.com', '_blank').focus()
    }

    const openTwitchPage = () => {
        window.open('https://www.twitch.tv/orchestraobsessed', '_blank').focus()
    }



    return (
        
            <>
           
            <Container className="main-title-container" fluid>
                <h1 className="main-title">Front-end developer, 
                <span className="text-line-conductor" onClick={openConductorPage}>conductor,
                    <span className="line-through-conductor"></span>
                </span>
                <span className="text-line-streamer" onClick={openTwitchPage}>streamer,
                    <span className="line-through-streamer"></span>
                </span>
                <br></br>and seltzer addict.</h1>
            </Container>
            
            <Container className="desktop-about-me-headphones-container" ref={desktopHeadphones}>
                <Container className="desktop-images-container">
                    <img src={Headphones} alt="Headphones" className={`desktop-headphones-image`}></img>
                    <img src={Papers} alt="Papers" className="desktop-papers-image"></img>
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
                            <img src={ArrowDown} className="arrow-down" alt="arrow down"></img>
                        </Button>
                    </Container>
                </Container>
            </Container>

            <Container className="headphones-container">
                <img src={Headphones} alt="Headphones" className="headphones-image"></img>
            </Container>
            <Container className="papers-container">
                <img src={Papers} alt="Papers" className="papers-image"></img>
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
                    <img src={ArrowDown} className="arrow-down" alt="arrow down"></img>
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
