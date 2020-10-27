import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="container">  
 <Switch>
   <Route exact path = "/Dashboard" component ={Dashboard} />


 </Switch>
 


</div>
      </Router>
        
      </div>
    )
  }
}
export default App;
