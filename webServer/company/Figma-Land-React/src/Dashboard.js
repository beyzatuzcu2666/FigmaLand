
import React, { Component } from 'react'
import Footer from './components/Footer/Footer';
import CompanentFirst from './components/Main-Components/CompanentFirst';
import CompanentSecond from './components/Main-Components/CompanentSecond';
import CompanentThird from './components/Main-Components/CompanentThird';
import NavbarPage from './components/Navbar/NavbarPage';
import SectionFirst from './components/Section/SectionFirst';
import SectionPageFirst from './components/Section/SectionPageFirst';
import SectionPageSecond from './components/Section/SectionPageSecond';
import SectionSecond from './components/Section/SectionSecond';



export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
           
                <NavbarPage />
                <SectionFirst/>
                <SectionSecond/>
                <SectionPageFirst/>
                <SectionPageSecond/>
                <CompanentFirst/>
                <CompanentSecond/>
                <CompanentThird/>
                <Footer/>
            </div>
        )
    }
}
