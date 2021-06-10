import React, {useState} from 'react';
import {Container, Button, Alert} from 'react-bootstrap';
import {CSSTransition} from 'react-transition-group'

const GetInTouch = () => {
    
    const onClickHandler = () => {
        window.open("mailto: tristan.raissherman@gmail.com")
    }

    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    
    return (
        <Container className="get-in-touch-container d-flex flex-column align-items-center" fluid>
            <p className="get-in-touch-text">
                As a musician, your work is never over.
                You are on a lifelong journey of discovery, learning, and improvement.
                The same can be said about web development and computer science as a whole.
            </p>
            <p className="get-in-touch-text">
                I find the process of solving problems using code to be endlessly challenging
                and fasinating, and I am eager to continue my journey.
            </p>
            <p className="view-project" onClick={onClickHandler}>
                GET IN TOUCH
                <span className="line-through-work get-in-touch-line"></span>
            </p>



            <Container style={{ paddingTop: '2rem' }}>
                {showButton && (
                        <Button
                        onClick={() => setShowMessage(true)}
                        size="lg"
                        >
                            Show Message
                        </Button>
                )}
                <CSSTransition
                    in={showMessage}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setShowButton(false)}
                    onExited={() => setShowButton(true)}
                >
                    <Alert
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                    >
                    <Alert.Heading>
                        Animated alert message
                    </Alert.Heading>
                    <p>
                        This alert message is being transitioned in and
                        out of the DOM.
                    </p>
                    <Button onClick={() => setShowMessage(false)}>
                        Close
                    </Button>
                    </Alert>
                </CSSTransition>
                </Container>
        </Container>
    )
}

export default GetInTouch
