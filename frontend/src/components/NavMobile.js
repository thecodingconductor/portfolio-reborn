import React from 'react'
import {Container} from 'react-bootstrap';
import NavClose from '../assets/icon-close.svg'

const NavMobile = () => {
    return (
        <Container className="mobile-nav-container" fluid>
            <Container className="nav-content-wrapper d-flex flex-column align-items-center">
                <Container className="header-nav-overlay d-flex align-items-center justify-content-between" fluid>
                    <Container>
                        <img src={NavClose} alt="Close Mobile Nav" className="close-mobile-nav"></img>
                    </Container>
                    <Container>
                        <h4 className="mobile-nav-title">Tristan Rais-Sherman</h4>
                    </Container>
                </Container>
                <Container>

                </Container>
                <Container>

                </Container>
            </Container>
        </Container>
    )
}

export default NavMobile
