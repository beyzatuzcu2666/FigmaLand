
import React, { Component } from 'react'
import Footer from './components/Footer/Footer';
import ComponentFirst from './components/Main-Components/ComponentFirst';
import ComponentSecond from './components/Main-Components/ComponentSecond';
import ComponentFourth from './components/Main-Components/ComponentFourth';
import ComponentThird from './components/Main-Components/ComponentThird';
import NavbarPage from './components/Navbar/NavbarPage';
import SectionFirst from './components/Section/SectionFirst';
import SectionPageFirst from './components/Section/SectionPageFirst';
import SectionPageSecond from './components/Section/SectionPageSecond';
import SectionSecond from './components/Section/SectionSecond';



 class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
           
                <NavbarPage />
                <SectionFirst/>
                <SectionSecond/>
                <SectionPageFirst/>
                <SectionPageSecond/>
                <ComponentFirst/>
                <ComponentSecond/>
                <ComponentThird/>
                <ComponentFourth/>
                <Footer/>
            </div>
        )
    }
}
export default Dashboard;