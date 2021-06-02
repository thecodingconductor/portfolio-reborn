import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer'
import NavState from './context/nav/NavState'


function App() {
  return (
    <>
      <NavState>
        <Router>
          <Container fluid>
            <Route exact path='/' component={HomeScreen}></Route>
            <Footer />
          </Container>
        </Router>
      </NavState>
      
    </>
  );
}

export default App;
