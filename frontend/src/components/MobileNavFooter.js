import React from 'react'
import {Container} from 'react-bootstrap';
import Instagram from '../assets/icon-instagram.svg'
import Twitter from '../assets/icon-twitter.svg'
import Twitch from '../assets/icon-twitch-white.svg'

const MobileNavFooter = () => {
    
    return (
        <Container className="mobile-footer-container d-flex flex-column align-items-center justify-content-between">
           
           <Container className="social-icons d-flex align-items-center justify-content-between" fluid>
                <img src={Instagram} alt="Instagram Icon"></img>
                <img src={Twitter} alt="Twitter Icon"></img>
                <img src={Twitch} alt="Twitch Icon"></img>
           </Container>
           <Container className="copyright-container-mobile" fluid>
                <p>Copyright 2021 Tristan Rais-Sherman</p>
           </Container>
       </Container>
    )
}

export default MobileNavFooter
