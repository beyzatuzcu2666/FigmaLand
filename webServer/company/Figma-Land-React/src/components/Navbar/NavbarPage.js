import React, { Component } from 'react'
import LogoImg from '../assets/img/logo.png';
import IconImg from '../assets/img/icon.png';




class NavbarPage extends Component {

    
    
    render() {
        
        
        return (
            
            <div className="navbarPage">
                <img src={LogoImg} className="logo" alt=""/>
               <ul className="navbar-menu">
             
                   <li>Home</li>
                   <li>Product</li>
                   <li>About</li>
                   <li>Contact</li>
               </ul>
               <button className="button">Login</button>
               <img src={IconImg} className="icon-img" alt=""/>


               
               
               
            </div>
        )
        }
    
}
export default NavbarPage;
