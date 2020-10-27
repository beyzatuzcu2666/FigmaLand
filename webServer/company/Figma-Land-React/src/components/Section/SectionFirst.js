import React, { Component } from 'react'
import GraphicsImg from '../assets/img/screen.png';


class SectionFirst extends Component {
    render() {
        return (
            <div className="section-First">
                <h2>Lightning fast <br/> prototyping</h2>
                <h5>Most calendars are designed for teams. Slate is <br/> designed for freelancers.</h5>
                <div className="buttons-group">
                <button className="option-button-first">Get started</button>
                <button className="option-button-second">Try For Free</button>
                </div>
                <img src={GraphicsImg} className="graphics-img" alt=""/>
                
                
            </div>
        )
    }
}
export default SectionFirst;
