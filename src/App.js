import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ConcertBuilder from './screens/ConcertBuilder'
import MarsRover from './screens/MarsRover'
import OrchesNation from './screens/OrchesNation'
import Header from './components/Header'
import Footer from './components/Footer'
import NavState from './context/nav/NavState'
import BackgroundGrid from './components/BackgroundGrid'


function App() {
  return (
    <>
      <NavState>
        <Router>
         
            <Container className="main-body-container">
              {/* <BackgroundGrid /> */}
              <Header />
              <Route exact path='/' component={HomeScreen}></Route>
              <Route exact path='/concertbuilder' component={ConcertBuilder}></Route>
              <Route exact path='/orchesnation' component={OrchesNation}></Route>
              <Route exact path='/marsrover' component={MarsRover}></Route>
            </Container>
            <Footer />
         
        </Router>
      </NavState>
      
    </>
  );
}

export default App;
