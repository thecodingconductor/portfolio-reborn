import React from 'react'
import {Container} from 'react-bootstrap';
import Instagram from '../assets/icon-instagram.svg'
import Twitter from '../assets/icon-twitter.svg'
import Twitch from '../assets/icon-twitch-white.svg'

const MobileNavFooter = () => {
    
    return (
        <Container className="mobile-footer-container d-flex flex-column align-items-center justify-content-between">
           
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
           <Container className="copyright-container-mobile" fluid>
                <p>Copyright 2021 Tristan Rais-Sherman</p>
           </Container>
       </Container>
    )
}

export default MobileNavFooter
