import React, { Component } from 'react'
import LogoImg from '../assets/img/logo.png';
import iconFirst from '../assets/img/twitter.png';
import iconThird from '../assets/img/linkedin.png'
import iconSecond from '../assets/img/facebook.png';








class Footer extends Component {
    render() {
        const mystyle = {
            marginTop: "6vh",
            marginLeft: "4vw"
          };
        return (
            <div className="footer">
            <div className="navbarPage">
            <img src={LogoImg} style={{marginBottom:"2vh"}} className="logo" alt=""/>
            <h5 style={mystyle} >Just type what's on your mind</h5>
           <ul className="navbar-menu">
         
               <li>Home</li>
               <li>Product</li>
               <li>About</li>
               <li>Contact</li>
           </ul>
           <div className="icon-group">
           <img src={iconFirst}  className="icon" alt=""/>
           <img src={iconSecond}  className="icon" alt=""/>
           <img src={iconThird}  className="icon" alt=""/>

          
           </div>
           </div>

           
           
           </div>

        )
    }
}
export default Footer;