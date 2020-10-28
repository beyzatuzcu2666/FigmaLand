import React, { Component } from 'react'

class ComponentThird extends Component {
    render() {

        const h2style = {  
            color: "white",
            textAlign:"Left"
            
        
            
            
          };
          const h4style = {  
              fontWeight:"800",
              fontSize:"50px"
        
        
            
          };



        return (
            <div className="companent-third">
            <div className="part"> 
             <h2 style={h2style}>Pricing </h2>
              <h5 style={h2style}>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</h5>
              </div>
              <div className="part-2">
                  
                  <h5 style={{color:"white"}}>30 DAYS FREE TRIAL</h5>
                  <div className="part3">
                  <h4 style={h4style}>$5</h4>
                  <p style={{color:"white"}}>/month per<br/>user</p></div>
                  <h5 style={{color:"white"}}>Most calendars are designed for teams.</h5>
                  <button className="option-button">Get Started</button>
              </div>

                
            </div>
        )
    }
}
export default ComponentThird;