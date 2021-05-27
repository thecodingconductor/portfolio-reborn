import React from 'react'
import {Container, Button} from 'react-bootstrap'
import Header from '../components/Header'
import Headphones from '../assets/img-headphones.svg'

const HomeScreen = () => {
    return (
        <Container className="main-body-container">
            <Header />
            <Container className="main-title-container" fluid>
                <h1 className="main-title">Front-end developer, 
                conductor,
                streamer,
                and seltzer addict.</h1>
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
                <Button className="view-work-button">
                    View My Work
                </Button>
            </Container>
        </Container>
    )
}

export default HomeScreen
