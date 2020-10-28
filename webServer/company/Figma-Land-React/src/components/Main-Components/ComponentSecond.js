import React, { Component } from 'react'
import BrandsImg from '../assets/img/Brands.png';
import ClientImg from '../assets/img/client.png';



class CompanentSecond extends Component {
    render() {
        return (
            <div className="companent-second">
                <p>Testimonails</p>
                <img src={BrandsImg} className="brandsImg" alt=""/>
                <h5>Being a freelancer is a rollercoaster of emotions.<br/> We built Slate to keep your freelance business less stressful.<br/>  We'd love to show you what we're building...</h5>
                <img src={ClientImg} className="clientImg" alt=""/>
                <button className="option-button">All Testimonails</button>

                
                
            </div>
        )
    }
}
export default CompanentSecond;
