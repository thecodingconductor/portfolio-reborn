import React from 'react'
import Bubbz from '../assets/bubble.svg'

const Bubbles = () => {
    return (


        <div id="bubbles"> 
            <img src={Bubbz} alt="Bubble"className="bubble x1"></img>
            <img src={Bubbz} alt="Bubble" className="bubble x2"></img>
            <img src={Bubbz} alt="Bubble" className="bubble x3"></img>
            <img src={Bubbz} alt="Bubble" className="bubble x4"></img>
            <img src={Bubbz} alt="Bubble" className="bubble x5"></img>
        </div>
        
    )
}

export default Bubbles
