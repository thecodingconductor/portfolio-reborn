import React from 'react'
import Bubbz from '../assets/bubble.svg'

const Bubbles = () => {
    return (
        // <div id="bubbles"> 
        //     <div className="bubble x1"></div>
        //     <div className="bubble x2"></div>
        //     <div className="bubble x3"></div>
        //     <div className="bubble x4"></div>
        //     <div className="bubble x5"></div>
        // </div>

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
