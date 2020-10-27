import React, { Component } from 'react'
import PageSecondImage from '../assets/img/frame.png';


class SectionPageSecond extends Component {

    render() {
        return (
            <div className="sectionPage">
                  <img src={PageSecondImage} className="PageImgSecond" style={{marginLeft:"-3vw"}} alt=""/>
                <div className="sectionPagetext">
                <h3>OpenType features</h3>
                <h5 style={{textAlign: "left"}}>Most calendars are designed for teams.<br/> Slate is designed for freelancers who <br/> want a simple way to plan their schedule.</h5>
                <h6>LEARN MORE</h6>
                </div>
                
            </div>
        )
    }
}

export default SectionPageSecond;
