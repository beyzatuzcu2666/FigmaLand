import React, { Component } from 'react'

class ComponentFourth extends Component {
    render() {

        const h2style = {  
            color: "black",
            textAlign:"Left"
        
            
            
          };
     
        


        return (
            <div className="component-fourth">
            <div className="part"> 
             <div className="text">We focus on ergonomic<br/> meeting</div>
             
            
              </div>
              <div className="part-2">
    
                  <h5 style={h2style}>Being a freelancer<br/> is a rollercoaster of emotions.<br/> We built Slate to keep your freelance business building...<br/><br/> <br/>Being a freelancer is a rollercoaster of emotions.<br/> We built Slate to keep your freelance business building...</h5>
                  <button className="option-button">Get Started</button>
              </div>

                
            </div>
        )
    }
}
export default ComponentFourth;