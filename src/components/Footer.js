import React from 'react'
import {Container} from 'react-bootstrap'
import Instagram from '../assets/icon-instagram.svg'
import Twitter from '../assets/icon-twitter.svg'
import Twitch from '../assets/icon-twitch-white.svg'

const Footer = () => {
    return (
       <Container className="footer-container d-flex flex-column align-items-center justify-content-between" fluid>
           
           <Container className="d-flex justify-content-start footer-content-container" >
                <Container className="follow-container" fluid>
                    <h1>Follow</h1>
                </Container>
                <Container className="social-icons d-flex align-items-center justify-content-between" fluid>
                        <a href="https://www.instagram.com/tristanrais" rel="noreferrer" target="_blank">
                            <img src={Instagram} alt="Instagram Icon" className="social-icon"></img>
                        </a>
                        <a href="https://www.twitter.com/tristanconducts" rel="noreferrer" target="_blank">
                            <img src={Twitter} alt="Twitter Icon" className="social-icon"></img>
                        </a>
                        <a href="https://www.twitch.tv/orchestraobsessed" rel="noreferrer" target="_blank">
                            <img src={Twitch} alt="Twitch Icon" className="social-icon"></img>
                        </a>
                        
                     
                </Container>
             
           </Container>
           
           <Container className="contact-info-container">
                    <p>tristan.raissherman@gmail.com</p>
                    <p>203-610-4231</p>
                </Container>
           
           <Container className="copyright-container">
                <p>Copyright 2021 Tristan Rais-Sherman</p>
                
           </Container>
       </Container>
    )
}

export default Footer
