import React, { Component } from 'react'
import CompanentImg from '../assets/img/Progresssbar.png';


class CompanentFirst extends Component {
    render() {
        return (
            <div className="companent-first">
                <div>
                <h2>A rethink of how we work</h2>
                <h5>Being a freelancer is a rollercoaster of emotions. We built Slate to keep your</h5>
                <div className="y">
                <img src={CompanentImg} className="CompanentImg" alt=""/>
                <button className="option-button">Get Started For Free</button>
                </div>
            </div>
            </div>
        )
    }
}
export default CompanentFirst;