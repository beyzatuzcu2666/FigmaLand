import React, { Component } from 'react'
import PageFirstImage from '../assets/img/photo.png';


class SectionPageFirst extends Component {
    render() {
        return (
            <div className="sectionPage" style={{marginLeft: "24vw"}}>
                
                <div className="sectionPagetext">
                <h3>OpenType features</h3>
                <h5 style={{textAlign: "left"}}>Most calendars are designed for teams.<br/> Slate is designed for freelancers who <br/> want a simple way to plan their schedule.</h5>
                <h6>LEARN MORE</h6>
                </div>
                <img src={PageFirstImage} className="PageImgFirst" alt=""/>
               


                
            </div>
        )
    }
}

export default  SectionPageFirst;
